# JavaScript HTML DOM

[Back to JS page](../index.html)

Table of Contents
- [JavaScript HTML DOM](#javascript-html-dom)
  - [HTML Document Object Model](#html-document-object-model)
    - [Example 1](#example-1)
  - [The DOM Tree](#the-dom-tree)
  - [Accessing HTML Elements](#accessing-html-elements)
    - [Example 2](#example-2)
  - [Document](#document)
  - [Reference](#reference)


## HTML Document Object Model

The **HTML DOM** is a standard object model and programming interface for HTML. It defines:

- The HTML elements as **objects**
- The **properties** of all HTML elements
- The **methods** to access all HTML elements
- The **events** for all HTML elements

In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTML DOM</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-htmldom_intro/index.html)

## The DOM Tree

The HTML DOM model is constructed as a tree of objects:

- **Document:** The root of the tree
- **HTML element:** `<html>`
- **Head element:** `<head>`
- **Body element:** `<body>`
- **Text nodes:** Content within elements

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

## Accessing HTML Elements

JavaScript can access HTML elements using different methods:

- `document.getElementById(id)` - Find an element by id
- `document.getElementsByTagName(name)` - Find elements by tag name
- `document.getElementsByClassName(name)` - Find elements by class name

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Accessing HTML Elements</h4>
<p id="intro">Finding HTML Elements by Id</p>
<p id="demo"></p>

<script>
const element = document.getElementById("intro");
document.getElementById("demo").innerHTML =
  "Text from intro paragraph: " + element.innerHTML;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-accessing_elements/index.html)

## Document

Document in project

You can [Download PDF](js-htmldom.pdf) file.

## Reference

- [W3Schools JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)