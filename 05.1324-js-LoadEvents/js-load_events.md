# JavaScript Load Events

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Load Events](#javascript-load-events)
  - [DOMContentLoaded](#domcontentloaded)
    - [Example 1](#example-1)
  - [Window Load](#window-load)
    - [Example 2](#example-2)
  - [Other Load Events](#other-load-events)
  - [Image Load](#image-load)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## DOMContentLoaded

The `DOMContentLoaded` event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Load Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>DOMContentLoaded</h4>
<p id="demo"></p>

<script>
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("demo").innerHTML = "DOM fully loaded and parsed!";
});
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-dom_content_loaded/index.html)

## Window Load

The `window.onload` event fires when the entire page loads including all content (images, CSS, scripts, etc.).

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Load Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Load</h4>
<p id="demo"></p>

<script>
window.onload = function() {
  document.getElementById("demo").innerHTML = "Window fully loaded (including images)!";
};
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-window_load/index.html)

## Other Load Events

Here are other load-related events:

| Event | Description |
|-------|-------------|
| `DOMContentLoaded` | Fires when the HTML document is loaded and parsed |
| `load` | Fires when the entire page (including resources) has loaded |
| `beforeunload` | Fires when the document is about to be unloaded |
| `unload` | Fires once a page has unloaded (or the browser window has been closed) |
| `error` | Fires when an error occurs while loading an external resource |

## Image Load

The `load` event can be used on images to know when an image has finished loading:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Load Events</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Image Load</h4>
<img id="myImg" src="https://www.w3schools.com/js/pic_bulboff.gif" width="100" height="180">
<p id="demo"></p>

<script>
document.getElementById("myImg").onload = function() {
  document.getElementById("demo").innerHTML = "Image loaded successfully!";
};
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-image_load/index.html)

## Document

Document in project

You can [Download PDF](js-load_events.pdf) file.

## Reference

- [W3Schools JavaScript Load Events](https://www.w3schools.com/js/js_events_load.asp)