# JavaScript API History

[Back to JS page](../acp-js.php)

> **Note:** For the basic `window.history` object (back/forward/go), see [05.2114-js-WindowHistory](../05.2114-js-WindowHistory/js-window_history.md). This topic covers the History API from the Web API perspective.

Table of Contents
- [JavaScript API History](#javascript-api-history)
  - [The History back() Method](#the-history-back-method)
    - [Example 1](#example-1)
  - [The History go() Method](#the-history-go-method)
    - [Example 2](#example-2)
  - [History Object Properties](#history-object-properties)
    - [Example 3](#example-3)
  - [History Object Methods](#history-object-methods)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## The History back() Method

The `history.back()` method loads the previous URL in the history list:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript API History</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The History back() Method</h4>
<button onclick="goBack()">Go Back</button>
<p id="demo"></p>

<script>
function goBack() {
  window.history.back();
}

// Show current history length
document.getElementById("demo").innerHTML =
  "History length: " + window.history.length;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-history_back/index.html)

## The History go() Method

The `history.go()` method loads a specific URL from the history list:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript API History</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The History go() Method</h4>
<button onclick="goBack()">Go Back 1 Page</button>
<button onclick="goForward()">Go Forward 1 Page</button>
<button onclick="reloadPage()">Reload (go 0)</button>
<p id="demo"></p>

<script>
function goBack() {
  window.history.go(-1);
}

function goForward() {
  window.history.go(1);
}

function reloadPage() {
  window.history.go(0);
}

document.getElementById("demo").innerHTML =
  "History API provides navigation control<br>" +
  "history.go(-1): back<br>" +
  "history.go(1): forward<br>" +
  "history.go(0): reload<br>" +
  "Current history length: " + window.history.length;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-history_go/index.html)

## History Object Properties

The History object has a `length` property that returns the number of URLs in the history list:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript API History</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>History Object Properties</h4>
<p id="demo"></p>

<script>
let text = "History Object Properties:<br><br>";
text += "history.length: " + window.history.length + "<br>";
text += "(Number of URLs in the history list)<br><br>";

text += "Note: For security reasons,<br>";
text += "history does not allow reading<br>";
text += "the actual URLs in the history.";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-history_properties/index.html)

## History Object Methods

The History object provides methods for navigating and manipulating the browser history:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript API History</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>History Object Methods</h4>
<p id="demo"></p>

<script>
let text = "History Object Methods:<br><br>";

text += "<b>history.back()</b><br>";
text += "- Loads the previous URL<br>";
text += "- Same as clicking the Back button<br><br>";

text += "<b>history.forward()</b><br>";
text += "- Loads the next URL<br>";
text += "- Same as clicking the Forward button<br><br>";

text += "<b>history.go(n)</b><br>";
text += "- Loads a specific page from history<br>";
text += "- Negative numbers go back<br>";
text += "- Positive numbers go forward<br>";
text += "- go(0) reloads the current page<br><br>";

text += "Current history length: " + window.history.length;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-history_methods/index.html)

## Document

Document in project

You can [Download PDF](js-api_history.pdf) file.

## Reference

- [W3Schools JavaScript API History](https://www.w3schools.com/js/js_api_history.asp)
- See also: [05.2114-js-WindowHistory](../05.2114-js-WindowHistory/js-window_history.md) for Window History basics