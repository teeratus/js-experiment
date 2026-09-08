# JavaScript Function Return

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Function Return](#javascript-function-return)
  - [The return Statement](#the-return-statement)
    - [Example 1](#example-1)
  - [Returning a Calculated Value](#returning-a-calculated-value)
    - [Example 2](#example-2)
  - [Using Return Values in Expressions](#using-return-values-in-expressions)
    - [Example 3](#example-3)
  - [Return Statements Stop Execution](#return-statements-stop-execution)
    - [Example 4](#example-4)
  - [Functions Without return](#functions-without-return)
    - [Example 5](#example-5)
  - [Returning Values Early](#returning-values-early)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## The return Statement

When JavaScript reaches a `return` statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Return</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The return Statement</h4>
<p id="demo"></p>

<script>
function myFunction(a, b) {
  return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-return_statement/index.html)

## Returning a Calculated Value

A function can return a calculated value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Return</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Returning a Calculated Value</h4>
<p id="demo"></p>

<script>
function calculateArea(width, height) {
  return width * height;
}
let area = calculateArea(5, 10);
document.getElementById("demo").innerHTML = "Area: " + area;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-calculated_value/index.html)

## Using Return Values in Expressions

The return value of a function can be used directly in expressions:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Return</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Return Values in Expressions</h4>
<p id="demo"></p>

<script>
function add(x, y) {
  return x + y;
}
// Using return value directly in expression
let result = add(5, 10) * 2;
document.getElementById("demo").innerHTML = "(5 + 10) * 2 = " + result;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-return_expressions/index.html)

## Return Statements Stop Execution

After the `return` statement is executed, the rest of the code in the function does NOT execute:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Return</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Return Statements Stop Execution</h4>
<p id="demo"></p>

<script>
function myFunction() {
  return "This is returned";
  // Code after return will NOT execute
  let x = 5; // This line is ignored
}
document.getElementById("demo").innerHTML = myFunction();
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-return_stops_execution/index.html)

## Functions Without return

A function without a `return` statement will return `undefined`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Return</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Functions Without return</h4>
<p id="demo"></p>

<script>
function myFunction(a, b) {
  a + b;
  // No return statement
}
let result = myFunction(5, 3);
document.getElementById("demo").innerHTML = "Return value: " + result;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-no_return/index.html)

## Returning Values Early

You can use `return` to exit a function early when a condition is met:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Function Return</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Returning Values Early</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
function checkAge(age) {
  if (age < 18) {
    return "Too young!";
  }
  return "Access granted";
}
document.getElementById("demo1").innerHTML = "Age 15: " + checkAge(15);
document.getElementById("demo2").innerHTML = "Age 21: " + checkAge(21);
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-return_early/index.html)

## Document

Document in project

You can [Download PDF](js-function_return.pdf) file.

## Reference

- [W3Schools JavaScript Function Return](https://www.w3schools.com/js/js_function_return.asp)