# JavaScript Maps

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Maps](#javascript-maps)
  - [How to Create a Map](#how-to-create-a-map)
    - [Example 1](#example-1)
  - [Adding and Changing Map Values](#adding-and-changing-map-values)
    - [Example 2](#example-2)
  - [The get() Method](#the-get-method)
    - [Example 3](#example-3)
  - [Maps are Objects](#maps-are-objects)
    - [Example 4](#example-4)
  - [JavaScript Objects vs Maps](#javascript-objects-vs-maps)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## How to Create a Map

A Map holds key-value pairs where the keys can be any datatype. To create a Map, use `new Map()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Maps</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>How to Create a Map</h4>
<p id="demo"></p>

<script>
// Create a Map with key-value pairs
const fruits = new Map([
  ["apple", 500],
  ["banana", 300],
  ["orange", 200]
]);

// Create an empty Map
const emptyMap = new Map();

document.getElementById("demo").innerHTML =
  "Map from array: " + [...fruits] + "<br>" +
  "Map size: " + fruits.size + "<br><br>" +
  "Keys can be any datatype:<br>" +
  "fruits.get('apple'): " + fruits.get("apple");
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_map/index.html)

## Adding and Changing Map Values

Use `set()` to add or change Map values. The `get()` method gets the value of a key:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Maps</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding and Changing Map Values</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500]
]);

// Add new entries with set()
fruits.set("banana", 300);
fruits.set("orange", 200);

// Change an existing value
fruits.set("apple", 600);

// set() can be chained
fruits.set("mango", 150).set("grape", 100);

document.getElementById("demo").innerHTML =
  "apple: " + fruits.get("apple") + " (changed to 600)<br>" +
  "banana: " + fruits.get("banana") + "<br>" +
  "orange: " + fruits.get("orange") + "<br>" +
  "mango: " + fruits.get("mango") + "<br>" +
  "grape: " + fruits.get("grape") + "<br><br>" +
  "Map size: " + fruits.size;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-add_change/index.html)

## The get() Method

`get()` returns the value of a specified key. It returns `undefined` if the key doesn't exist:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Maps</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The get() Method</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300]
]);

document.getElementById("demo").innerHTML =
  "get('apple'): " + fruits.get("apple") + "<br>" +
  "get('banana'): " + fruits.get("banana") + "<br>" +
  "get('orange'): " + fruits.get("orange") + " (undefined - not in Map)<br><br>" +
  "has('apple'): " + fruits.has("apple") + "<br>" +
  "size: " + fruits.size;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-get_method/index.html)

## Maps are Objects

`typeof` a Map is an object. A Map can use objects as keys:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Maps</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Maps are Objects</h4>
<p id="demo"></p>

<script>
// Using objects as keys
const person1 = { name: "John" };
const person2 = { name: "Jane" };

const persons = new Map();
persons.set(person1, "Engineer");
persons.set(person2, "Doctor");

let text = "typeof Map: " + typeof persons + "<br>";
text += "Instance of Map: " + (persons instanceof Map) + "<br><br>";

text += "person1's job: " + persons.get(person1) + "<br>";
text += "person2's job: " + persons.get(person2) + "<br><br>";

text += "<b>Other Map methods:</b><br>";
text += "delete(key): removes entry<br>";
text += "clear(): removes all entries<br>";
text += "keys(): iterator of keys<br>";
text += "values(): iterator of values<br>";
text += "entries(): iterator of [key, value] pairs";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-maps_objects/index.html)

## JavaScript Objects vs Maps

| Feature | Object | Map |
|---------|--------|-----|
| Iterable | Not directly | Yes |
| Size property | No | Yes (`size`) |
| Key types | Strings only | Any type |
| Key order | Not guaranteed | Insertion order |
| Default values | Has default keys | No default keys |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Maps</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Objects vs Maps</h4>
<p id="demo"></p>

<script>
// Object
const obj = { name: "John", age: 30 };

// Map
const map = new Map([
  ["name", "John"],
  ["age", 30]
]);

let text = "<b>Object:</b><br>";
text += "size: " + Object.keys(obj).length + " (via keys())<br>";
text += "Keys: strings only<br>";
text += "Iterable: no<br><br>";

text += "<b>Map:</b><br>";
text += "size: " + map.size + "<br>";
text += "Keys: any type<br>";
text += "Iterable: yes<br><br>";

text += "<b>When to use Map?</b><br>";
text += "1. Need keys other than strings<br>";
text += "2. Need size property<br>";
text += "3. Need iteration<br>";
text += "4. Need insertion order";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-objects_vs_maps/index.html)

## Document

Document in project

You can [Download PDF](js-maps.pdf) file.

## Reference

- [W3Schools JavaScript Maps](https://www.w3schools.com/js/js_maps.asp)