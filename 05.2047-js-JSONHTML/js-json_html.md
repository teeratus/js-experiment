# JavaScript JSON HTML

[Back to JS page](../index.html)

Table of Contents
- [JavaScript JSON HTML](#javascript-json-html)
  - [Displaying a Property](#displaying-a-property)
    - [Example 1](#example-1)
  - [Displaying Multiple Properties](#displaying-multiple-properties)
    - [Example 2](#example-2)
  - [Displaying an Object](#displaying-an-object)
    - [Example 3](#example-3)
  - [Displaying a JSON Array](#displaying-a-json-array)
    - [Example 4](#example-4)
  - [Displaying JSON in a Table](#displaying-json-in-a-table)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Displaying a Property

You can display a specific property from a JSON object in HTML:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON HTML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Displaying a Property</h4>
<p id="demo"></p>

<script>
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML = "Name: " + obj.name;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-display_property/index.html)

## Displaying Multiple Properties

You can display multiple properties from a JSON object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON HTML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Displaying Multiple Properties</h4>
<p id="demo"></p>

<script>
const jsonString = '{"name":"John","age":30,"city":"New York"}';
const obj = JSON.parse(jsonString);

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

**Result** [View Example](ex2-multiple_properties/index.html)

## Displaying an Object

You can display an entire JSON object using `JSON.stringify()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON HTML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Displaying an Object</h4>
<pre id="demo"></pre>

<script>
const jsonString = '{"name":"John","age":30,"city":"New York","hobbies":["reading","music"]}';
const obj = JSON.parse(jsonString);

// Display formatted JSON
document.getElementById("demo").innerHTML = JSON.stringify(obj, null, 2);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-display_object/index.html)

## Displaying a JSON Array

You can loop through a JSON array and display all values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON HTML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Displaying a JSON Array</h4>
<p id="demo"></p>

<script>
const jsonArray = '["Ford","BMW","Audi","Fiat"]';
const cars = JSON.parse(jsonArray);

let text = "<ul>";
for (let car of cars) {
  text += "<li>" + car + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-display_array/index.html)

## Displaying JSON in a Table

You can display an array of JSON objects in an HTML table:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON HTML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Displaying JSON in a Table</h4>
<table id="demo" border="1"></table>

<script>
// JSON array of objects
const jsonString = '[{"name":"John","age":30,"city":"New York"},{"name":"Jane","age":25,"city":"London"},{"name":"Bob","age":35,"city":"Paris"}]';
const data = JSON.parse(jsonString);

let table = "<tr><th>Name</th><th>Age</th><th>City</th></tr>";
for (let person of data) {
  table += "<tr><td>" + person.name + "</td><td>" + person.age + "</td><td>" + person.city + "</td></tr>";
}
document.getElementById("demo").innerHTML = table;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-json_table/index.html)

## Document

Document in project

You can [Download PDF](js-json_html.pdf) file.

## Reference

- [W3Schools JavaScript JSON HTML](https://www.w3schools.com/js/js_json_html.asp)