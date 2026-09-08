# JavaScript Function Expressions

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Function Expressions](#javascript-function-expressions)
  - [What is a Function Expression?](#what-is-a-function-expression)
    - [Example 1](#example-1)
  - [Anonymous Functions](#anonymous-functions)
    - [Example 2](#example-2)
  - [Functions Stored in Variables](#functions-stored-in-variables)
    - [Example 3](#example-3)
  - [Function Declarations vs Function Expressions](#function-declarations-vs-function-expressions)
    - [Example 4](#example-4)
  - [Hoisting](#hoisting)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## What is a Function Expression?

A JavaScript function can also be defined using an **expression**.

A function expression can be stored in a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Expressions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What is a Function Expression?</h4>
<p id="demo"></p>

<script>
const x = function (a, b) { return a * b };
document.getElementById("demo").innerHTML = "Result: " + x(4, 3);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-function_expression/index.html)

## Anonymous Functions

A function expression can be stored in a variable without a function name, called an **anonymous function**:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Expressions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Anonymous Functions</h4>
<p id="demo"></p>

<script>
const myFunction = function() {
  return "Hello from anonymous function!";
};
document.getElementById("demo").innerHTML = myFunction();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-anonymous_function/index.html)

## Functions Stored in Variables

A function expression can be stored in a variable using `var`, `let`, or `const`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Expressions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions Stored in Variables</h4>
<p id="demo"></p>

<script>
const square = function(x) {
  return x * x;
};
document.getElementById("demo").innerHTML = "Square of 7: " + square(7);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-stored_in_variable/index.html)

## Function Declarations vs Function Expressions

A **function declaration** defines a named function. A **function expression** defines a function inside an expression:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Expressions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Function Declaration vs Expression</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Function Declaration
function sumDeclaration(a, b) {
  return a + b;
}

// Function Expression
const sumExpression = function(a, b) {
  return a + b;
};

document.getElementById("demo1").innerHTML = "Declaration: " + sumDeclaration(5, 3);
document.getElementById("demo2").innerHTML = "Expression: " + sumExpression(5, 3);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-declaration_vs_expression/index.html)

## Hoisting

Function declarations are hoisted (can be called before they are defined). Function expressions are **NOT** hoisted:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Expressions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Hoisting</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Function declaration is hoisted - can be called before definition
document.getElementById("demo1").innerHTML = "Declaration hoisted: " + myDeclaration(5);

function myDeclaration(x) {
  return x * 2;
}

// Function expression is NOT hoisted - this would cause an error:
try {
  let result = myExpression(5);
  document.getElementById("demo2").innerHTML = "Expression: " + result;
} catch(err) {
  document.getElementById("demo2").innerHTML = "Expression error: " + err.message;
}

const myExpression = function(x) {
  return x * 2;
};
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-hoisting/index.html)

## Document

Document in project

You can [Download PDF](js-function_expressions.pdf) file.

## Reference

- [W3Schools JavaScript Function Expressions](https://www.w3schools.com/js/js_function_expressions.asp)