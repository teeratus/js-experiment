# JavaScript JSON

[Back to JS page](../index.html)

Table of Contents
- [JavaScript JSON](#javascript-json)
  - [What Is JSON?](#what-is-json)
    - [Example 1](#example-1)
  - [Converting JSON to JavaScript](#converting-json-to-javascript)
    - [Example 2](#example-2)
  - [Converting JavaScript to JSON](#converting-javascript-to-json)
    - [Example 3](#example-3)
  - [JSON Round Trip](#json-round-trip)
    - [Example 4](#example-4)
  - [Storing Data](#storing-data)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## What Is JSON?

JSON stands for **J**ava**S**cript **O**bject **N**otation.

JSON is a lightweight data interchange format.

JSON is language independent.

JSON is "self-describing" and easy to understand.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What Is JSON?</h4>
<p id="demo"></p>

<script>
// A JSON string
const jsonString = '{"name":"John","age":30,"city":"New York"}';

// JSON syntax is similar to JavaScript object syntax
const obj = {name:"John", age:30, city:"New York"};

document.getElementById("demo").innerHTML = "JSON string: " + jsonString;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-what_is_json/index.html)

## Converting JSON to JavaScript

When receiving data from a web server, the data is always a string.

Parse the data with `JSON.parse()`, and the data becomes a JavaScript object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting JSON to JavaScript</h4>
<p id="demo"></p>

<script>
// JSON text received from a server
const jsonText = '{"name":"John","age":30,"city":"New York"}';

// Convert JSON string to JavaScript object
const obj = JSON.parse(jsonText);

document.getElementById("demo").innerHTML =
  "Name: " + obj.name + "<br>" +
  "Age: " + obj.age + "<br>" +
  "City: " + obj.city;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-json_to_js/index.html)

## Converting JavaScript to JSON

When sending data to a web server, the data has to be a string.

Convert a JavaScript object into a string with `JSON.stringify()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting JavaScript to JSON</h4>
<p id="demo"></p>

<script>
// JavaScript object
const obj = {name: "John", age: 30, city: "New York"};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(obj);

document.getElementById("demo").innerHTML = jsonString;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-js_to_json/index.html)

## JSON Round Trip

A common use of JSON is to exchange data to/from a web server.

When receiving data from a web server, the data is always a string. You can use `JSON.parse()` to convert it to a JavaScript object.

When sending data to a web server, the data has to be a string. You can use `JSON.stringify()` to convert it to JSON.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Round Trip</h4>
<p id="demo"></p>

<script>
// Start with a JavaScript object
const obj1 = {name: "John", age: 30, city: "New York"};

// Convert to JSON string (sending to server)
const jsonString = JSON.stringify(obj1);

// Convert back to JavaScript object (receiving from server)
const obj2 = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "Original: " + obj1.name + "<br>" +
  "JSON: " + jsonString + "<br>" +
  "Back to object: " + obj2.name;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-round_trip/index.html)

## Storing Data

JSON can be used to store data in localStorage:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Storing Data</h4>
<p id="demo"></p>

<script>
// Create an object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Store as JSON in localStorage
localStorage.setItem("person", JSON.stringify(person));

// Retrieve and parse from localStorage
const storedPerson = JSON.parse(localStorage.getItem("person"));

document.getElementById("demo").innerHTML =
  "Stored name: " + storedPerson.name + "<br>" +
  "Stored age: " + storedPerson.age + "<br>" +
  "Stored city: " + storedPerson.city;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-storing_data/index.html)

## Document

Document in project

You can [Download PDF](js-json.pdf) file.

## Reference

- [W3Schools JavaScript JSON](https://www.w3schools.com/js/js_json.asp)