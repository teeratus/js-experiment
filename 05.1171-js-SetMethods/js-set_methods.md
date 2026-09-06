# JavaScript Set Methods

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Set Methods](#javascript-set-methods)
  - [The add() Method](#the-add-method)
    - [Example 1](#example-1)
  - [The has() Method](#the-has-method)
    - [Example 2](#example-2)
  - [The values() and keys() Methods](#the-values-and-keys-methods)
    - [Example 3](#example-3)
  - [The entries() Method](#the-entries-method)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Set Methods & Properties

Set has the following methods and properties:

| Method/Property | Description |
|----------------|-------------|
| `new Set()` | Create a new Set |
| `add(value)` | Add a new element |
| `delete(value)` | Delete an element |
| `has(value)` | Check if element exists |
| `clear()` | Remove all elements |
| `forEach(fn)` | Call function for each element |
| `values()` | Returns iterator of values |
| `keys()` | Same as values() for Set |
| `entries()` | Returns [value, value] pairs |
| `size` | Number of elements |

## The add() Method

`add()` adds a new element to the Set. Chain multiple `add()` calls for cleaner code:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The add() Method</h4>
<p id="demo"></p>

<script>
const letters = new Set();

// Chained add() calls
letters.add("a").add("b").add("c").add("d");

document.getElementById("demo").innerHTML =
  "Set: " + [...letters] + "<br>" +
  "size: " + letters.size;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-add_method/index.html)

## The has() Method

`has()` returns true if the Set contains a specific value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The has() Method</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c"]);

let text = "Set: " + [...letters] + "<br><br>";
text += "has('a'): " + letters.has("a") + "<br>";
text += "has('x'): " + letters.has("x") + "<br><br>";

// delete() removes an element
letters.delete("b");
text += "After delete('b'): " + [...letters] + "<br>";
text += "has('b') after delete: " + letters.has("b");

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-has_method/index.html)

## The values() and keys() Methods

For a Set, `values()` and `keys()` are the same - both return an iterator of all values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The values() and keys() Methods</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c"]);

// values() returns iterator
let text = "values(): ";
for (let v of letters.values()) {
  text += v + " ";
}
text += "<br>";

// keys() returns same as values() for Set
text += "keys(): ";
for (let k of letters.keys()) {
  text += k + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-values_keys/index.html)

## The entries() Method

`entries()` returns an iterator with [value, value] pairs:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The entries() Method</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c"]);

let text = "entries():<br>";
for (let entry of letters.entries()) {
  text += "[" + entry[0] + ", " + entry[1] + "]<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-entries_method/index.html)

## Document

Document in project

You can [Download PDF](js-set_methods.pdf) file.

## Reference

- [W3Schools JavaScript Set Methods](https://www.w3schools.com/js/js_set_methods.asp)