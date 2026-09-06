# JavaScript Sets

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Sets](#javascript-sets)
  - [How to Create a Set](#how-to-create-a-set)
    - [Example 1](#example-1)
  - [The add() Method](#the-add-method)
    - [Example 2](#example-2)
  - [Listing the Elements](#listing-the-elements)
    - [Example 3](#example-3)
  - [Sets are Objects](#sets-are-objects)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## How to Create a Set

A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Sets</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>How to Create a Set</h4>
<p id="demo"></p>

<script>
// Create a Set with an array
const letters = new Set(["a", "b", "c"]);

// Create an empty Set and add values later
const numbers = new Set();

document.getElementById("demo").innerHTML =
  "Set from array: " + [...letters] + "<br>" +
  "Set size: " + letters.size + "<br>" +
  "Empty Set size: " + numbers.size;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_set/index.html)

## The add() Method

Use `add()` to add new elements to a Set. Duplicate values are automatically ignored:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Sets</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The add() Method</h4>
<p id="demo"></p>

<script>
const fruits = new Set();

// Add values with add()
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Duplicate values are ignored
fruits.add("Apple");  // Already exists - ignored!

document.getElementById("demo").innerHTML =
  "Set: " + [...fruits] + "<br>" +
  "Size: " + fruits.size + "<br><br>" +
  "Duplicates are automatically removed";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-add_method/index.html)

## Listing the Elements

You can list all Set elements using `forEach()` or the `values()` method:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Sets</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Listing the Elements</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c"]);

let text = "Using forEach():<br>";
letters.forEach(function(value) {
  text += value + "<br>";
});

// values() returns an iterator of all values
const values = letters.values();
text += "<br>Using values() iterator:<br>";
for (let v of values) {
  text += v + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-list_elements/index.html)

## Sets are Objects

`typeof` a Set is an object. A Set can be created with `new Set()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Sets</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Sets are Objects</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c"]);

let text = "typeof Set: " + typeof letters + "<br>";
text += "Instance of Set: " + (letters instanceof Set) + "<br><br>";

// Other Useful Set properties
text += "<b>Other Set methods:</b><br>";
text += "has('b'): " + letters.has("b") + "<br>";
text += "delete('c'): " + letters.delete("c") + "<br>";
text += "After delete: " + [...letters] + "<br>";
text += "entries: " + [...letters.entries()] + "<br>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-sets_objects/index.html)

## Document

Document in project

You can [Download PDF](js-sets.pdf) file.

## Reference

- [W3Schools JavaScript Sets](https://www.w3schools.com/js/js_sets.asp)