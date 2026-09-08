# JavaScript JSON Syntax

[Back to JS page](../index.html)

Table of Contents
- [JavaScript JSON Syntax](#javascript-json-syntax)
  - [JSON Syntax Rules](#json-syntax-rules)
    - [Example 1](#example-1)
  - [JSON Property Names](#json-property-names)
    - [Example 2](#example-2)
  - [JSON Strings](#json-strings)
    - [Example 3](#example-3)
  - [JSON Array Literals](#json-array-literals)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## JSON Syntax Rules

JSON syntax is derived from JavaScript object notation syntax:

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Syntax Rules</h4>
<p id="demo"></p>

<script>
// JSON data - name/value pairs
const jsonString = '{"firstName":"John","lastName":"Doe","age":30}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "firstName: " + obj.firstName + "<br>" +
  "lastName: " + obj.lastName + "<br>" +
  "age: " + obj.age;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-syntax_rules/index.html)

## JSON Property Names

JSON property names must be in double quotes. JavaScript property names can be in single or double quotes, but JSON requires double quotes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Property Names</h4>
<p id="demo"></p>

<script>
// Valid JSON - property names in double quotes
const jsonString = '{"name":"John","age":30,"city":"New York"}';

const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "name: " + obj.name + "<br>" +
  "age: " + obj.age + "<br>" +
  "city: " + obj.city;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-property_names/index.html)

## JSON Strings

JSON strings must be written in double quotes. Single quotes are not valid in JSON:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Strings</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Valid JSON - strings in double quotes
const validJSON = '{"message":"Hello World"}';

// Invalid JSON would be: {'message':'Hello World'} (single quotes)
try {
  const obj = JSON.parse(validJSON);
  document.getElementById("demo1").innerHTML = "Valid JSON: " + obj.message;
} catch(err) {
  document.getElementById("demo1").innerHTML = "Error: " + err.message;
}

// Invalid JSON - single quotes not allowed
const invalidJSON = "{'message':'Hello World'}";
try {
  JSON.parse(invalidJSON);
} catch(err) {
  document.getElementById("demo2").innerHTML = "Invalid JSON: " + err.message;
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-json_strings/index.html)

## JSON Array Literals

JSON arrays are written inside square brackets and can hold multiple values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Array Literals</h4>
<p id="demo"></p>

<script>
// JSON object with an array
const jsonString = '{"employees":["John","Jane","Bob"]}';
const obj = JSON.parse(jsonString);

let text = "";
for (let emp of obj.employees) {
  text += emp + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-array_literals/index.html)

## Document

Document in project

You can [Download PDF](js-json_syntax.pdf) file.

## Reference

- [W3Schools JavaScript JSON Syntax](https://www.w3schools.com/js/js_json_syntax.asp)