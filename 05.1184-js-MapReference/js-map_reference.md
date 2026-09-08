# JavaScript Map Reference

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Map Reference](#javascript-map-reference)
  - [Map Properties](#map-properties)
    - [Example 1](#example-1)
  - [Map Add/Remove Methods](#map-addremove-methods)
    - [Example 2](#example-2)
  - [Map Iteration Methods](#map-iteration-methods)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Map Properties

The complete `Map` object reference:

| Property | Description |
|----------|-------------|
| `size` | Number of entries in the Map |
| `constructor` | The Map constructor function |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map Properties</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300],
  ["orange", 200]
]);

document.getElementById("demo").innerHTML =
  "Map: " + [...fruits] + "<br>" +
  "size: " + fruits.size + "<br>" +
  "constructor: " + fruits.constructor;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-properties/index.html)

## Map Add/Remove Methods

Methods for adding and removing entries:

| Method | Description |
|--------|-------------|
| `set(key, value)` | Add or update an entry |
| `get(key)` | Get the value of a key |
| `delete(key)` | Remove an entry |
| `has(key)` | Check if a key exists |
| `clear()` | Remove all entries |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map Add/Remove Methods</h4>
<p id="demo"></p>

<script>
const fruits = new Map();

// set() adds entries
fruits.set("apple", 500);
fruits.set("banana", 300);

// get() retrieves values
let text = "get('apple'): " + fruits.get("apple") + "<br>";
text += "has('banana'): " + fruits.has("banana") + "<br><br>";

// delete() removes one entry
fruits.delete("banana");
text += "After delete('banana'): " + [...fruits] + "<br><br>";

// clear() removes all
fruits.clear();
text += "After clear(): size = " + fruits.size;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-add_remove/index.html)

## Map Iteration Methods

Methods for iterating over Map entries:

| Method | Description |
|--------|-------------|
| `forEach(fn)` | Call function for each entry |
| `keys()` | Iterator of all keys |
| `values()` | Iterator of all values |
| `entries()` | Iterator of [key, value] pairs |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map Iteration Methods</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300]
]);

let text = "<b>forEach():</b><br>";
fruits.forEach((value, key) => text += key + " = " + value + "<br>");
text += "<br>";

text += "<b>keys():</b> ";
for (let k of fruits.keys()) text += k + " ";
text += "<br><br>";

text += "<b>values():</b> ";
for (let v of fruits.values()) text += v + " ";
text += "<br><br>";

text += "<b>entries():</b> ";
for (let e of fruits.entries()) text += "[" + e[0] + "," + e[1] + "] ";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-iteration_methods/index.html)

## Document

Document in project

You can [Download PDF](js-map_reference.pdf) file.

## Reference

- [W3Schools JavaScript Map Reference](https://www.w3schools.com/js/js_map_reference.asp)