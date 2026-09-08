# JavaScript Destructuring

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Destructuring](#javascript-destructuring)
  - [Destructuring Assignment Syntax](#destructuring-assignment-syntax)
    - [Example 1](#example-1)
  - [Object Destructuring](#object-destructuring)
    - [Example 2](#example-2)
  - [String Destructuring](#string-destructuring)
    - [Example 3](#example-3)
  - [Array Destructuring](#array-destructuring)
    - [Example 4](#example-4)
  - [Destructuring Maps](#destructuring-maps)
    - [Example 5](#example-5)
  - [Swapping JavaScript Variables](#swapping-javascript-variables)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Destructuring Assignment Syntax

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Destructuring makes it easy to extract only what is needed from data.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Destructuring</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Destructuring Assignment Syntax</h4>
<p id="demo"></p>

<script>
// Create an Array
const vehicles = ["mustang", "f-150", "expedition"];

// Old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// New way - Destructuring
const [car2, truck2, suv2] = vehicles;

document.getElementById("demo").innerHTML =
  "Destructured: " + car2 + ", " + truck2 + ", " + suv2;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-destructuring_syntax/index.html)

## Object Destructuring

Object destructuring allows you to extract properties from objects and assign them to variables. You can also assign **default values** and use **property aliases**.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Destructuring</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object Destructuring</h4>
<p id="demo"></p>

<script>
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;

// Default values
const {firstName: fName, country = "US"} = person;

// Property alias
const {lastName: lName} = person;

document.getElementById("demo").innerHTML =
  firstName + " " + lastName + "<br>" +
  "Alias: " + fName + " " + lName + "<br>" +
  "Country (default): " + country;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-object_destructuring/index.html)

## String Destructuring

You can use destructuring to unpack characters from a string into variables.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Destructuring</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Destructuring</h4>
<p id="demo"></p>

<script>
// Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;

document.getElementById("demo").innerHTML =
  a1 + " " + a2 + " " + a3 + " " + a4 + " " + a5;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-string_destructuring/index.html)

## Array Destructuring

Array destructuring allows unpacking array values into separate variables. You can **skip values** using commas, use **position values**, and capture remaining elements with the **rest property** (`...`).

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Destructuring</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Array Destructuring</h4>
<p id="demo"></p>

<script>
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Basic array destructuring
const [x, y] = numbers;

// Skipping array values
const [a, , , b] = numbers;

// Array position values
const {[0]:p1, [1]:p2} = numbers;

// The rest property
const [first, second, ...rest] = numbers;

document.getElementById("demo").innerHTML =
  "x = " + x + ", y = " + y + "<br>" +
  "Skipped: a = " + a + ", b = " + b + "<br>" +
  "Position: p1 = " + p1 + ", p2 = " + p2 + "<br>" +
  "Rest: first = " + first + ", second = " + second + ", rest = [" + rest + "]";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-array_destructuring/index.html)

## Destructuring Maps

Destructuring can also be used with Maps to extract key-value pairs.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Destructuring</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Destructuring Maps</h4>
<p id="demo"></p>

<script>
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";

// Destructuring Maps
for (const [key, value] of fruits) {
  text += key + " is " + value + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-destructuring_maps/index.html)

## Swapping JavaScript Variables

Destructuring makes it easy to swap the values of two variables without needing a temporary third variable.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Destructuring</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Swapping JavaScript Variables</h4>
<p id="demo"></p>

<script>
let firstName = "John";
let lastName = "Doe";

document.getElementById("demo").innerHTML =
  "Before: " + firstName + " " + lastName + "<br>";

// Swapping variables with destructuring
[firstName, lastName] = [lastName, firstName];

document.getElementById("demo").innerHTML +=
  "After: " + firstName + " " + lastName;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-swapping_variables/index.html)

## Document

Document in project

You can [Download PDF](js-destructuring.pdf) file.

## Reference

- [W3Schools JavaScript Destructuring](https://www.w3schools.com/js/js_destructuring.asp)