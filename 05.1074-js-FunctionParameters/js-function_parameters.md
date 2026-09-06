# JavaScript Function Parameters

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Function Parameters](#javascript-function-parameters)
  - [Parameters (Function Input)](#parameters-function-input)
    - [Example 1](#example-1)
  - [Functions with One Parameter](#functions-with-one-parameter)
    - [Example 2](#example-2)
  - [Functions with Multiple Parameters](#functions-with-multiple-parameters)
    - [Example 3](#example-3)
  - [Incorrect Parameters](#incorrect-parameters)
    - [Example 4](#example-4)
  - [Default Parameter Values](#default-parameter-values)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Parameters (Function Input)

Function **parameters** are the names listed in the function definition.

Function **arguments** are the real values passed to (and received by) the function.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Parameters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Parameters (Function Input)</h4>
<p id="demo"></p>

<script>
function myFunction(firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
}
document.getElementById("demo").innerHTML = myFunction("John", "Doe");
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-parameters_intro/index.html)

## Functions with One Parameter

A function can have a single parameter:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Parameters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions with One Parameter</h4>
<p id="demo"></p>

<script>
function square(x) {
  return x * x;
}
document.getElementById("demo").innerHTML = "Square of 5: " + square(5);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-one_parameter/index.html)

## Functions with Multiple Parameters

A function can have multiple parameters separated by commas:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Parameters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions with Multiple Parameters</h4>
<p id="demo"></p>

<script>
function sum(a, b, c) {
  return a + b + c;
}
document.getElementById("demo").innerHTML = "Sum of 5, 10, 15 = " + sum(5, 10, 15);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-multiple_parameters/index.html)

## Incorrect Parameters

If a function is called with missing arguments (fewer than declared), the missing values are set to `undefined`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Parameters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Incorrect Parameters</h4>
<p id="demo"></p>

<script>
function multiply(a, b) {
  return a * b;
}
// Only one argument passed, b will be undefined
document.getElementById("demo").innerHTML = "multiply(5) = " + multiply(5) + " (NaN because b is undefined)";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-missing_arguments/index.html)

## Default Parameter Values

ES6 allows function parameters to have default values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Parameters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Default Parameter Values</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
function myFunction(x, y = 10) {
  return x + y;
}
document.getElementById("demo1").innerHTML = "myFunction(5) = " + myFunction(5);
document.getElementById("demo2").innerHTML = "myFunction(5, 3) = " + myFunction(5, 3);
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-default_values/index.html)

## Document

Document in project

You can [Download PDF](js-function_parameters.pdf) file.

## Reference

- [W3Schools JavaScript Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)