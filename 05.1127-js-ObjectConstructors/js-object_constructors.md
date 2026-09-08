# JavaScript Object Constructors

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Object Constructors](#javascript-object-constructors)
  - [Object Constructor Functions](#object-constructor-functions)
    - [Example 1](#example-1)
  - [Property Default Values](#property-default-values)
    - [Example 2](#example-2)
  - [Adding a Property to an Object](#adding-a-property-to-an-object)
    - [Example 3](#example-3)
  - [Constructor Function Methods](#constructor-function-methods)
    - [Example 4](#example-4)
  - [Built-in JavaScript Constructors](#built-in-javascript-constructors)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Object Constructor Functions

To create an object type, use an **object constructor function**. It is considered good practice to name constructor functions with an upper-case first letter:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object Constructor Functions</h4>
<p id="demo"></p>

<script>
// Constructor function - named with uppercase first letter
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create objects using the constructor
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Jane", "Doe", 48, "green");

document.getElementById("demo").innerHTML =
  "Father: " + myFather.firstName + " " + myFather.lastName + ", " + myFather.age + "<br>" +
  "Mother: " + myMother.firstName + " " + myMother.lastName + ", " + myMother.age;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-constructor_function/index.html)

## Property Default Values

Constructor functions can have default property values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Property Default Values</h4>
<p id="demo"></p>

<script>
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "American";  // Default value
}

const myFather = new Person("John", "Doe", 50, "blue");
const mySister = new Person("Emily", "Doe", 25, "blue");

document.getElementById("demo").innerHTML =
  "Father: " + myFather.nationality + "<br>" +
  "Sister: " + mySister.nationality + "<br><br>" +
  "Both share the default nationality property";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-default_values/index.html)

## Adding a Property to an Object

You can add a new property to an existing object. It only applies to that object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding a Property to an Object</h4>
<p id="demo"></p>

<script>
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Jane", "Doe", 48);

// Add a property to myFather only (not the constructor)
myFather.nationality = "American";

document.getElementById("demo").innerHTML =
  "Father nationality: " + myFather.nationality + "<br>" +
  "Mother nationality: " + myMother.nationality + " (undefined)<br><br>" +
  "Property added to myFather only";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-add_property_object/index.html)

## Constructor Function Methods

You can define methods inside a constructor function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Constructor Function Methods</h4>
<p id="demo"></p>

<script>
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  this.getAge = function() {
    return this.age;
  };
}

const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Jane", "Doe", 48);

document.getElementById("demo").innerHTML =
  "Father: " + myFather.fullName() + " (" + myFather.getAge() + ")<br>" +
  "Mother: " + myMother.fullName() + " (" + myMother.getAge() + ")";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-constructor_methods/index.html)

## Built-in JavaScript Constructors

JavaScript has built-in constructors for native objects:

| Constructor | Example |
|-------------|---------|
| `Object()` | `new Object()` |
| `String()` | `new String("Hello")` |
| `Number()` | `new Number(42)` |
| `Boolean()` | `new Boolean(true)` |
| `Array()` | `new Array(1, 2, 3)` |
| `Date()` | `new Date()` |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Built-in JavaScript Constructors</h4>
<p id="demo"></p>

<script>
let text = "Built-in constructors:<br><br>";

const obj = new Object();
text += "new Object(): " + obj + "<br>";

const str = new String("Hello");
text += "new String('Hello'): " + str + "<br>";

const num = new Number(42);
text += "new Number(42): " + num + "<br>";

const bool = new Boolean(true);
text += "new Boolean(true): " + bool + "<br>";

const arr = new Array(1, 2, 3);
text += "new Array(1, 2, 3): " + arr + "<br>";

const date = new Date();
text += "new Date(): " + date;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-builtin_constructors/index.html)

## Document

Document in project

You can [Download PDF](js-object_constructors.pdf) file.

## Reference

- [W3Schools JavaScript Object Constructors](https://www.w3schools.com/js/js_object_constructors.asp)