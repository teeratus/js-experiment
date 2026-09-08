# JavaScript Map Methods

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Map Methods](#javascript-map-methods)
  - [Map.get() and Map.set()](#mapget-and-mapset)
    - [Example 1](#example-1)
  - [Map.delete() and Map.clear()](#mapdelete-and-mapclear)
    - [Example 2](#example-2)
  - [Map.has() and Map.size](#maphas-and-mapsize)
    - [Example 3](#example-3)
  - [Map.forEach() and Map.entries()](#mapforeach-and-mapentries)
    - [Example 4](#example-4)
  - [Map.keys() and Map.values()](#mapkeys-and-mapvalues)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Map Methods

Map has the following methods and properties:

| Method/Property | Description |
|----------------|-------------|
| `new Map()` | Create a new Map |
| `set(key, value)` | Set the value for a key |
| `get(key)` | Get the value for a key |
| `delete(key)` | Remove an entry |
| `has(key)` | Check if a key exists |
| `clear()` | Remove all entries |
| `forEach(fn)` | Call function for each entry |
| `keys()` | Iterator of keys |
| `values()` | Iterator of values |
| `entries()` | Iterator of [key, value] pairs |
| `size` | Number of entries |

## Map.get() and Map.set()

`set()` adds or updates a key-value pair. `get()` retrieves the value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map.get() and Map.set()</h4>
<p id="demo"></p>

<script>
const fruits = new Map();

// set() adds new entries
fruits.set("apple", 500);
fruits.set("banana", 300);

// set() can update an existing entry
fruits.set("apple", 600);

document.getElementById("demo").innerHTML =
  "get('apple'): " + fruits.get("apple") + "<br>" +
  "get('banana'): " + fruits.get("banana") + "<br><br>" +
  "set() both adds AND updates entries";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-get_set/index.html)

## Map.delete() and Map.clear()

`delete()` removes one entry. `clear()` removes all entries:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map.delete() and Map.clear()</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300],
  ["orange", 200]
]);

// delete() removes one entry
fruits.delete("banana");

let text = "After delete('banana'): " + [...fruits] + "<br><br>";

// clear() removes all entries
fruits.clear();
text += "After clear(): size = " + fruits.size + " (empty)";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-delete_clear/index.html)

## Map.has() and Map.size

`has()` returns true if a key exists. `size` returns the number of entries:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map.has() and Map.size</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300]
]);

document.getElementById("demo").innerHTML =
  "Map: " + [...fruits] + "<br>" +
  "size: " + fruits.size + "<br><br>" +
  "has('apple'): " + fruits.has("apple") + "<br>" +
  "has('orange'): " + fruits.has("orange") + "<br><br>" +
  "has() checks if a key exists in the Map";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-has_size/index.html)

## Map.forEach() and Map.entries()

`forEach()` calls a function for each entry. `entries()` returns an iterator of [key, value] pairs:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map.forEach() and Map.entries()</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300]
]);

let text = "forEach():<br>";
fruits.forEach(function(value, key) {
  text += key + " = " + value + "<br>";
});

text += "<br>entries():<br>";
for (let entry of fruits.entries()) {
  text += "[" + entry[0] + ", " + entry[1] + "]<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-foreach_entries/index.html)

## Map.keys() and Map.values()

`keys()` returns an iterator of all keys. `values()` returns an iterator of all values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Map Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Map.keys() and Map.values()</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300],
  ["orange", 200]
]);

let text = "keys(): ";
for (let key of fruits.keys()) {
  text += key + " ";
}
text += "<br><br>";

text += "values(): ";
for (let value of fruits.values()) {
  text += value + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-keys_values/index.html)

## Document

Document in project

You can [Download PDF](js-map_methods.pdf) file.

## Reference

- [W3Schools JavaScript Map Methods](https://www.w3schools.com/js/js_map_methods.asp)