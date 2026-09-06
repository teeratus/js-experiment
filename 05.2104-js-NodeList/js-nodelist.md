# JavaScript NodeList

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript NodeList](#javascript-nodelist)
  - [The HTML DOM NodeList Object](#the-html-dom-nodelist-object)
    - [Example 1](#example-1)
  - [HTML DOM Node List Length](#html-dom-node-list-length)
    - [Example 2](#example-2)
  - [The Difference Between HTMLCollection and NodeList](#the-difference-between-htmlcollection-and-nodelist)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## The HTML DOM NodeList Object

A `NodeList` is a list of nodes extracted from a document.

The `querySelectorAll()` method returns a `NodeList`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NodeList</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The HTML DOM NodeList Object</h4>

<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>

<p id="demo"></p>

<script>
const myNodeList = document.querySelectorAll("p");

document.getElementById("demo").innerHTML =
  "Number of <p> elements: " + myNodeList.length + "<br>" +
  "First paragraph text: " + myNodeList[0].innerHTML + "<br>" +
  "Second paragraph text: " + myNodeList[1].innerHTML;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-nodelist/index.html)

## HTML DOM Node List Length

The `length` property defines the number of elements in the NodeList. You can use it to loop through the list:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NodeList</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTML DOM Node List Length</h4>

<div id="list">
  <p>Apple</p>
  <p>Banana</p>
  <p>Orange</p>
</div>

<p id="demo"></p>

<script>
const nodeList = document.querySelectorAll("#list p");
let text = "Items (" + nodeList.length + "):<br>";
for (let i = 0; i < nodeList.length; i++) {
  text += (i + 1) + ". " + nodeList[i].innerHTML + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-length/index.html)

## The Difference Between HTMLCollection and NodeList

An `HTMLCollection` is live (updates when DOM changes). A `NodeList` from `querySelectorAll()` is static (does not update):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NodeList</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTMLCollection vs NodeList</h4>

<div id="container">
  <p class="test">Item 1</p>
  <p class="test">Item 2</p>
</div>

<button onclick="addItem()">Add Item</button>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
function addItem() {
  const para = document.createElement("p");
  para.className = "test";
  para.innerHTML = "Item " + (document.querySelectorAll(".test").length + 1);
  document.getElementById("container").appendChild(para);

  // HTMLCollection is LIVE - automatically updated
  const liveCollection = document.getElementsByClassName("test");
  document.getElementById("demo1").innerHTML =
    "HTMLCollection (live) count: " + liveCollection.length;

  // NodeList is STATIC - shows original count
  const staticList = document.querySelectorAll(".test");
  document.getElementById("demo2").innerHTML =
    "NodeList (static) count: " + staticList.length;
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-collection_vs_nodelist/index.html)

## Document

Document in project

You can [Download PDF](js-nodelist.pdf) file.

## Reference

- [W3Schools JavaScript NodeList](https://www.w3schools.com/js/js_htmldom_nodelist.asp)