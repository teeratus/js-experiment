# JavaScript Object Iterations

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Object Iterations](#javascript-object-iterations)
  - [JavaScript Object.entries()](#javascript-objectentries)
    - [Example 1](#example-1)
  - [JavaScript Object.values()](#javascript-objectvalues)
    - [Example 2](#example-2)
  - [JavaScript Object.keys()](#javascript-objectkeys)
    - [Example 3](#example-3)
  - [JavaScript for...in Loop](#javascript-forin-loop)
    - [Example 4](#example-4)
  - [JavaScript Object.groupBy()](#javascript-objectgroupby)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Object.entries()

`Object.entries()` returns an array of the key/value pairs of an object (as arrays):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Iterations</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.entries()</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const entries = Object.entries(person);
let text = "";
for (let entry of entries) {
  text += entry[0] + ": " + entry[1] + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-object_entries/index.html)

## JavaScript Object.values()

`Object.values()` returns an array of the property values of an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Iterations</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.values()</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const values = Object.values(person);
document.getElementById("demo").innerHTML = "Values: " + values;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-object_values/index.html)

## JavaScript Object.keys()

`Object.keys()` returns an array of the property keys (names) of an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Iterations</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.keys()</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

const keys = Object.keys(person);
let text = "";
for (let key of keys) {
  text += key + "<br>";
}
document.getElementById("demo").innerHTML = "Keys:<br>" + text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-object_keys/index.html)

## JavaScript for...in Loop

The `for...in` loop iterates over the properties of an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Iterations</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>for...in Loop</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

let text = "";
for (let key in person) {
  text += key + ": " + person[key] + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-for_in_loop/index.html)

## JavaScript Object.groupBy()

`Object.groupBy()` groups elements of an array by a string value returned from a callback function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Iterations</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.groupBy()</h4>
<p id="demo"></p>

<script>
const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
  { name: "strawberry", color: "red" }
];

// Group fruits by color
const result = Object.groupBy(fruits, item => item.color);

let text = "";
for (let color in result) {
  text += color + ": " + result[color].map(f => f.name).join(", ") + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-object_groupby/index.html)

## Document

Document in project

You can [Download PDF](js-object_iterations.pdf) file.

## Reference

- [W3Schools JavaScript Object Iterations](https://www.w3schools.com/js/js_object_iterations.asp)