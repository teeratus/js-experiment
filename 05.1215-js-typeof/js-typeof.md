# JavaScript typeof

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript typeof](#javascript-typeof)
  - [The typeof Operator](#the-typeof-operator)
    - [Example 1](#example-1)
  - [How to Recognize an Array](#how-to-recognize-an-array)
    - [Example 2](#example-2)
  - [The instanceof Operator](#the-instanceof-operator)
    - [Example 3](#example-3)
  - [Difference Between Undefined and Null](#difference-between-undefined-and-null)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## The typeof Operator

The `typeof` operator returns the type of a variable or value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The typeof Operator</h4>
<p id="demo"></p>

<script>
// Primitive data types
let text = "";

text += "typeof 'John': " + typeof "John" + "<br>";
text += "typeof 3.14: " + typeof 3.14 + "<br>";
text += "typeof true: " + typeof true + "<br>";
text += "typeof 123n: " + typeof 123n + "<br>";
text += "typeof undefined: " + typeof undefined + "<br>";
text += "typeof Symbol(): " + typeof Symbol() + "<br><br>";

// Complex data types
text += "typeof [1,2,3]: " + typeof [1,2,3] + "<br>";
text += "typeof {name:'x'}: " + typeof {name:"x"} + "<br>";
text += "typeof new Date(): " + typeof new Date() + "<br>";
text += "typeof function(){}: " + typeof function(){} + "<br>";
text += "typeof null: " + typeof null;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-typeof/index.html)

## How to Recognize an Array

`typeof` returns "object" for arrays. Use `Array.isArray()` to identify arrays:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>How to Recognize an Array</h4>
<p id="demo"></p>

<script>
const fruits = ["Apple", "Banana", "Orange"];

let text = "typeof fruits: " + typeof fruits + "<br>";
text += "Array.isArray(fruits): " + Array.isArray(fruits) + "<br><br>";

// Check with constructor
text += "fruits.constructor === Array: " + (fruits.constructor === Array);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-array_check/index.html)

## The instanceof Operator

`instanceof` checks if an object is an instance of a specific constructor:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The instanceof Operator</h4>
<p id="demo"></p>

<script>
const arr = [1, 2, 3];
const date = new Date();
const person = {name: "John"};

let text = "arr instanceof Array: " + (arr instanceof Array) + "<br>";
text += "date instanceof Date: " + (date instanceof Date) + "<br>";
text += "person instanceof Object: " + (person instanceof Object) + "<br><br>";

text += "typeof arr: " + typeof arr + " (object)<br>";
text += "instanceof is more specific: " + (arr instanceof Array);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-instanceof/index.html)

## Difference Between Undefined and Null

`undefined` and `null` are different: `undefined` is a type, `null` is an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript typeof</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Difference Between Undefined and Null</h4>
<p id="demo"></p>

<script>
// undefined - variable not assigned
let car;

// null - explicitly declared empty
let person = null;

// empty - empty string
let fruit = "";

let text = "let car; → typeof: " + typeof car + "<br>";
text += "let person = null; → typeof: " + typeof person + "<br>";
text += "let fruit = ''; → typeof: " + typeof fruit + "<br><br>";

text += "car === undefined: " + (car === undefined) + "<br>";
text += "person === null: " + (person === null) + "<br>";
text += "undefined == null: " + (undefined == null) + " (loose equal)<br>";
text += "undefined === null: " + (undefined === null) + " (strict equal)";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-undefined_null/index.html)

## Document

Document in project

You can [Download PDF](js-typeof.pdf) file.

## Reference

- [W3Schools JavaScript typeof](https://www.w3schools.com/js/js_typeof.asp)