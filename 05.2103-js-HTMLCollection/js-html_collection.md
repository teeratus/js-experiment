# JavaScript HTMLCollection

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript HTMLCollection](#javascript-htmlcollection)
  - [The HTMLCollection Object](#the-htmlcollection-object)
    - [Example 1](#example-1)
  - [HTMLCollection Length](#htmlcollection-length)
    - [Example 2](#example-2)
  - [Looping Through an HTMLCollection](#looping-through-an-htmlcollection)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## The HTMLCollection Object

An `HTMLCollection` is an array-like list of HTML elements.

Methods like `getElementsByTagName()` return an `HTMLCollection`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTMLCollection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The HTMLCollection Object</h4>

<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>

<p id="demo"></p>

<script>
const myCollection = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML =
  "Number of <p> elements: " + myCollection.length + "<br>" +
  "First paragraph text: " + myCollection[0].innerHTML + "<br>" +
  "Second paragraph text: " + myCollection[1].innerHTML;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-htmlcollection/index.html)

## HTMLCollection Length

The `length` property defines the number of elements in the HTMLCollection. You can use it to loop through the collection:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTMLCollection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTMLCollection Length</h4>

<div id="list">
  <p>Apple</p>
  <p>Banana</p>
  <p>Orange</p>
  <p>Grape</p>
  <p>Mango</p>
</div>

<p id="demo"></p>

<script>
const collection = document.getElementById("list").getElementsByTagName("p");
let text = "Items (" + collection.length + "):<br>";
for (let i = 0; i < collection.length; i++) {
  text += (i + 1) + ". " + collection[i].innerHTML + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-length/index.html)

## Looping Through an HTMLCollection

You cannot use `forEach()` on an HTMLCollection directly. You must convert it to an array first, or use a `for` loop:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTMLCollection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Looping Through an HTMLCollection</h4>

<div id="colors">
  <p class="item">Red</p>
  <p class="item">Green</p>
  <p class="item">Blue</p>
  <p class="item">Yellow</p>
</div>

<button onclick="changeColors()">Change Colors</button>
<p id="demo"></p>

<script>
function changeColors() {
  const items = document.getElementById("colors").getElementsByClassName("item");

  // Convert HTMLCollection to Array for using forEach
  const arr = Array.from(items);
  arr.forEach(function(item, index) {
    item.innerHTML += " (" + (index + 1) + ")";
  });

  document.getElementById("demo").innerHTML =
    "Modified " + items.length + " items using Array.from() + forEach()";
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-looping/index.html)

## Document

Document in project

You can [Download PDF](js-html_collection.pdf) file.

## Reference

- [W3Schools JavaScript HTMLCollection](https://www.w3schools.com/js/js_htmldom_collections.asp)