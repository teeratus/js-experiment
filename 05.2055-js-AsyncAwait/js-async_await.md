# JavaScript Async/Await

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Async/Await](#javascript-asyncawait)
  - [The async Keyword](#the-async-keyword)
    - [Example 1](#example-1)
  - [The await Keyword](#the-await-keyword)
    - [Example 2](#example-2)
  - [Compare Promise and async/await](#compare-promise-and-asyncawait)
    - [Example 3](#example-3)
  - [Handling Errors](#handling-errors)
    - [Example 4](#example-4)
  - [Multiple await](#multiple-await)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The async Keyword

The `async` keyword makes a function return a Promise.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async/Await</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The async Keyword</h4>
<p id="demo"></p>

<script>
async function myFunction() {
  return "Hello";
}

myFunction().then(function(value) {
  document.getElementById("demo").innerHTML = value;
});
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-async_keyword/index.html)

## The await Keyword

The `await` keyword makes a function wait for a Promise. It can only be used inside an `async` function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async/Await</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The await Keyword</h4>
<p id="demo"></p>

<script>
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Hello after 2 seconds!");
    }, 2000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-await_keyword/index.html)

## Compare Promise and async/await

Both approaches work with Promises, but async/await provides cleaner syntax:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async/Await</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Compare Promise and async/await</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
function getData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Data loaded");
    }, 1000);
  });
}

// Promise version
getData().then(function(value) {
  document.getElementById("demo1").innerHTML = "Promise: " + value;
});

// Async/await version
async function loadData() {
  let value = await getData();
  document.getElementById("demo2").innerHTML = "Async/await: " + value;
}
loadData();
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-compare/index.html)

## Handling Errors

Use `try/catch` to handle errors in async/await:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async/Await</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Handling Errors</h4>
<p id="demo"></p>

<script>
async function fetchData() {
  try {
    let result = await new Promise(function(resolve, reject) {
      let success = false;
      if (success) {
        resolve("Success!");
      } else {
        reject("Something went wrong");
      }
    });
    document.getElementById("demo").innerHTML = result;
  } catch(error) {
    document.getElementById("demo").innerHTML = "Error caught: " + error;
  }
}

fetchData();
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-error_handling/index.html)

## Multiple await

You can use multiple `await` statements in sequence:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async/Await</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Multiple await</h4>
<p id="demo"></p>

<script>
async function processSteps() {
  let step1 = await new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Step 1 done");
    }, 1000);
  });
  document.getElementById("demo").innerHTML += step1 + "<br>";

  let step2 = await new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Step 2 done");
    }, 1000);
  });
  document.getElementById("demo").innerHTML += step2 + "<br>";

  let step3 = await new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Step 3 done");
    }, 1000);
  });
  document.getElementById("demo").innerHTML += step3 + "<br>";

  document.getElementById("demo").innerHTML += "All steps complete!";
}

processSteps();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-multiple_await/index.html)

## Document

Document in project

You can [Download PDF](js-async_await.pdf) file.

## Reference

- [W3Schools JavaScript Async/Await](https://www.w3schools.com/js/js_async_await.asp)