# JavaScript Timers

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Timers](#javascript-timers)
  - [The setTimeout() Function](#the-settimeout-function)
    - [Example 1](#example-1)
  - [Using an Anonymous Function](#using-an-anonymous-function)
    - [Example 2](#example-2)
  - [Canceling a Timeout](#canceling-a-timeout)
    - [Example 3](#example-3)
  - [The setInterval() Function](#the-setinterval-function)
    - [Example 4](#example-4)
  - [Canceling an Interval](#canceling-an-interval)
    - [Example 5](#example-5)
  - [A Countdown Example](#a-countdown-example)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## The setTimeout() Function

The `setTimeout()` function runs a function after a specified number of milliseconds:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The setTimeout() Function</h4>
<p>Wait 2 seconds and a message will appear.</p>
<p id="demo"></p>

<script>
setTimeout(function() {
  document.getElementById("demo").innerHTML = "Hello after 2 seconds!";
}, 2000);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-set_timeout/index.html)

## Using an Anonymous Function

You can pass an anonymous function directly to `setTimeout()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using an Anonymous Function</h4>
<button onclick="startTimer()">Start Timer</button>
<p id="demo"></p>

<script>
function startTimer() {
  setTimeout(function() {
    document.getElementById("demo").innerHTML = "Timer finished!";
  }, 3000);
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-anonymous_function/index.html)

## Canceling a Timeout

The `clearTimeout()` function cancels a timeout set with `setTimeout()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Canceling a Timeout</h4>
<button onclick="startTimer()">Start Timer</button>
<button onclick="cancelTimer()">Cancel Timer</button>
<p id="demo"></p>

<script>
let timeoutId;

function startTimer() {
  timeoutId = setTimeout(function() {
    document.getElementById("demo").innerHTML = "Timer finished!";
  }, 3000);
  document.getElementById("demo").innerHTML = "Timer started...";
}

function cancelTimer() {
  clearTimeout(timeoutId);
  document.getElementById("demo").innerHTML = "Timer canceled!";
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-cancel_timeout/index.html)

## The setInterval() Function

The `setInterval()` function repeats a function at a specified interval:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The setInterval() Function</h4>
<p id="demo"></p>

<script>
let counter = 0;
setInterval(function() {
  counter++;
  document.getElementById("demo").innerHTML = "Counter: " + counter;
}, 1000);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-set_interval/index.html)

## Canceling an Interval

The `clearInterval()` function stops an interval set with `setInterval()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Canceling an Interval</h4>
<p id="demo"></p>
<button onclick="stopTimer()">Stop</button>

<script>
let counter = 0;
let intervalId = setInterval(function() {
  counter++;
  document.getElementById("demo").innerHTML = "Counter: " + counter;
}, 1000);

function stopTimer() {
  clearInterval(intervalId);
  document.getElementById("demo").innerHTML += " (stopped)";
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-cancel_interval/index.html)

## A Countdown Example

A countdown timer using `setInterval()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Timers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>A Countdown Example</h4>
<p id="demo"></p>
<button onclick="startCountdown()">Start Countdown</button>

<script>
function startCountdown() {
  let count = 10;
  document.getElementById("demo").innerHTML = count;
  
  let intervalId = setInterval(function() {
    count--;
    document.getElementById("demo").innerHTML = count;
    if (count === 0) {
      clearInterval(intervalId);
      document.getElementById("demo").innerHTML = "Blast off!";
    }
  }, 1000);
}
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-countdown/index.html)

## Document

Document in project

You can [Download PDF](js-timers.pdf) file.

## Reference

- [W3Schools JavaScript Timers](https://www.w3schools.com/js/js_timers.asp)