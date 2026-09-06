# JavaScript HTML DOM Content

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript HTML DOM Content](#javascript-html-dom-content)
  - [Changing HTML Content](#changing-html-content)
    - [Example 1](#example-1)
  - [The innerHTML Property](#the-innerhtml-property)
    - [Example 2](#example-2)
  - [Changing an Attribute](#changing-an-attribute)
    - [Example 3](#example-3)
  - [Dynamic HTML content](#dynamic-html-content)
    - [Example 4](#example-4)
  - [document.write()](#documentwrite)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Changing HTML Content

The easiest way to change the content of an HTML element is by using the `innerHTML` property.

To change the content of an HTML element, use this syntax:

`document.getElementById(id).innerHTML = new text`

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Content</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Changing HTML Content</h4>
<p id="demo">Original text</p>
<button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">Click Me!</button>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-changing_content/index.html)

## The innerHTML Property

The `innerHTML` property can be used to get or change any HTML element, including `<html>` and `<body>`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Content</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The innerHTML Property</h4>
<p id="demo1">First paragraph</p>
<p id="demo2">Second paragraph</p>

<script>
document.getElementById("demo1").innerHTML = "Content changed!";
document.getElementById("demo2").innerHTML = "<b>Bold text</b> with HTML tags";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-innerhtml_property/index.html)

## Changing an Attribute

To change an HTML attribute, use this syntax:

`document.getElementById(id).attribute = new value`

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Content</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Changing an Attribute</h4>
<img id="image" src="https://www.w3schools.com/js/pic_bulboff.gif" width="100" height="180">
<p>
<button type="button" onclick="document.getElementById('image').src='https://www.w3schools.com/js/pic_bulbon.gif'">Turn on the light</button>
<button type="button" onclick="document.getElementById('image').src='https://www.w3schools.com/js/pic_bulboff.gif'">Turn off the light</button>
</p>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-changing_attribute/index.html)

## Dynamic HTML content

JavaScript can create dynamic HTML content:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Content</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Dynamic HTML content</h4>
<p id="demo"></p>

<script>
const date = new Date();
document.getElementById("demo").innerHTML = "Today's date: " + date;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-dynamic_content/index.html)

## document.write()

The `document.write()` method can be used to write directly to the HTML output stream:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Content</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>document.write()</h4>
<p>Note: document.write() clears the document if used after the document has loaded.</p>

<script>
document.write("Hello from document.write!");
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-document_write/index.html)

## Document

Document in project

You can [Download PDF](js-htmldom_content.pdf) file.

## Reference

- [W3Schools JavaScript HTML DOM Content](https://www.w3schools.com/js/js_htmldom_html.asp)