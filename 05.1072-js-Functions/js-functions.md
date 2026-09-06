# JavaScript Functions

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Functions](#javascript-functions)
  - [Functions are Code Blocks](#functions-are-code-blocks)
    - [Example 1](#example-1)
  - [Functions Run When You Call Them](#functions-run-when-you-call-them)
    - [Example 2](#example-2)
  - [JavaScript Function Syntax](#javascript-function-syntax)
    - [Example 3](#example-3)
  - [A Function Can Be Used Many Times](#a-function-can-be-used-many-times)
    - [Example 4](#example-4)
  - [Local Variables](#local-variables)
    - [Example 5](#example-5)
  - [Functions Used as Variables](#functions-used-as-variables)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Functions are Code Blocks

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions are Code Blocks</h4>
<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World!";
}
myFunction();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-functions_intro/index.html)

## Functions Run When You Call Them

Functions run when you call them. You can call the function by its name:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions Run When You Call Them</h4>
<p id="demo"></p>

<script>
function myFunction(a, b) {
  return a * b;
}
let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = "4 * 3 = " + result;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-calling_function/index.html)

## JavaScript Function Syntax

A JavaScript function is defined with the `function` keyword, followed by a **name**, followed by parentheses **()**.

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
`(parameter1, parameter2, ...)`

The code to be executed, by the function, is placed inside curly brackets: `{}`

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Function Syntax</h4>
<p id="demo"></p>

<script>
// Function is called, the return value will end up in x
let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-function_syntax/index.html)

## A Function Can Be Used Many Times

Functions can be reused to perform the same task with different values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>A Function Can Be Used Many Times</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit - 32);
}

document.getElementById("demo1").innerHTML = "32°F = " + toCelsius(32) + "°C";
document.getElementById("demo2").innerHTML = "68°F = " + toCelsius(68) + "°C";
document.getElementById("demo3").innerHTML = "100°F = " + toCelsius(100) + "°C";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-reuse_function/index.html)

## Local Variables

Variables declared within a JavaScript function become **LOCAL** to the function.

Local variables can only be accessed from within the function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Local Variables</h4>
<p id="demo"></p>

<script>
function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo").innerHTML = "Inside function: " + carName;
}
myFunction();
// carName is NOT accessible outside the function
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-local_variables/index.html)

## Functions Used as Variables

Functions can be used the same way as variables, in all types of formulas, assignments, and calculations:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions Used as Variables</h4>
<p id="demo"></p>

<script>
function myFunction(a, b) {
  return a * b;
}
// Function result used directly as a variable
document.getElementById("demo").innerHTML = "5 * 3 = " + myFunction(5, 3);
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-function_as_variable/index.html)

## Document

Document in project

You can [Download PDF](js-functions.pdf) file.

## Reference

- [W3Schools JavaScript Functions](https://www.w3schools.com/js/js_function_intro.asp)