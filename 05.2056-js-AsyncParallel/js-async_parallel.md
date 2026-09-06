# JavaScript Async Parallel

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Async Parallel](#javascript-async-parallel)
  - [Sequential Operations](#sequential-operations)
    - [Example 1](#example-1)
  - [Independent Operations](#independent-operations)
    - [Example 2](#example-2)
  - [Promise.all()](#promiseall)
    - [Example 3](#example-3)
  - [Promise.allSettled()](#promiseallsettled)
    - [Example 4](#example-4)
  - [Promise.race()](#promiserace)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Sequential Operations

Sequential operations run one after another. Each operation waits for the previous one to complete:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Parallel</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Sequential Operations</h4>
<p id="demo"></p>

<script>
async function sequential() {
  let result1 = await new Promise(function(resolve) {
    setTimeout(function() {
      resolve("First result");
    }, 1000);
  });

  let result2 = await new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Second result");
    }, 1000);
  });

  document.getElementById("demo").innerHTML = result1 + "<br>" + result2 + "<br>Total: ~2 seconds";
}

sequential();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-sequential/index.html)

## Independent Operations

Independent operations do not depend on each other. They can run in parallel to save time:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Parallel</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Independent Operations</h4>
<p id="demo"></p>

<script>
async function independent() {
  let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Task 1 done");
    }, 1000);
  });

  let promise2 = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Task 2 done");
    }, 1000);
  });

  // Start both promises, then await both
  let result1 = await promise1;
  let result2 = await promise2;

  document.getElementById("demo").innerHTML = result1 + "<br>" + result2 + "<br>Total: ~1 second (parallel)";
}

independent();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-independent/index.html)

## Promise.all()

`Promise.all()` runs multiple promises in parallel and waits for ALL of them to complete:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Parallel</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Promise.all()</h4>
<p id="demo"></p>

<script>
const promise1 = new Promise(function(resolve) {
  setTimeout(function() { resolve("Promise 1 done"); }, 1000);
});

const promise2 = new Promise(function(resolve) {
  setTimeout(function() { resolve("Promise 2 done"); }, 2000);
});

const promise3 = new Promise(function(resolve) {
  setTimeout(function() { resolve("Promise 3 done"); }, 1500);
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  document.getElementById("demo").innerHTML =
    "All promises resolved in parallel:<br>" +
    values[0] + "<br>" +
    values[1] + "<br>" +
    values[2] + "<br>" +
    "Total time: ~2 seconds (not 4.5)";
});
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-promise_all/index.html)

## Promise.allSettled()

`Promise.allSettled()` waits for all promises to complete (regardless of resolve or reject):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Parallel</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Promise.allSettled()</h4>
<p id="demo"></p>

<script>
const promise1 = new Promise(function(resolve) {
  setTimeout(function() { resolve("Success!"); }, 1000);
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() { reject("Failed!"); }, 500);
});

const promise3 = new Promise(function(resolve) {
  setTimeout(function() { resolve("Done!"); }, 1500);
});

Promise.allSettled([promise1, promise2, promise3]).then(function(results) {
  let text = "";
  for (let result of results) {
    text += "Status: " + result.status + ", ";
    if (result.status === "fulfilled") {
      text += "Value: " + result.value;
    } else {
      text += "Reason: " + result.reason;
    }
    text += "<br>";
  }
  document.getElementById("demo").innerHTML = text;
});
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-promise_allsettled/index.html)

## Promise.race()

`Promise.race()` returns as soon as the FIRST promise settles (resolves or rejects):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Async Parallel</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Promise.race()</h4>
<p id="demo"></p>

<script>
const promise1 = new Promise(function(resolve) {
  setTimeout(function() { resolve("Fast Promise won!"); }, 1000);
});

const promise2 = new Promise(function(resolve) {
  setTimeout(function() { resolve("Slow Promise"); }, 3000);
});

Promise.race([promise1, promise2]).then(function(value) {
  document.getElementById("demo").innerHTML =
    "Winner: " + value + "<br>" +
    "Promise.race() returns the fastest result";
});
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-promise_race/index.html)

## Document

Document in project

You can [Download PDF](js-async_parallel.pdf) file.

## Reference

- [W3Schools JavaScript Async Parallel](https://www.w3schools.com/js/js_async_parallel.asp)