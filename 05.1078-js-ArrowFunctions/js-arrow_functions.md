# JavaScript Arrow Functions

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Arrow Functions](#javascript-arrow-functions)
  - [Arrow Function Syntax](#arrow-function-syntax)
    - [Example 1](#example-1)
  - [Shorter Syntax](#shorter-syntax)
    - [Example 2](#example-2)
  - [Arrow Functions with One Parameter](#arrow-functions-with-one-parameter)
    - [Example 3](#example-3)
  - [Arrow Functions Return Value by Default](#arrow-functions-return-value-by-default)
    - [Example 4](#example-4)
  - [Arrow Functions with No Parameters](#arrow-functions-with-no-parameters)
    - [Example 5](#example-5)
  - [Arrow Functions Are Not Declarations](#arrow-functions-are-not-declarations)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Arrow Function Syntax

Arrow functions were introduced in ES6 (2015).

Arrow functions allow us to write shorter function syntax:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrow Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arrow Function Syntax</h4>
<p id="demo"></p>

<script>
// Traditional function expression
const hello1 = function() {
  return "Hello World!";
};

// Arrow function
const hello2 = () => {
  return "Hello World!";
};

document.getElementById("demo").innerHTML = hello2();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-arrow_syntax/index.html)

## Shorter Syntax

If the function has only one statement, and the statement returns a value, you can remove the brackets and the `return` keyword:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrow Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Shorter Syntax</h4>
<p id="demo"></p>

<script>
// Traditional function
const add1 = function(a, b) {
  return a + b;
};

// Arrow function (shorter)
const add2 = (a, b) => a + b;

document.getElementById("demo").innerHTML = "5 + 3 = " + add2(5, 3);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-shorter_syntax/index.html)

## Arrow Functions with One Parameter

With one parameter, parentheses are optional:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrow Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arrow Functions with One Parameter</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// With parentheses
const square1 = (x) => x * x;

// Without parentheses (one parameter only)
const square2 = x => x * x;

document.getElementById("demo1").innerHTML = "With (): " + square1(5);
document.getElementById("demo2").innerHTML = "Without (): " + square2(5);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-one_parameter/index.html)

## Arrow Functions Return Value by Default

Arrow functions return value by default when using the shorthand syntax without curly brackets:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrow Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arrow Functions Return Value by Default</h4>
<p id="demo"></p>

<script>
const multiply = (a, b) => a * b;
document.getElementById("demo").innerHTML = "6 * 7 = " + multiply(6, 7);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-return_default/index.html)

## Arrow Functions with No Parameters

Even with no parameters, we still need empty parentheses:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrow Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arrow Functions with No Parameters</h4>
<p id="demo"></p>

<script>
const greeting = () => "Hello World!";
document.getElementById("demo").innerHTML = greeting();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-no_parameters/index.html)

## Arrow Functions Are Not Declarations

Arrow functions are expressions, NOT declarations. They cannot be hoisted:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrow Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arrow Functions Are Not Declarations</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Function declaration can be called before definition
document.getElementById("demo1").innerHTML = "Declaration: " + myFunction(5);

function myFunction(x) {
  return x * 2;
}

// Arrow function is an expression - must be defined before use
const myArrow = (x) => x * 2;
document.getElementById("demo2").innerHTML = "Arrow: " + myArrow(5);
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-not_declarations/index.html)

## Document

Document in project

You can [Download PDF](js-arrow_functions.pdf) file.

## Reference

- [W3Schools JavaScript Arrow Functions](https://www.w3schools.com/js/js_arrow_function.asp)