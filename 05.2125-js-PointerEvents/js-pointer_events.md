# JavaScript Pointer Events API

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Pointer Events API](#javascript-pointer-events-api)
  - [Event Types](#event-types)
    - [Example 1](#example-1)
  - [Event Properties](#event-properties)
    - [Example 2](#example-2)
  - [Pointer Events API Benefits](#pointer-events-api-benefits)
    - [Example 3](#example-3)
  - [CSS pointer-events Property](#css-pointer-events-property)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Event Types

Pointer events are DOM events that are fired for pointing devices. They handle input from mice, pens, touch screens, and other pointing devices with a single event model.

The pointer events API provides the following event types:

| Event | Description |
|-------|-------------|
| `pointerdown` | When a pointer becomes active |
| `pointerup` | When a pointer is deactivated |
| `pointermove` | When a pointer changes coordinates |
| `pointerover` | When a pointer enters an element |
| `pointerout` | When a pointer leaves an element |
| `pointerenter` | When a pointer enters the hit test boundaries |
| `pointerleave` | When a pointer leaves the hit test boundaries |
| `pointercancel` | When a pointer event is canceled |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Pointer Events API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Event Types</h4>

<div id="target" style="width:300px;height:150px;background:#f0f0f0;border:2px solid #333;padding:10px;">
  Click, move, or press here
</div>

<p id="demo"></p>

<script>
const target = document.getElementById("target");

target.addEventListener("pointerdown", function(e) {
  document.getElementById("demo").innerHTML += 
    "pointerdown - button: " + e.button + "<br>";
});

target.addEventListener("pointerup", function(e) {
  document.getElementById("demo").innerHTML += 
    "pointerup<br>";
});

target.addEventListener("pointermove", function(e) {
  // Only update on every 10th move to reduce noise
  if (e.clientX % 10 === 0) {
    document.getElementById("demo").innerHTML = 
      "pointermove - X: " + e.clientX + ", Y: " + e.clientY;
  }
});
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-event_types/index.html)

## Event Properties

Pointer event objects have properties that provide information about the pointer device:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Pointer Events API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Event Properties</h4>

<div id="target2" style="width:300px;height:150px;background:#e8f0fe;border:2px solid #333;padding:10px;">
  Click here to see pointer properties
</div>

<p id="demo2"></p>

<script>
document.getElementById("target2").addEventListener("pointerdown", function(e) {
  document.getElementById("demo2").innerHTML =
    "pointerType: " + e.pointerType + "<br>" +
    "pointerId: " + e.pointerId + "<br>" +
    "button: " + e.button + "<br>" +
    "buttons: " + e.buttons + "<br>" +
    "clientX: " + e.clientX + "<br>" +
    "clientY: " + e.clientY + "<br>" +
    "screenX: " + e.screenX + "<br>" +
    "screenY: " + e.screenY + "<br>" +
    "pressure: " + e.pressure + "<br>" +
    "tiltX: " + e.tiltX + "<br>" +
    "tiltY: " + e.tiltY + "<br>" +
    "twist: " + e.twist + "<br>" +
    "width: " + e.width + "<br>" +
    "height: " + e.height;
});
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-event_properties/index.html)

## Pointer Events API Benefits

Pointer events unify mouse, touch, and pen input into a single event model. Benefits include:

- **Cross-device compatibility**: Works with mouse, touch, and pen
- **Simplified code**: One event handler instead of separate mouse and touch handlers
- **Additional data**: Pressure, tilt, twist, and contact geometry for pen/stylus
- **Event capture**: The pointer can be captured to a specific element

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Pointer Events API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Pointer Events API Benefits</h4>
<p id="demo3"></p>

<script>
// Check browser support for pointer events
let text = "Pointer Events API Support Check:<br><br>";

if (window.PointerEvent) {
  text += "✓ PointerEvent is supported in this browser<br><br>";
  text += "This means you can use:<br>";
  text += "- pointerdown, pointerup, pointermove<br>";
  text += "- Instead of separate mousedown/mouseup/touchstart handlers<br><br>";
  text += "Examples where pointer events help:<br>";
  text += "- Drawing applications (pen + touch + mouse)<br>";
  text += "- Drag and drop (any input device)<br>";
  text += "- Signature capture (pen pressure)<br>";
  text += "- Games (multiple touch points)";
} else {
  text += "✗ PointerEvent is NOT supported in this browser<br>";
  text += "Support falls back to mouse + touch events";
}

document.getElementById("demo3").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-benefits/index.html)

## CSS pointer-events Property

The CSS `pointer-events` property specifies whether an element responds to pointer events:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Pointer Events API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>CSS pointer-events Property</h4>
<p id="demo4"></p>

<div id="parent" style="position:relative;width:300px;height:100px;background:#ddd;">
  <div id="blocked" style="width:100px;height:100px;background:red;opacity:0.5;">
    Clickable (default)
  </div>
  <div id="clickable" style="position:absolute;top:0;left:150px;width:100px;height:100px;background:green;opacity:0.5;">
    <span id="child" style="pointer-events:none;">Not clickable</span>
  </div>
</div>

<button onclick="togglePointerEvents()">Toggle pointer-events</button>
<p id="status"></p>

<script>
const child = document.getElementById("child");
let enabled = true;

function togglePointerEvents() {
  enabled = !enabled;
  child.style.pointerEvents = enabled ? "none" : "auto";
  document.getElementById("status").innerHTML =
    "pointer-events: " + (enabled ? "none" : "auto") + 
    " (element " + (enabled ? "cannot" : "can") + " receive events)";
}

document.getElementById("parent").addEventListener("click", function() {
  document.getElementById("demo4").innerHTML = "Parent div clicked!";
});

// Show initial state
document.getElementById("status").innerHTML = 
  "pointer-events: none (green area child cannot receive events)";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-css_pointer_events/index.html)

## Document

Document in project

You can [Download PDF](js-pointer_events.pdf) file.

## Reference

- [W3Schools JavaScript Pointer Events API](https://www.w3schools.com/js/js_api_pointer_events.asp)