# JavaScript Set Reference

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Set Reference](#javascript-set-reference)
  - [Set Properties](#set-properties)
    - [Example 1](#example-1)
  - [Set Add/Delete Methods](#set-adddelete-methods)
    - [Example 2](#example-2)
  - [Set Iteration Methods](#set-iteration-methods)
    - [Example 3](#example-3)
  - [Set Logic Methods](#set-logic-methods)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Set Properties

The complete `Set` object reference:

| Property | Description |
|----------|-------------|
| `size` | Number of elements in the Set |
| `constructor` | The Set constructor function |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Set Properties</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c", "d"]);

document.getElementById("demo").innerHTML =
  "Set: " + [...letters] + "<br>" +
  "size: " + letters.size + "<br>" +
  "constructor: " + letters.constructor;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-properties/index.html)

## Set Add/Delete Methods

Methods for adding and removing elements:

| Method | Description |
|--------|-------------|
| `add(value)` | Add a new element |
| `delete(value)` | Remove an element |
| `has(value)` | Check if element exists |
| `clear()` | Remove all elements |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Set Add/Delete Methods</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b"]);

let text = "Start: " + [...letters] + "<br><br>";

letters.add("c");
text += "add('c'): " + [...letters] + "<br>";
text += "has('c'): " + letters.has("c") + "<br><br>";

letters.delete("a");
text += "delete('a'): " + [...letters] + "<br><br>";

letters.clear();
text += "clear(): " + [...letters] + " (empty)<br>";
text += "size: " + letters.size;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-add_delete/index.html)

## Set Iteration Methods

Methods for iterating over Set elements:

| Method | Description |
|--------|-------------|
| `forEach(fn)` | Call function for each element |
| `values()` | Iterator of all values |
| `keys()` | Same as values() for Set |
| `entries()` | Iterator of [value, value] pairs |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Set Iteration Methods</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c"]);

let text = "<b>forEach():</b> ";
letters.forEach(v => text += v + " ");
text += "<br>";

text += "<b>values():</b> ";
for (let v of letters.values()) text += v + " ";
text += "<br>";

text += "<b>keys():</b> ";
for (let k of letters.keys()) text += k + " ";
text += "<br>";

text += "<b>entries():</b> ";
for (let e of letters.entries()) text += "[" + e[0] + "," + e[1] + "] ";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-iteration_methods/index.html)

## Set Logic Methods

Set logic methods (newer Set methods):

| Method | Description |
|--------|-------------|
| `union(set)` | All elements from both Sets |
| `intersection(set)` | Elements in both Sets |
| `difference(set)` | Elements in this but not other |
| `symmetricDifference(set)` | Elements in either, not both |
| `isSubsetOf(set)` | Every element in this also in other |
| `isSupersetOf(set)` | Every element in other also in this |
| `isDisjointFrom(set)` | No common elements |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Set Logic Methods</h4>
<p id="demo"></p>

<script>
const setA = new Set(["a", "b", "c"]);
const setB = new Set(["c", "d"]);

let text = "Set A: " + [...setA] + "<br>";
text += "Set B: " + [...setB] + "<br><br>";

if (setA.union) {
  text += "A.union(B): " + [...setA.union(setB)] + "<br>";
  text += "A.intersection(B): " + [...setA.intersection(setB)] + "<br>";
  text += "A.difference(B): " + [...setA.difference(setB)] + "<br>";
  text += "A.symmetricDifference(B): " + [...setA.symmetricDifference(setB)] + "<br>";
  text += "A.isSubsetOf(B): " + setA.isSubsetOf(setB) + "<br>";
  text += "A.isDisjointFrom(new Set(['x'])): " + setA.isDisjointFrom(new Set(["x"]));
} else {
  text += "Logic methods are not supported in this browser yet.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-logic_methods/index.html)

## Document

Document in project

You can [Download PDF](js-set_reference.pdf) file.

## Reference

- [W3Schools JavaScript Set Reference](https://www.w3schools.com/js/js_set_reference.asp)