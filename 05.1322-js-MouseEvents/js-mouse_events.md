# JavaScript Mouse Events

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Mouse Events](#javascript-mouse-events)
  - [Mouseover and Mouseout](#mouseover-and-mouseout)
    - [Example 1](#example-1)
  - [Common Mouse Events](#common-mouse-events)
  - [Mouse Position](#mouse-position)
    - [Example 2](#example-2)
  - [Document](#document)
  - [Reference](#reference)


## Mouseover and Mouseout

The `onmouseover` and `onmouseout` events can be used to trigger a function when the user hovers over or leaves an HTML element.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Mouse Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Mouseover and Mouseout</h4>
<div onmouseover="mOver(this)" onmouseout="mOut(this)" 
style="background-color:#D94A38;width:200px;height:50px;padding:40px;color:white;text-align:center;font-size:20px">
Mouse Over Me
</div>

<script>
function mOver(obj) {
  obj.innerHTML = "Thank You"
}
function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-mouseover_mouseout/index.html)

## Common Mouse Events

Here is a list of common mouse events:

| Event | Description |
|-------|-------------|
| `onclick` | The user clicks an element |
| `ondblclick` | The user double-clicks an element |
| `onmousedown` | A mouse button is pressed over an element |
| `onmouseup` | A mouse button is released over an element |
| `onmouseover` | The mouse pointer moves onto an element |
| `onmouseout` | The mouse pointer moves out of an element |
| `onmousemove` | The mouse pointer moves over an element |
| `onmouseenter` | Similar to mouseover but does not bubble |

## Mouse Position

You can get the mouse cursor position using `clientX` and `clientY` properties from the event object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Mouse Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Mouse Position</h4>
<div onmousemove="getPosition(event)" 
style="background-color:#D94A38;width:300px;height:150px;padding:20px;color:white;text-align:center;font-size:18px">
Move mouse over this box
</div>
<p id="demo"></p>

<script>
function getPosition(event) {
  let x = event.clientX;
  let y = event.clientY;
  document.getElementById("demo").innerHTML = "Mouse position: X=" + x + ", Y=" + y;
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-mouse_position/index.html)

## Document

Document in project

You can [Download PDF](js-mouse_events.pdf) file.

## Reference

- [W3Schools JavaScript Mouse Events](https://www.w3schools.com/js/js_events_mouse.asp)