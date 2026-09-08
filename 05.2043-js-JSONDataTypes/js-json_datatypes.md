# JavaScript JSON Data Types

[Back to JS page](../index.html)

Table of Contents
- [JavaScript JSON Data Types](#javascript-json-data-types)
  - [JSON Value Types](#json-value-types)
    - [Example 1](#example-1)
  - [JSON String Values](#json-string-values)
    - [Example 2](#example-2)
  - [JSON Number Values](#json-number-values)
    - [Example 3](#example-3)
  - [JSON Boolean Values](#json-boolean-values)
    - [Example 4](#example-4)
  - [JSON Null](#json-null)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## JSON Value Types

In JSON, values must be one of the following data types:

- a **string**
- a **number**
- an **object** (JSON object)
- an **array**
- a **boolean**
- **null**

JSON values **cannot** be one of the following data types:

- a **function**
- a **date**
- **undefined**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Value Types</h4>
<p id="demo"></p>

<script>
// JSON with different value types
const jsonString = '{"name":"John","age":30,"isStudent":false,"car":null,"hobbies":["reading","music"]}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "String: " + obj.name + "<br>" +
  "Number: " + obj.age + "<br>" +
  "Boolean: " + obj.isStudent + "<br>" +
  "Null: " + obj.car + "<br>" +
  "Array: " + obj.hobbies;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-value_types/index.html)

## JSON String Values

In JSON, string values must be written with double quotes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON String Values</h4>
<p id="demo"></p>

<script>
// JSON with string values
const jsonString = '{"firstName":"John","lastName":"Doe","city":"New York"}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "First name: " + obj.firstName + "<br>" +
  "Last name: " + obj.lastName + "<br>" +
  "City: " + obj.city;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-string_values/index.html)

## JSON Number Values

In JSON, number values must be an integer or a floating point. They must not be written in quotes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Number Values</h4>
<p id="demo"></p>

<script>
// JSON with number values (integers and floating point)
const jsonString = '{"age":30,"weight":75.5,"height":180}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "Age: " + obj.age + " (integer)<br>" +
  "Weight: " + obj.weight + " (float)<br>" +
  "Height: " + obj.height + " cm";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-number_values/index.html)

## JSON Boolean Values

In JSON, boolean values must be either `true` or `false` (without quotes):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Boolean Values</h4>
<p id="demo"></p>

<script>
// JSON with boolean values
const jsonString = '{"isStudent":false,"hasGraduated":true,"isEmployed":true}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "Is student: " + obj.isStudent + "<br>" +
  "Has graduated: " + obj.hasGraduated + "<br>" +
  "Is employed: " + obj.isEmployed;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-boolean_values/index.html)

## JSON Null

In JSON, `null` represents an empty or non-existent value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JSON Null</h4>
<p id="demo"></p>

<script>
// JSON with null values
const jsonString = '{"firstName":"John","middleName":null,"lastName":"Doe"}';
const obj = JSON.parse(jsonString);

document.getElementById("demo").innerHTML =
  "First name: " + obj.firstName + "<br>" +
  "Middle name: " + obj.middleName + " (null)<br>" +
  "Last name: " + obj.lastName;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-null_value/index.html)

## Document

Document in project

You can [Download PDF](js-json_datatypes.pdf) file.

## Reference

- [W3Schools JavaScript JSON Data Types](https://www.w3schools.com/js/js_json_datatypes.asp)