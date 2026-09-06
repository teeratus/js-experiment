# JavaScript JSON stringify()

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript JSON stringify()](#javascript-json-stringify)
  - [Converting an Object](#converting-an-object)
    - [Example 1](#example-1)
  - [Converting an Array](#converting-an-array)
    - [Example 2](#example-2)
  - [Selecting Properties](#selecting-properties)
    - [Example 3](#example-3)
  - [Formatting JSON](#formatting-json)
    - [Example 4](#example-4)
  - [Stringifying Dates](#stringifying-dates)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The JSON.stringify() Method

When sending data to a web server, the data has to be a string.

Convert a JavaScript object into a string with `JSON.stringify()`.

## Converting an Object

`JSON.stringify()` converts a JavaScript object into a JSON string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON stringify()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting an Object</h4>
<p id="demo"></p>

<script>
const obj = {name: "John", age: 30, city: "New York"};
const jsonString = JSON.stringify(obj);

document.getElementById("demo").innerHTML = jsonString;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-convert_object/index.html)

## Converting an Array

`JSON.stringify()` can also convert a JavaScript array into a JSON string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON stringify()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting an Array</h4>
<p id="demo"></p>

<script>
const arr = ["Ford", "BMW", "Audi", "Fiat"];
const jsonString = JSON.stringify(arr);

document.getElementById("demo").innerHTML = jsonString;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-convert_array/index.html)

## Selecting Properties

The `JSON.stringify()` method can accept a **replacer** array to select which properties to include:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON stringify()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Selecting Properties</h4>
<p id="demo"></p>

<script>
const obj = {name: "John", age: 30, city: "New York", country: "USA"};
const jsonString = JSON.stringify(obj, ["name", "city"]);

document.getElementById("demo").innerHTML = jsonString;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-select_properties/index.html)

## Formatting JSON

The `JSON.stringify()` method can accept a **space** parameter to format the output with spaces:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON stringify()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Formatting JSON</h4>
<pre id="demo"></pre>

<script>
const obj = {name: "John", age: 30, city: "New York", hobbies: ["reading", "music"]};
const jsonString = JSON.stringify(obj, null, 2);

document.getElementById("demo").innerHTML = jsonString;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-formatting_json/index.html)

## Stringifying Dates

Dates are converted to strings when using `JSON.stringify()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON stringify()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Stringifying Dates</h4>
<p id="demo"></p>

<script>
const obj = {name: "John", today: new Date(), city: "New York"};
const jsonString = JSON.stringify(obj);

document.getElementById("demo").innerHTML = jsonString;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-stringify_dates/index.html)

## Document

Document in project

You can [Download PDF](js-json_stringify.pdf) file.

## Reference

- [W3Schools JavaScript JSON stringify()](https://www.w3schools.com/js/js_json_stringify.asp)