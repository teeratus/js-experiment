# JavaScript Keyboard Events

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Keyboard Events](#javascript-keyboard-events)
  - [The keydown Event](#the-keydown-event)
    - [Example 1](#example-1)
  - [Key Properties](#key-properties)
  - [Detect Enter](#detect-enter)
    - [Example 2](#example-2)
  - [Document](#document)
  - [Reference](#reference)


## The keydown Event

The `onkeydown` event occurs when the user presses a key on the keyboard.

You can use `event.key` to get the value of the key that was pressed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Keyboard Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The keydown Event</h4>
<p>Press a key in the input field:</p>
<input type="text" id="myInput" placeholder="Type something...">
<p id="demo"></p>

<script>
document.getElementById("myInput").addEventListener("keydown", function(event) {
  document.getElementById("demo").innerHTML = "Key pressed: " + event.key;
});
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-keydown_event/index.html)

## Key Properties

Keyboard events have the following important properties:

| Property | Description |
|----------|-------------|
| `event.key` | Returns the key value (character) of the key pressed |
| `event.code` | Returns the physical key code (e.g. "Enter", "KeyA") |
| `event.altKey` | Returns true if the ALT key was pressed |
| `event.ctrlKey` | Returns true if the CTRL key was pressed |
| `event.shiftKey` | Returns true if the SHIFT key was pressed |
| `event.metaKey` | Returns true if the META key (Windows key / Cmd) was pressed |

## Detect Enter

You can detect if the Enter key was pressed by checking `event.code === "Enter"`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Keyboard Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Detect Enter</h4>
<input type="text" id="in01" placeholder="Press Enter">
<p id="demo"></p>

<script>
const in01 = document.getElementById("in01");
in01.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    document.getElementById("demo").innerHTML = "Enter was pressed!";
  }
});
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-detect_enter/index.html)

## Document

Document in project

You can [Download PDF](js-keyboard_events.pdf) file.

## Reference

- [W3Schools JavaScript Keyboard Events](https://www.w3schools.com/js/js_events_keyboard.asp)