# JavaScript Data Types

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Data Types](#javascript-data-types)
  - [The Concept of Data Types](#the-concept-of-data-types)
    - [Example 1](#example-1)
  - [JavaScript Types are Dynamic](#javascript-types-are-dynamic)
    - [Example 2](#example-2)
  - [Built-In Object Types](#built-in-object-types)
    - [Example 3](#example-3)
  - [The typeof Operator](#the-typeof-operator)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## The Concept of Data Types

JavaScript has dynamic types. Data types are the classification of data which tells the compiler how to use the data:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Concept of Data Types</h4>
<p id="demo"></p>

<script>
// Different data types
let name = "John";        // String
let age = 30;             // Number
let isStudent = true;     // Boolean
let score = 99.5;         // Number (float)
let colors = ["red", "blue"]; // Array (object)
let person = {name: "John"}; // Object

let text = "name: " + name + " (" + typeof name + ")<br>";
text += "age: " + age + " (" + typeof age + ")<br>";
text += "isStudent: " + isStudent + " (" + typeof isStudent + ")<br>";
text += "score: " + score + " (" + typeof score + ")<br>";
text += "colors: array (" + typeof colors + ")<br>";
text += "person: object (" + typeof person + ")";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-data_types/index.html)

## JavaScript Types are Dynamic

A variable can change its type when assigned a new value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Types are Dynamic</h4>
<p id="demo"></p>

<script>
let x = 5;            // x is a Number
let type1 = typeof x;

x = "Hello";          // x is now a String
let type2 = typeof x;

x = true;             // x is now a Boolean
let type3 = typeof x;

x = {name: "John"};   // x is now an Object
let type4 = typeof x;

document.getElementById("demo").innerHTML =
  "let x = 5 → " + type1 + "<br>" +
  "x = 'Hello' → " + type2 + "<br>" +
  "x = true → " + type3 + "<br>" +
  "x = {name: 'John'} → " + type4 + "<br><br>" +
  "JavaScript types are dynamic - variables can change type";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-dynamic_types/index.html)

## Built-In Object Types

JavaScript has several built-in object types:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Built-In Object Types</h4>
<p id="demo"></p>

<script>
let text = "Built-in object types:<br><br>";

const obj = new Object();
text += "new Object() → " + obj.constructor.name + "<br>";

const arr = new Array(1, 2);
text += "new Array(1, 2) → " + arr.constructor.name + "<br>";

const date = new Date();
text += "new Date() → " + date.constructor.name + "<br>";

const str = new String("hi");
text += "new String('hi') → " + str.constructor.name + "<br>";

const num = new Number(42);
text += "new Number(42) → " + num.constructor.name + "<br>";

const bool = new Boolean(true);
text += "new Boolean(true) → " + bool.constructor.name;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-builtin_types/index.html)

## The typeof Operator

`typeof` returns the type of a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The typeof Operator</h4>
<p id="demo"></p>

<script>
let text = "";

text += "typeof 'Hello': " + typeof "Hello" + "<br>";
text += "typeof 42: " + typeof 42 + "<br>";
text += "typeof 3.14: " + typeof 3.14 + "<br>";
text += "typeof true: " + typeof true + "<br>";
text += "typeof [1,2]: " + typeof [1,2] + " (arrays are objects)<br>";
text += "typeof {}: " + typeof {} + "<br>";
text += "typeof null: " + typeof null + " (null is object)<br>";
text += "typeof undefined: " + typeof undefined + "<br>";
text += "typeof function(): " + typeof function(){} + "<br>";
text += "typeof NaN: " + typeof NaN + " (NaN is number)";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-typeof/index.html)

## Document

Document in project

You can [Download PDF](js-data_types.pdf) file.

## Reference

- [W3Schools JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)