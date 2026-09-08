# JavaScript Events

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Events](#javascript-events)
  - [HTML Events](#html-events)
    - [Example 1](#example-1)
  - [Calling a JavaScript Function](#calling-a-javascript-function)
    - [Example 2](#example-2)
  - [Common HTML Events](#common-html-events)
  - [Using an Event Listener](#using-an-event-listener)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## HTML Events

An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

Often, when events occur, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTML Events</h4>
<p>Click the button to display the date.</p>
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
<p id="demo"></p>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-html_events/index.html)

## Calling a JavaScript Function

You can call a JavaScript function when an event occurs, such as when a user clicks on an element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Calling a JavaScript Function</h4>
<p id="demo">Click the button to call a function.</p>
<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Function called!";
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-calling_function/index.html)

## Common HTML Events

Here is a list of some common HTML events:

| Event | Description |
|-------|-------------|
| `onchange` | An HTML element has been changed |
| `onclick` | The user clicks an HTML element |
| `onmouseover` | The user moves the mouse over an HTML element |
| `onmouseout` | The user moves the mouse away from an HTML element |
| `onkeydown` | The user pushes a keyboard key |
| `onload` | The browser has finished loading the page |

## Using an Event Listener

The `addEventListener()` method attaches an event handler to an element without overwriting existing event handlers.

You can add many event handlers to one element. You can also add many event handlers of the same type to one element.

You can add event listeners to any DOM object not only HTML elements. i.e. the window object.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using an Event Listener</h4>
<button id="myBtn">Try it</button>
<p id="demo"></p>

<script>
document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Button clicked using addEventListener!";
});
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-event_listener/index.html)

## Document

Document in project

You can [Download PDF](js-events.pdf) file.

## Reference

- [W3Schools JavaScript Events](https://www.w3schools.com/js/js_events.asp)