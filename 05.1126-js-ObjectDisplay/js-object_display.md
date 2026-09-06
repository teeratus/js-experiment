# JavaScript Object Display

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Object Display](#javascript-object-display)
  - [Displaying Object Properties](#displaying-object-properties)
    - [Example 1](#example-1)
  - [Using a For .. In Loop](#using-a-for--in-loop)
    - [Example 2](#example-2)
  - [Using Object.values()](#using-objectvalues)
    - [Example 3](#example-3)
  - [Using Object.entries()](#using-objectentries)
    - [Example 4](#example-4)
  - [Using JSON.stringify()](#using-jsonstringify)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Displaying Object Properties

Displaying a JavaScript object directly will output `[object Object]`. You must access properties individually:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Display</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Displaying Object Properties</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Direct display shows [object Object]
document.getElementById("demo1").innerHTML =
  "Direct display: " + person;

// Display individual properties
document.getElementById("demo2").innerHTML =
  "Properties: " + person.name + ", " + person.age + ", " + person.city;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-display_properties/index.html)

## Using a For .. In Loop

The `for...in` loop iterates over all properties of an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Display</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using a For .. In Loop</h4>
<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA"
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

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-for_in_loop/index.html)

## Using Object.values()

`Object.values()` returns an array of the property values of an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Display</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Object.values()</h4>
<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Get all values as an array
const values = Object.values(person);
document.getElementById("demo").innerHTML =
  "Object.values(): " + values;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-object_values/index.html)

## Using Object.entries()

`Object.entries()` returns an array of the key/value pairs as arrays:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Display</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Object.entries()</h4>
<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Get entries as [key, value] arrays
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

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-object_entries/index.html)

## Using JSON.stringify()

`JSON.stringify()` converts a JavaScript object into a JSON string for display:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Display</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using JSON.stringify()</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "music", "swimming"]
};

// Simple stringify
document.getElementById("demo1").innerHTML =
  "JSON stringify: " + JSON.stringify(person);

// Pretty print with indentation (2 spaces)
document.getElementById("demo2").innerHTML =
  "Pretty print:<br>" + JSON.stringify(person, null, 2);
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-json_stringify/index.html)

## Document

Document in project

You can [Download PDF](js-object_display.pdf) file.

## Reference

- [W3Schools JavaScript Object Display](https://www.w3schools.com/js/js_object_display.asp)