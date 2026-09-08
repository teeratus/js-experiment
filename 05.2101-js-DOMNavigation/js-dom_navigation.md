# JavaScript DOM Navigation

[Back to JS page](../index.html)

Table of Contents
- [JavaScript DOM Navigation](#javascript-dom-navigation)
  - [DOM Nodes](#dom-nodes)
  - [Child Nodes and Node Values](#child-nodes-and-node-values)
    - [Example 1](#example-1)
  - [DOM Root Nodes](#dom-root-nodes)
    - [Example 2](#example-2)
  - [The nodeName Property](#the-nodename-property)
    - [Example 3](#example-3)
  - [The nodeType Property](#the-nodetype-property)
    - [Example 4](#example-4)
  - [Navigating Between Nodes](#navigating-between-nodes)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## DOM Nodes

According to the W3C HTML DOM standard, everything in an HTML document is a node:

- The entire document is a **document node**
- Every HTML element is an **element node**
- The text inside HTML elements are **text nodes**
- Every HTML attribute is an **attribute node**
- Comments are **comment nodes**

## Child Nodes and Node Values

You can access node values using `nodeValue` and `childNodes[0].nodeValue`. The `innerHTML` property returns the text content of an element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Navigation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Child Nodes and Node Values</h4>

<p id="demo1">Hello World!</p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
const element = document.getElementById("demo1");

// Access node value via childNodes
document.getElementById("demo2").innerHTML =
  "Text via childNodes[0].nodeValue: " + element.childNodes[0].nodeValue;

// Access node value via innerHTML
document.getElementById("demo3").innerHTML =
  "Text via innerHTML: " + element.innerHTML;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-node_values/index.html)

## DOM Root Nodes

There are two root nodes in the DOM tree:

- `document.documentElement` - the full `<html>` element
- `document.body` - the `<body>` element

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Navigation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>DOM Root Nodes</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
document.getElementById("demo1").innerHTML =
  "document.documentElement: " + document.documentElement.tagName;

document.getElementById("demo2").innerHTML =
  "document.body: " + document.body.tagName;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-root_nodes/index.html)

## The nodeName Property

The `nodeName` property returns the name of a node:

- For element nodes: the tag name (in uppercase)
- For text nodes: `#text`
- For attribute nodes: the attribute name
- For document nodes: `#document`

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Navigation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The nodeName Property</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
document.getElementById("demo1").innerHTML =
  "document.nodeName: " + document.nodeName;

document.getElementById("demo2").innerHTML =
  "document.body.nodeName: " + document.body.nodeName;

const element = document.getElementById("demo1");
document.getElementById("demo3").innerHTML =
  "First child nodeName: " + element.childNodes[0].nodeName;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-nodename/index.html)

## The nodeType Property

The `nodeType` property returns an integer that specifies the type of the node:

| Value | Type |
|-------|------|
| 1 | Element |
| 2 | Attribute |
| 3 | Text |
| 8 | Comment |
| 9 | Document |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Navigation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The nodeType Property</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>

<script>
document.getElementById("demo1").innerHTML =
  "document.nodeType: " + document.nodeType + " (Document)";

document.getElementById("demo2").innerHTML =
  "document.body.nodeType: " + document.body.nodeType + " (Element)";

const element = document.getElementById("demo1");
document.getElementById("demo3").innerHTML =
  "First child nodeType: " + element.childNodes[0].nodeType + " (Text)";

const comments = [];
for (let node of document.body.childNodes) {
  if (node.nodeType === 8) {
    comments.push(node);
  }
}
document.getElementById("demo4").innerHTML =
  "Number of comment nodes: " + comments.length + " (Comment)";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-nodetype/index.html)

## Navigating Between Nodes

You can navigate the DOM tree using these properties:

- `parentNode` - the parent node
- `childNodes[nodenumber]` - child nodes (including text nodes)
- `firstChild` - the first child node
- `lastChild` - the last child node
- `nextSibling` - the next sibling node
- `previousSibling` - the previous sibling node

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript DOM Navigation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Navigating Between Nodes</h4>

<div id="container">
  <p id="first">First paragraph</p>
  <p id="second">Second paragraph</p>
  <p id="third">Third paragraph</p>
</div>

<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<p id="demo5"></p>

<script>
const second = document.getElementById("second");

document.getElementById("demo1").innerHTML =
  "parentNode: " + second.parentNode.id;

document.getElementById("demo2").innerHTML =
  "previousSibling (element): " + second.previousElementSibling.textContent;

document.getElementById("demo3").innerHTML =
  "nextSibling (element): " + second.nextElementSibling.textContent;

const parent = document.getElementById("container");
document.getElementById("demo4").innerHTML =
  "firstElementChild: " + parent.firstElementChild.textContent;

document.getElementById("demo5").innerHTML =
  "lastElementChild: " + parent.lastElementChild.textContent;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-navigation/index.html)

## Document

Document in project

You can [Download PDF](js-dom_navigation.pdf) file.

## Reference

- [W3Schools JavaScript DOM Navigation](https://www.w3schools.com/js/js_htmldom_navigation.asp)