# JavaScript DOM Nodes

[Back to JS page](../index.html)

Table of Contents
- [JavaScript DOM Nodes](#javascript-dom-nodes)
  - [Creating New HTML Elements](#creating-new-html-elements)
    - [Example 1](#example-1)
  - [insertBefore()](#insertbefore)
    - [Example 2](#example-2)
  - [Removing Existing HTML Elements](#removing-existing-html-elements)
    - [Example 3](#example-3)
  - [Removing a Child Node](#removing-a-child-node)
    - [Example 4](#example-4)
  - [Replacing HTML Elements](#replacing-html-elements)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Creating New HTML Elements

To create new HTML elements, use `document.createElement()` and `appendChild()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Nodes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Creating New HTML Elements</h4>

<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<button onclick="createElement()">Create New Paragraph</button>

<script>
function createElement() {
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  document.getElementById("div1").appendChild(para);
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_elements/index.html)

## insertBefore()

You can insert a new element before an existing element using `insertBefore()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Nodes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>insertBefore()</h4>

<div id="div2">
  <p id="p3">First paragraph</p>
  <p id="p4">Second paragraph</p>
</div>

<button onclick="insertElement()">Insert Before First</button>

<script>
function insertElement() {
  const para = document.createElement("p");
  const node = document.createTextNode("Inserted paragraph.");
  para.appendChild(node);

  const parent = document.getElementById("div2");
  const child = document.getElementById("p3");
  parent.insertBefore(para, child);
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-insert_before/index.html)

## Removing Existing HTML Elements

Use `remove()` to delete an HTML element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Nodes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Removing Existing HTML Elements</h4>

<div id="div3">
  <p id="p5">Paragraph 1</p>
  <p id="p6">Paragraph 2 - will be removed</p>
  <p id="p7">Paragraph 3</p>
</div>

<button onclick="removeElement()">Remove Paragraph 2</button>

<script>
function removeElement() {
  const element = document.getElementById("p6");
  element.remove();
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-remove_element/index.html)

## Removing a Child Node

For older browsers that do not support `remove()`, you can use `removeChild()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Nodes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Removing a Child Node</h4>

<div id="div4">
  <p id="p8">Item A</p>
  <p id="p9">Item B - will be removed via parent</p>
  <p id="p10">Item C</p>
</div>

<button onclick="removeChildElement()">Remove Item B</button>

<script>
function removeChildElement() {
  const parent = document.getElementById("div4");
  const child = document.getElementById("p9");
  parent.removeChild(child);
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-remove_child/index.html)

## Replacing HTML Elements

Use `replaceChild()` to replace an element with another:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Nodes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Replacing HTML Elements</h4>

<div id="div5">
  <p id="p11">Original paragraph</p>
</div>

<button onclick="replaceElement()">Replace Paragraph</button>

<script>
function replaceElement() {
  const para = document.createElement("p");
  const node = document.createTextNode("Replaced paragraph!");
  para.appendChild(node);

  const parent = document.getElementById("div5");
  const child = document.getElementById("p11");
  parent.replaceChild(para, child);
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-replace_element/index.html)

## Document

Document in project

You can [Download PDF](js-dom_nodes.pdf) file.

## Reference

- [W3Schools JavaScript DOM Nodes](https://www.w3schools.com/js/js_htmldom_nodes.asp)