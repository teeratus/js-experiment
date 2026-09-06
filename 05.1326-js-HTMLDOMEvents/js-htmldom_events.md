# JavaScript HTML DOM Events

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript HTML DOM Events](#javascript-html-dom-events)
  - [Reacting to Events](#reacting-to-events)
    - [Example 1](#example-1)
  - [HTML Event Attributes](#html-event-attributes)
    - [Example 2](#example-2)
  - [Assign Events Using the HTML DOM](#assign-events-using-the-html-dom)
    - [Example 3](#example-3)
  - [The onload Event](#the-onload-event)
    - [Example 4](#example-4)
  - [The oninput Event](#the-oninput-event)
    - [Example 5](#example-5)
  - [The onchange Event](#the-onchange-event)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Reacting to Events

A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Reacting to Events</h4>
<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>
<p id="demo"></p>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-reacting_events/index.html)

## HTML Event Attributes

To assign events to HTML elements you can use event attributes like `onclick`, `onmouseover`, etc.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTML Event Attributes</h4>
<p>Click the button to display a message.</p>
<button onclick="displayDate()">Click me</button>
<p id="demo"></p>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-event_attributes/index.html)

## Assign Events Using the HTML DOM

The HTML DOM allows you to assign events to HTML elements using JavaScript:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Assign Events Using the HTML DOM</h4>
<button id="myBtn">Click me</button>
<p id="demo"></p>

<script>
document.getElementById("myBtn").onclick = function() {
  document.getElementById("demo").innerHTML = "Button clicked!";
};
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-assign_events_dom/index.html)

## The onload Event

The `onload` event is often used to check the visitor's browser type and cookie version.

The `onload` event can be used to deal with cookies:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The onload Event</h4>
<p id="demo"></p>

<script>
window.onload = function() {
  document.getElementById("demo").innerHTML = "Page fully loaded!";
};
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-onload_event/index.html)

## The oninput Event

The `oninput` event fires when a user writes something in an input field:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The oninput Event</h4>
<p>Write something in the input field:</p>
<input type="text" id="myInput" oninput="myFunction()">
<p id="demo"></p>

<script>
function myFunction() {
  let x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-oninput_event/index.html)

## The onchange Event

The `onchange` event fires when a user changes the value of an input element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The onchange Event</h4>
<p>Select a car:</p>
<select id="mySelect" onchange="myFunction()">
  <option value="Volvo">Volvo</option>
  <option value="BMW">BMW</option>
  <option value="Audi">Audi</option>
</select>
<p id="demo"></p>

<script>
function myFunction() {
  let x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-onchange_event/index.html)

## Document

Document in project

You can [Download PDF](js-htmldom_events.pdf) file.

## Reference

- [W3Schools JavaScript HTML DOM Events](https://www.w3schools.com/js/js_htmldom_events.asp)