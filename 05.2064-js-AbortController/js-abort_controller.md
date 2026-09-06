# JavaScript AbortController

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript AbortController](#javascript-abortcontroller)
  - [Creating an AbortController](#creating-an-abortcontroller)
    - [Example 1](#example-1)
  - [Canceling a Fetch Request](#canceling-a-fetch-request)
    - [Example 2](#example-2)
  - [Cancel with a Button](#cancel-with-a-button)
    - [Example 3](#example-3)
  - [Cancel After a Timeout](#cancel-after-a-timeout)
    - [Example 4](#example-4)
  - [Cancel the Previous Request](#cancel-the-previous-request)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Why Cancel a Request?

Sometimes you need to cancel an ongoing async operation. For example:
- The user clicked a "Cancel" button
- The request is taking too long
- A newer request makes the previous one irrelevant

The `AbortController` API provides a way to cancel fetch requests (and other async operations).

## Creating an AbortController

An `AbortController` is created with `new AbortController()`. The controller has a `signal` property that is passed to the fetch request:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript AbortController</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Creating an AbortController</h4>
<p id="demo"></p>

<script>
const controller = new AbortController();
const signal = controller.signal;

document.getElementById("demo").innerHTML =
  "AbortController created<br>" +
  "signal.aborted: " + signal.aborted;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_controller/index.html)

## Canceling a Fetch Request

Pass the `signal` to `fetch()` and call `controller.abort()` to cancel:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript AbortController</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Canceling a Fetch Request</h4>
<p id="demo"></p>

<script>
async function fetchData() {
  const controller = new AbortController();
  const signal = controller.signal;

  // Cancel after 1 second
  setTimeout(function() {
    controller.abort();
  }, 1000);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1', { signal });
    const data = await response.json();
    document.getElementById("demo").innerHTML = "Success: " + data.name;
  } catch(error) {
    if (error.name === "AbortError") {
      document.getElementById("demo").innerHTML = "Fetch was aborted!";
    } else {
      document.getElementById("demo").innerHTML = "Error: " + error.message;
    }
  }
}

fetchData();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-cancel_fetch/index.html)

## Cancel with a Button

Allow users to cancel a request with a button click:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript AbortController</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Cancel with a Button</h4>
<button id="startBtn">Start Fetch</button>
<button id="cancelBtn">Cancel</button>
<p id="demo"></p>

<script>
let controller;

document.getElementById("startBtn").addEventListener("click", function() {
  controller = new AbortController();
  const signal = controller.signal;

  document.getElementById("demo").innerHTML = "Fetching...";

  fetch('https://jsonplaceholder.typicode.com/users', { signal })
    .then(function(response) { return response.json(); })
    .then(function(data) {
      document.getElementById("demo").innerHTML = "Loaded " + data.length + " users";
    })
    .catch(function(error) {
      if (error.name === "AbortError") {
        document.getElementById("demo").innerHTML = "Request was canceled by user";
      } else {
        document.getElementById("demo").innerHTML = "Error: " + error.message;
      }
    });
});

document.getElementById("cancelBtn").addEventListener("click", function() {
  if (controller) {
    controller.abort();
  }
});
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-cancel_button/index.html)

## Cancel After a Timeout

Automatically cancel a request if it takes too long (timeout):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript AbortController</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Cancel After a Timeout</h4>
<p id="demo"></p>

<script>
async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const signal = controller.signal;

  // Set timeout to abort
  const timeoutId = setTimeout(function() {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId); // Cancel the timeout if fetch completed
    const data = await response.json();
    document.getElementById("demo").innerHTML = "Data loaded in time!<br>User: " + data.name;
  } catch(error) {
    if (error.name === "AbortError") {
      document.getElementById("demo").innerHTML = "Timeout: Request took too long!";
    } else {
      document.getElementById("demo").innerHTML = "Error: " + error.message;
    }
  }
}

// Try with a 3-second timeout (should complete quickly)
fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 3000);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-timeout/index.html)

## Cancel the Previous Request

Cancel an old request when a new one starts (useful for search-as-you-type):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript AbortController</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Cancel the Previous Request</h4>
<p>Type in the input field:</p>
<input type="text" id="searchInput" placeholder="Search users...">
<p id="demo"></p>

<script>
let currentController = null;

document.getElementById("searchInput").addEventListener("input", function() {
  const query = this.value;
  if (query.length < 2) {
    document.getElementById("demo").innerHTML = "";
    return;
  }

  // Cancel the previous request
  if (currentController) {
    currentController.abort();
  }

  currentController = new AbortController();
  const signal = currentController.signal;

  document.getElementById("demo").innerHTML = "Searching for: " + query + "...";

  fetch('https://jsonplaceholder.typicode.com/users', { signal })
    .then(function(response) { return response.json(); })
    .then(function(users) {
      const results = users.filter(function(u) {
        return u.name.toLowerCase().includes(query.toLowerCase());
      });
      let text = "Found " + results.length + " users:<br>";
      for (let user of results) {
        text += user.name + "<br>";
      }
      document.getElementById("demo").innerHTML = text;
    })
    .catch(function(error) {
      if (error.name !== "AbortError") {
        document.getElementById("demo").innerHTML = "Error: " + error.message;
      }
    });
});
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-cancel_previous/index.html)

## Document

Document in project

You can [Download PDF](js-abort_controller.pdf) file.

## Reference

- [W3Schools JavaScript AbortController](https://www.w3schools.com/js/js_async_abortcontroller.asp)