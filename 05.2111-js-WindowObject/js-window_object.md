# JavaScript Window Object

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Window Object](#javascript-window-object)
  - [The Browser Object Model (BOM)](#the-browser-object-model-bom)
  - [The Window Object](#the-window-object)
    - [Example 1](#example-1)
  - [Window Size](#window-size)
    - [Example 2](#example-2)
  - [Window Methods](#window-methods)
    - [Example 3](#example-3)
  - [Other Window Properties](#other-window-properties)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## The Browser Object Model (BOM)

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. The `window` object is the global object in the browser and represents the browser window.

All global JavaScript objects, functions, and variables automatically become members of the `window` object.

## The Window Object

The `window` object is the browser's global object. It contains properties and methods for interacting with the browser window:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Object</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Window Object</h4>
<p id="demo"></p>

<script>
let text = "Window properties:<br><br>";
text += "window.innerWidth: " + window.innerWidth + "px<br>";
text += "window.innerHeight: " + window.innerHeight + "px<br>";
text += "window.outerWidth: " + window.outerWidth + "px<br>";
text += "window.outerHeight: " + window.outerHeight + "px<br>";
text += "window.name: " + window.name + "<br>";
text += "window.closed: " + window.closed + "<br>";
text += "window.opener: " + window.opener;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-window_object/index.html)

## Window Size

The `window.innerWidth` and `window.innerHeight` properties get the browser window's size (excluding toolbars and scrollbars):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Object</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Size</h4>

<button onclick="showSize()">Show Window Size</button>
<button onclick="resizeWindow()">Resize to 800x600</button>
<p id="demo"></p>

<script>
function showSize() {
  document.getElementById("demo").innerHTML =
    "Inner window size:<br>" +
    "Width: " + window.innerWidth + "px<br>" +
    "Height: " + window.innerHeight + "px<br><br>" +
    "Outer window size:<br>" +
    "Width: " + window.outerWidth + "px<br>" +
    "Height: " + window.outerHeight + "px";
}

function resizeWindow() {
  window.resizeTo(800, 600);
  showSize();
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-window_size/index.html)

## Window Methods

The `window` object provides methods to open, close, and control browser windows:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Object</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Methods</h4>

<button onclick="openWindow()">Open New Window</button>
<button onclick="moveWindow()">Move Window</button>
<button onclick="closeWindow()">Close Window</button>
<p id="demo"></p>

<script>
let myWindow;

function openWindow() {
  myWindow = window.open("", "", "width=300,height=200");
  myWindow.document.write("<p>This is a new window.</p>");
  document.getElementById("demo").innerHTML = "New window opened!";
}

function moveWindow() {
  if (myWindow && !myWindow.closed) {
    myWindow.moveTo(500, 100);
    myWindow.resizeTo(400, 300);
    document.getElementById("demo").innerHTML = "Window moved and resized!";
  } else {
    document.getElementById("demo").innerHTML = "No open window to move!";
  }
}

function closeWindow() {
  if (myWindow && !myWindow.closed) {
    myWindow.close();
    document.getElementById("demo").innerHTML = "Window closed!";
  } else {
    document.getElementById("demo").innerHTML = "No open window to close!";
  }
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-window_methods/index.html)

## Other Window Properties

The `window` object also provides methods like `focus()`, `blur()`, `scrollBy()`, `scrollTo()`, and `print()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Object</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Other Window Properties</h4>

<button onclick="scrollDown()">Scroll Down</button>
<button onclick="scrollToTop()">Scroll to Top</button>
<button onclick="printPage()">Print</button>
<p id="demo"></p>

<div style="height: 1000px; background: linear-gradient(to bottom, #f0f0f0, #ddd);">
  <p>Scroll down to see the scroll effect.</p>
  <p style="margin-top: 800px;">You are at the bottom!</p>
</div>

<script>
function scrollDown() {
  window.scrollBy(0, 300);
  document.getElementById("demo").innerHTML =
    "Scrolled down! pageYOffset: " + window.pageYOffset;
}

function scrollToTop() {
  window.scrollTo(0, 0);
  document.getElementById("demo").innerHTML =
    "Scrolled to top! pageYOffset: " + window.pageYOffset;
}

function printPage() {
  window.print();
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-other_properties/index.html)

## Document

Document in project

You can [Download PDF](js-window_object.pdf) file.

## Reference

- [W3Schools JavaScript Window Object](https://www.w3schools.com/js/js_window.asp)