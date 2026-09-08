# JavaScript JSON vs XML

[Back to JS page](../index.html)

Table of Contents
- [JavaScript JSON vs XML](#javascript-json-vs-xml)
  - [JSON Example](#json-example)
    - [Example 1](#example-1)
  - [XML Example](#xml-example)
    - [Example 2](#example-2)
  - [JSON Uses Objects and Arrays](#json-uses-objects-and-arrays)
    - [Example 3](#example-3)
  - [Working with JSON in JavaScript](#working-with-json-in-javascript)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## JSON Example

JSON is a lightweight data interchange format. Here is a JSON example:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON vs XML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Example</h4>
<p>JSON data:</p>
<pre id="demo"></pre>

<script>
// JSON object representing a person
const person = {
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "phoneNumbers": ["555-1234", "555-5678"]
};

document.getElementById("demo").innerHTML = JSON.stringify(person, null, 2);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-json_example/index.html)

## XML Example

XML (Extensible Markup Language) is another format for storing and transporting data:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON vs XML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>XML Example</h4>
<p>XML data displayed in HTML:</p>
<pre id="demo" style="color:blue"></pre>

<script>
// Simulating XML-like data structure
const xmlData = 
  "<person>\n" +
  "  <firstName>John</firstName>\n" +
  "  <lastName>Doe</lastName>\n" +
  "  <age>30</age>\n" +
  "  <address>\n" +
  "    <street>123 Main St</street>\n" +
  "    <city>New York</city>\n" +
  "  </address>\n" +
  "  <phoneNumbers>\n" +
  "    <number>555-1234</number>\n" +
  "    <number>555-5678</number>\n" +
  "  </phoneNumbers>\n" +
  "</person>";

// Use textContent to display raw XML without parsing HTML tags
document.getElementById("demo").textContent = xmlData;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-xml_example/index.html)

## JSON Uses Objects and Arrays

JSON uses objects (key/value pairs) and arrays. XML uses elements with opening and closing tags:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON vs XML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Uses Objects and Arrays</h4>
<p id="demo"></p>

<script>
// JSON: employees array with objects
const employees = {
  "employees": [
    { "name": "John", "department": "Sales" },
    { "name": "Jane", "department": "Marketing" },
    { "name": "Bob", "department": "IT" }
  ]
};

let text = "JSON Employees:<br>";
for (let emp of employees.employees) {
  text += emp.name + " - " + emp.department + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-json_objects_arrays/index.html)

## Working with JSON in JavaScript

JSON integrates naturally with JavaScript since it shares the same syntax:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON vs XML</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Working with JSON in JavaScript</h4>
<p id="demo"></p>

<script>
// JSON data as string
const jsonString = '{"name":"John","age":30,"city":"New York"}';

// Parse JSON to JavaScript object
const obj = JSON.parse(jsonString);

// Easily access properties
document.getElementById("demo").innerHTML =
  "Name: " + obj.name + "<br>" +
  "Age: " + obj.age + "<br>" +
  "City: " + obj.city;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-json_javascript/index.html)

## Document

Document in project

You can [Download PDF](js-json_vs_xml.pdf) file.

## Reference

- [W3Schools JavaScript JSON vs XML](https://www.w3schools.com/js/js_json_xml.asp)