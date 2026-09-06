# JavaScript JSON parse()

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript JSON parse()](#javascript-json-parse)
  - [Parsing a JSON Object](#parsing-a-json-object)
    - [Example 1](#example-1)
  - [Parsing a JSON Array](#parsing-a-json-array)
    - [Example 2](#example-2)
  - [Parsing Other JSON Values](#parsing-other-json-values)
    - [Example 3](#example-3)
  - [The Reviver Function](#the-reviver-function)
    - [Example 4](#example-4)
  - [Handling Parse Errors](#handling-parse-errors)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The JSON.parse() Method

When receiving data from a web server, the data is always a string.

Parse the data with `JSON.parse()`, and the data becomes a JavaScript object.

## Parsing a JSON Object

`JSON.parse()` converts a JSON string into a JavaScript object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON parse()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Parsing a JSON Object</h4>
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

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-parse_object/index.html)

## Parsing a JSON Array

`JSON.parse()` can also parse a JSON array into a JavaScript array:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON parse()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Parsing a JSON Array</h4>
<p id="demo"></p>

<script>
const jsonArray = '["Ford","BMW","Audi","Fiat"]';
const cars = JSON.parse(jsonArray);

let text = "";
for (let car of cars) {
  text += car + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-parse_array/index.html)

## Parsing Other JSON Values

`JSON.parse()` can parse all valid JSON value types:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON parse()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Parsing Other JSON Values</h4>
<p id="demo"></p>

<script>
const jsonString = '{"string":"Hello","number":42,"float":3.14,"boolean":true,"nullValue":null}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "String: " + obj.string + "<br>" +
  "Number: " + obj.number + "<br>" +
  "Float: " + obj.float + "<br>" +
  "Boolean: " + obj.boolean + "<br>" +
  "Null: " + obj.nullValue;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-parse_values/index.html)

## The Reviver Function

The `JSON.parse()` method can accept a second parameter called a **reviver** function.

The reviver function can be used to transform the parsed values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON parse()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Reviver Function</h4>
<p id="demo"></p>

<script>
const jsonString = '{"name":"John","birth":"1990-05-15","city":"New York"}';
const obj = JSON.parse(jsonString, function(key, value) {
  if (key === "birth") {
    return new Date(value);
  }
  return value;
});

document.getElementById("demo").innerHTML =
  "Name: " + obj.name + "<br>" +
  "Birth: " + obj.birth + "<br>" +
  "Birth (Date object): " + obj.birth.getFullYear();
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-reviver_function/index.html)

## Handling Parse Errors

Invalid JSON will cause a parse error. Use try/catch to handle errors:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON parse()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Handling Parse Errors</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Valid JSON
const validJSON = '{"name":"John","age":30}';
try {
  const obj = JSON.parse(validJSON);
  document.getElementById("demo1").innerHTML = "Valid: " + obj.name;
} catch(err) {
  document.getElementById("demo1").innerHTML = "Error: " + err.message;
}

// Invalid JSON (single quotes)
const invalidJSON = "{'name':'John','age':30}";
try {
  const obj = JSON.parse(invalidJSON);
  document.getElementById("demo2").innerHTML = "Valid: " + obj.name;
} catch(err) {
  document.getElementById("demo2").innerHTML = "Invalid JSON error: " + err.message;
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-parse_errors/index.html)

## Document

Document in project

You can [Download PDF](js-json_parse.pdf) file.

## Reference

- [W3Schools JavaScript JSON parse()](https://www.w3schools.com/js/js_json_parse.asp)