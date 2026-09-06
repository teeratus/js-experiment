# JavaScript Window History

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Window History](#javascript-window-history)
  - [Window History Back](#window-history-back)
    - [Example 1](#example-1)
  - [Window History Forward](#window-history-forward)
    - [Example 2](#example-2)
  - [Window History Go](#window-history-go)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Window History

The `window.history` object contains the browser's history.

For security reasons, it does not allow reading the URLs in the history, but it does allow navigating through the history.

## Window History Back

The `history.back()` method loads the previous URL in the history list. It is the same as clicking the Back button in the browser:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window History</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window History Back</h4>
<p id="demo"></p>

<button onclick="goBack()">Go Back</button>
<button onclick="showInfo()">History Info</button>

<script>
function goBack() {
  window.history.back();
}

function showInfo() {
  document.getElementById("demo").innerHTML =
    "History length: " + window.history.length + "<br>" +
    "Click 'Go Back' to navigate to the previous page";
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-history_back/index.html)

## Window History Forward

The `history.forward()` method loads the next URL in the history list. It is the same as clicking the Forward button in the browser:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window History</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window History Forward</h4>
<p id="demo"></p>

<button onclick="goBack()">Go Back</button>
<button onclick="goForward()">Go Forward</button>
<button onclick="showInfo()">History Info</button>

<script>
function goBack() {
  window.history.back();
}

function goForward() {
  window.history.forward();
}

function showInfo() {
  document.getElementById("demo").innerHTML =
    "History length: " + window.history.length + "<br>" +
    "Use Back/Forward buttons to navigate history";
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-history_forward/index.html)

## Window History Go

The `history.go()` method loads a specific URL from the history list. You can go backward or forward using positive or negative numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window History</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window History Go</h4>
<p id="demo"></p>

<button onclick="goBack2()">Go Back 2 Pages</button>
<button onclick="goForward2()">Go Forward 2 Pages</button>
<button onclick="showInfo()">History Info</button>

<script>
function goBack2() {
  window.history.go(-2);
}

function goForward2() {
  window.history.go(2);
}

function showInfo() {
  document.getElementById("demo").innerHTML =
    "History length: " + window.history.length + "<br><br>" +
    "history.go(-2): Go back 2 pages<br>" +
    "history.go(2): Go forward 2 pages<br>" +
    "history.go(0): Reload current page<br>" +
    "history.go(-1): Go back 1 page (same as back())<br>" +
    "history.go(1): Go forward 1 page (same as forward())";
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-history_go/index.html)

## Document

Document in project

You can [Download PDF](js-window_history.pdf) file.

## Reference

- [W3Schools JavaScript Window History](https://www.w3schools.com/js/js_window_history.asp)