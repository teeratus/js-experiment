# JavaScript Async Fetch

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Async Fetch](#javascript-async-fetch)
  - [Fetching a File](#fetching-a-file)
    - [Example 1](#example-1)
  - [The Response Object](#the-response-object)
    - [Example 2](#example-2)
  - [Fetching JSON](#fetching-json)
    - [Example 3](#example-3)
  - [Loading Multiple Files](#loading-multiple-files)
    - [Example 4](#example-4)
  - [Handling Errors](#handling-errors)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Fetching a File

The `fetch()` method loads a file from a web server asynchronously. It returns a Promise that resolves to a Response object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Fetch</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Fetching a File</h4>
<p id="demo"></p>

<script>
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  document.getElementById("demo").innerHTML =
    "Title: " + data.title + "<br>" +
    "Body: " + data.body;
}

getData();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-fetch_file/index.html)

## The Response Object

The Response object has useful properties like `ok`, `status`, and `url`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Fetch</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Response Object</h4>
<p id="demo"></p>

<script>
async function getResponse() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  document.getElementById("demo").innerHTML =
    "ok: " + response.ok + "<br>" +
    "status: " + response.status + "<br>" +
    "statusText: " + response.statusText + "<br>" +
    "url: " + response.url;

  const data = await response.json();
  document.getElementById("demo").innerHTML += "<br>Name: " + data.name;
}

getResponse();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-response_object/index.html)

## Fetching JSON

The `response.json()` method parses the response body as JSON:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Fetch</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Fetching JSON</h4>
<p id="demo"></p>

<script>
async function fetchJSON() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  let text = "";
  for (let user of users) {
    text += user.name + " - " + user.email + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

fetchJSON();
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-fetch_json/index.html)

## Loading Multiple Files

You can load multiple files in parallel using `Promise.all()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Fetch</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Loading Multiple Files</h4>
<p id="demo"></p>

<script>
async function loadMultiple() {
  const [user, posts] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1'),
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  ]);

  const userData = await user.json();
  const postsData = await posts.json();

  document.getElementById("demo").innerHTML =
    "User: " + userData.name + "<br>" +
    "Email: " + userData.email + "<br><br>" +
    "Posts (" + postsData.length + "):<br>";

  for (let post of postsData.slice(0, 3)) {
    document.getElementById("demo").innerHTML += "- " + post.title + "<br>";
  }
}

loadMultiple();
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-multiple_files/index.html)

## Handling Errors

Always handle errors when using `fetch()`. Use `try/catch` to catch network errors and check `response.ok` for HTTP errors:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Fetch</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Handling Errors</h4>
<p id="demo"></p>

<script>
async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/invalid');

    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }

    const data = await response.json();
    document.getElementById("demo").innerHTML = "Name: " + data.name;
  } catch(error) {
    document.getElementById("demo").innerHTML = "Error caught: " + error.message;
  }
}

fetchWithErrorHandling();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-error_handling/index.html)

## Document

Document in project

You can [Download PDF](js-async_fetch.pdf) file.

## Reference

- [W3Schools JavaScript Async Fetch](https://www.w3schools.com/js/js_async_fetch.asp)