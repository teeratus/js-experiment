# JavaScript HTML DOM Elements

[Back to JS page](../index.html)

Table of Contents
- [JavaScript HTML DOM Elements](#javascript-html-dom-elements)
  - [Finding HTML Element by Id](#finding-html-element-by-id)
    - [Example 1](#example-1)
  - [Finding HTML Elements by Tag Name](#finding-html-elements-by-tag-name)
    - [Example 2](#example-2)
  - [Finding HTML Elements by Class Name](#finding-html-elements-by-class-name)
    - [Example 3](#example-3)
  - [The querySelector() Method](#the-queryselector-method)
    - [Example 4](#example-4)
  - [The querySelectorAll() Method](#the-queryselectorall-method)
    - [Example 5](#example-5)
  - [Finding HTML Elements by HTML Object Collections](#finding-html-elements-by-html-object-collections)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Finding HTML Element by Id

The easiest way to find an HTML element in the DOM is by using the element id.

The `document.getElementById(id)` method is one of the most common methods in the HTML DOM:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Elements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Find Element by Id</h4>
<p id="intro">Hello World!</p>
<p id="demo"></p>

<script>
const element = document.getElementById("intro");
document.getElementById("demo").innerHTML =
  "Text: " + element.innerHTML;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-find_by_id/index.html)

## Finding HTML Elements by Tag Name

The `document.getElementsByTagName(name)` method returns all elements with a specified tag name as an HTMLCollection:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Elements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Find Elements by Tag Name</h4>
<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>
<p id="demo"></p>

<script>
const elements = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
  "Number of <p> elements: " + elements.length;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-find_by_tag/index.html)

## Finding HTML Elements by Class Name

The `document.getElementsByClassName(name)` method returns all elements with a specified class name as an HTMLCollection:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Elements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Find Elements by Class Name</h4>
<p class="intro">First paragraph with class 'intro'</p>
<p>Second paragraph (no class)</p>
<p class="intro">Third paragraph with class 'intro'</p>
<p id="demo"></p>

<script>
const elements = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML =
  "Elements with class 'intro': " + elements.length +
  "<br>First: " + elements[0].innerHTML;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-find_by_class/index.html)

## The querySelector() Method

The `document.querySelector(selector)` method returns the **first** HTML element that matches a CSS selector:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Elements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The querySelector() Method</h4>
<p class="example">First paragraph with class 'example'</p>
<p class="example">Second paragraph with class 'example'</p>
<p id="demo"></p>

<script>
const element = document.querySelector(".example");
document.getElementById("demo").innerHTML =
  "First element with class 'example': " + element.innerHTML;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-query_selector/index.html)

## The querySelectorAll() Method

The `document.querySelectorAll(selector)` method returns **all** HTML elements that match a CSS selector as a NodeList:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Elements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The querySelectorAll() Method</h4>
<p class="example">First paragraph with class 'example'</p>
<p class="example">Second paragraph with class 'example'</p>
<p id="demo"></p>

<script>
const elements = document.querySelectorAll(".example");
document.getElementById("demo").innerHTML =
  "Number of elements: " + elements.length +
  "<br>First: " + elements[0].innerHTML +
  "<br>Second: " + elements[1].innerHTML;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-query_selector_all/index.html)

## Finding HTML Elements by HTML Object Collections

HTML object collections are built-in collections like `document.forms`, `document.images`, `document.links`, etc:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM Elements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTML Object Collections</h4>
<form id="frm1">
  First name: <input type="text" name="fname" value="John"><br>
  Last name: <input type="text" name="lname" value="Doe">
</form>
<p id="demo"></p>

<script>
const forms = document.forms;
const form = forms[0];
let text = "";
for (let i = 0; i < form.length; i++) {
  text += form.elements[i].name + ": " + form.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = "Form fields:<br>" + text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-object_collections/index.html)

## Document

Document in project

You can [Download PDF](js-htmldom_elements.pdf) file.

## Reference

- [W3Schools JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)