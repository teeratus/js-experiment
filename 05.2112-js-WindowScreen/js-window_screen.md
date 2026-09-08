# JavaScript Window Screen

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Window Screen](#javascript-window-screen)
  - [Window Screen Width](#window-screen-width)
    - [Example 1](#example-1)
  - [Window Screen Height](#window-screen-height)
    - [Example 2](#example-2)
  - [Window Screen Available Width](#window-screen-available-width)
    - [Example 3](#example-3)
  - [Window Screen Available Height](#window-screen-available-height)
    - [Example 4](#example-4)
  - [Window Screen Color and Pixel Depth](#window-screen-color-and-pixel-depth)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Window Screen Width

The `screen.width` property returns the width of the visitor's screen in pixels:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Screen</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Screen Width</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Screen width: " + screen.width + "px";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-screen_width/index.html)

## Window Screen Height

The `screen.height` property returns the height of the visitor's screen in pixels:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Screen</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Screen Height</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Screen height: " + screen.height + "px";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-screen_height/index.html)

## Window Screen Available Width

The `screen.availWidth` property returns the width of the visitor's screen in pixels, minus interface features like the taskbar:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Screen</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Screen Available Width</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Available screen width: " + screen.availWidth + "px";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-avail_width/index.html)

## Window Screen Available Height

The `screen.availHeight` property returns the height of the visitor's screen in pixels, minus interface features like the taskbar:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Screen</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Screen Available Height</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Available screen height: " + screen.availHeight + "px";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-avail_height/index.html)

## Window Screen Color and Pixel Depth

The `screen.colorDepth` property returns the number of bits used to display one color. The `screen.pixelDepth` property returns the pixel depth of the screen:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Screen</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Screen Color and Pixel Depth</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Screen color depth: " + screen.colorDepth + " bits<br>" +
  "Screen pixel depth: " + screen.pixelDepth + " bits<br><br>" +
  "All screen properties:<br>" +
  "Total size: " + screen.width + " x " + screen.height + "<br>" +
  "Available: " + screen.availWidth + " x " + screen.availHeight + "<br>" +
  "Color depth: " + screen.colorDepth + " bits<br>" +
  "Pixel depth: " + screen.pixelDepth + " bits";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-color_pixel_depth/index.html)

## Document

Document in project

You can [Download PDF](js-window_screen.pdf) file.

## Reference

- [W3Schools JavaScript Window Screen](https://www.w3schools.com/js/js_window_screen.asp)