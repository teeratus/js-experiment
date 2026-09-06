# JavaScript Datatypes Objects

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Datatypes Objects](#javascript-datatypes-objects)
  - [Primitive vs Object Types](#primitive-vs-object-types)
    - [Example 1](#example-1)
  - [Object Methods](#object-methods)
    - [Example 2](#example-2)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Datatypes Objects

In JavaScript, objects are the most important data types. Everything that is not a primitive (string, number, boolean, bigint, undefined, symbol) is an object.

## Primitive vs Object Types

Primitive values vs object types - sometimes primitives behave like objects when using methods:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Datatypes Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Primitive vs Object Types</h4>
<p id="demo"></p>

<script>
// Primitive types
const str = "Hello";
const num = 42;
const bool = true;

// Object types
const arr = [1, 2, 3];
const obj = {name: "John"};
const date = new Date();

let text = "<b>Primitive types:</b><br>";
text += "typeof 'Hello': " + typeof str + "<br>";
text += "typeof 42: " + typeof num + "<br>";
text += "typeof true: " + typeof bool + "<br><br>";

text += "<b>Object types:</b><br>";
text += "typeof [1,2,3]: " + typeof arr + "<br>";
text += "typeof {name}: " + typeof obj + "<br>";
text += "typeof Date: " + typeof date + "<br><br>";

text += "Primitives can temporarily use methods:<br>";
text += "'Hello'.toUpperCase(): " + str.toUpperCase() + "<br>";
text += "(42).toString(): " + num.toString();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-primitive_vs_object/index.html)

## Object Methods

Objects and other complex data types can contain methods. Common built-in objects include:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Datatypes Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object Methods</h4>
<p id="demo"></p>

<script>
// Complex data types
const car = {
  brand: "Toyota",
  model: "Corolla",
  start: function() {
    return this.brand + " " + this.model + " started!";
  }
};

let text = "Array methods:<br>";
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
text += "fruits.push('Orange'): " + fruits + "<br>";
text += "fruits.length: " + fruits.length + "<br><br>";

text += "Date methods:<br>";
text += "new Date().getFullYear(): " + new Date().getFullYear() + "<br><br>";

text += "Custom object method:<br>";
text += "car.start(): " + car.start();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-object_methods/index.html)

## Document

Document in project

You can [Download PDF](js-datatypes_objects.pdf) file.

## Reference

- [W3Schools JavaScript Datatypes Objects](https://www.w3schools.com/js/js_datatypes_objects.asp)