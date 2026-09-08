# JavaScript HTML DOM Methods

[Back to JS page](../index.html)

Table of Contents
- [JavaScript HTML DOM Methods](#javascript-html-dom-methods)
  - [Application Programming Interface](#application-programming-interface)
    - [Example 1](#example-1)
  - [Selecting HTML Elements](#selecting-html-elements)
    - [Example 2](#example-2)
  - [Accessing Element Content](#accessing-element-content)
    - [Example 3](#example-3)
  - [Changing Element Attributes](#changing-element-attributes)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Application Programming Interface

The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as **objects**.

The programming interface is the properties and methods of each object.

A **property** is a value that you can get or set (like changing the content of an HTML element).

A **method** is an action you can do (like add or deleting an HTML element).

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>DOM API</h4>
<p id="demo">Original content</p>

<script>
document.getElementById("demo").innerHTML = "Content changed by getElementById!";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-dom_api/index.html)

## Selecting HTML Elements

Common methods for selecting HTML elements:

- `document.getElementById(id)` - Get element by id
- `document.getElementsByTagName(name)` - Get elements by tag name
- `document.getElementsByClassName(name)` - Get elements by class name
- `document.querySelector(selector)` - Get first element matching CSS selector
- `document.querySelectorAll(selector)` - Get all elements matching CSS selector

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Selecting HTML Elements</h4>
<p class="myClass">First paragraph with class="myClass"</p>
<p class="myClass">Second paragraph with class="myClass"</p>
<p id="demo"></p>

<script>
const elements = document.getElementsByClassName("myClass");
document.getElementById("demo").innerHTML =
  "Number of elements with class 'myClass': " + elements.length;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-selecting_elements/index.html)

## Accessing Element Content

The `innerHTML` property is the easiest way to get or change the content of an element.

Other ways to access content include:
- `element.innerHTML` - Get or set HTML content
- `element.textContent` - Get or set text content
- `element.innerText` - Get or set visible text content

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Accessing Element Content</h4>
<p id="intro">Hello <b>World</b>!</p>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const element = document.getElementById("intro");
document.getElementById("demo1").innerHTML = "innerHTML: " + element.innerHTML;
document.getElementById("demo2").innerHTML = "textContent: " + element.textContent;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-accessing_content/index.html)

## Changing Element Attributes

You can change HTML attributes using the DOM:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Changing Element Attributes</h4>
<a id="myLink" href="https://www.w3schools.com">Visit W3Schools</a>
<p id="demo"></p>

<script>
const link = document.getElementById("myLink");
document.getElementById("demo").innerHTML = "Original href: " + link.getAttribute("href");
// Change the href attribute
link.setAttribute("href", "https://www.google.com");
document.getElementById("demo").innerHTML += "<br>New href: " + link.getAttribute("href");
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-changing_attributes/index.html)

## Document

Document in project

You can [Download PDF](js-htmldom_methods.pdf) file.

## Reference

- [W3Schools JavaScript HTML DOM Methods](https://www.w3schools.com/js/js_htmldom_methods.asp)