# JavaScript Data Types

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Data Types](#javascript-data-types)
  - [JavaScript has 8 Datatypes](#javascript-has-8-datatypes)
    - [Example 1](#example-1)
  - [The typeof Operator](#the-typeof-operator)
    - [Example 2](#example-2)
  - [JavaScript Strings](#javascript-strings)
    - [Example 3](#example-3)
  - [JavaScript Numbers](#javascript-numbers)
    - [Example 4](#example-4)
  - [Exponential Notation](#exponential-notation)
    - [Example 5](#example-5)
  - [JavaScript Booleans](#javascript-booleans)
    - [Example 6](#example-6)
  - [Datatype undefined](#datatype-undefined)
    - [Example 7](#example-7)
  - [Empty Values](#empty-values)
    - [Example 8](#example-8)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript has 8 Datatypes

JavaScript has 8 datatypes:

1. **String**
2. **Number**
3. **Bigint**
4. **Boolean**
5. **Undefined**
6. **Null**
7. **Symbol**
8. **Object**

Objects can be: An object, an array, or a date.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript has 8 Datatypes</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<p id="demo5"></p>

<script>
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans:
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

document.getElementById("demo1").innerHTML = "Number: " + length + ", " + weight;
document.getElementById("demo2").innerHTML = "String: " + color + ", " + lastName;
document.getElementById("demo3").innerHTML = "Boolean: " + x + ", " + y;
document.getElementById("demo4").innerHTML = "Object: " + person.firstName + " " + person.lastName;
document.getElementById("demo5").innerHTML = "Array: " + cars;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-datatypes/index.html)

## The typeof Operator

You can use the `typeof` operator to find the data type of a JavaScript variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The typeof Operator</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "typeof 'John' is: " + typeof "John" + "<br>" +
  "typeof 3.14 is: " + typeof 3.14 + "<br>" +
  "typeof true is: " + typeof true + "<br>" +
  "typeof x is: " + typeof x + "<br>" +
  "typeof [1,2,3] is: " + typeof [1,2,3] + "<br>" +
  "typeof {name:'John'} is: " + typeof {name:"John"};
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-typeof_operator/index.html)

## JavaScript Strings

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Strings</h4>
<p id="demo"></p>

<script>
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';
document.getElementById("demo").innerHTML =
  carName1 + "<br>" +
  carName2;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-strings/index.html)

## JavaScript Numbers

All JavaScript numbers are stored as decimal numbers. Floating point arithmetic is not always 100% accurate:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Numbers</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;

document.getElementById("demo1").innerHTML =
  "x1 = " + x1 + "<br>" +
  "x2 = " + x2 + "<br>" +
  "x3 = " + x3;

let y1 = 123e5;
let y2 = 123e-5;
document.getElementById("demo2").innerHTML =
  "123e5 = " + y1 + "<br>" +
  "123e-5 = " + y2;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-numbers/index.html)

## Exponential Notation

Extra large or extra small numbers can be written with scientific (exponential) notation:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Exponential Notation</h4>
<p id="demo"></p>

<script>
let y1 = 123e5;
let y2 = 123e-5;
document.getElementById("demo").innerHTML =
  "123e5 = " + y1 + " (large number)" + "<br>" +
  "123e-5 = " + y2 + " (small number)";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-exponential/index.html)

## JavaScript Booleans

Booleans can only have two values: `true` or `false`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Booleans</h4>
<p id="demo"></p>

<script>
let x = 5;
let y = 5;
let z = 6;
document.getElementById("demo").innerHTML =
  "(x == y) = " + (x == y) + "<br>" +
  "(x == z) = " + (x == z);
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-booleans/index.html)

## Datatype undefined

A variable without a value has the value `undefined`. The type is also `undefined`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Datatype undefined</h4>
<p id="demo"></p>

<script>
let car;
document.getElementById("demo").innerHTML =
  "Value: " + car + "<br>" +
  "Type: " + typeof car;
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-undefined/index.html)

## Empty Values

An empty value has nothing to do with `undefined`. An empty string has both a legal value and a type:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Data Types</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Empty Values</h4>
<p id="demo"></p>

<script>
let car = "";
document.getElementById("demo").innerHTML =
  "Value: '" + car + "'<br>" +
  "Type: " + typeof car;
</script>

</body>
</html>
```

![](images/p8.png)

### Example 8

**Result** [View Example](ex8-empty_values/index.html)

## Document

Document in project

You can [Download PDF](js-data_types.pdf) file.

## Reference

- [W3Schools JavaScript Data Types](https://www.w3schools.com/js/js_types.asp)