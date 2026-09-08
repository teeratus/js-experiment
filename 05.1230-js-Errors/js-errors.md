# JavaScript Errors

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Errors](#javascript-errors)
  - [How to Handle JavaScript Errors](#how-to-handle-javascript-errors)
    - [Example 1](#example-1)
  - [Reference Errors](#reference-errors)
    - [Example 2](#example-2)
  - [JavaScript Type Errors](#javascript-type-errors)
    - [Example 3](#example-3)
  - [JavaScript Range Errors](#javascript-range-errors)
    - [Example 4](#example-4)
  - [JavaScript URI Errors](#javascript-uri-errors)
    - [Example 5](#example-5)
  - [JavaScript Syntax Errors](#javascript-syntax-errors)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## How to Handle JavaScript Errors

The `try` statement lets you test a block of code for errors. The `catch` statement lets you handle the error. The `throw` statement lets you create custom errors. The `finally` statement lets you execute code after try and catch, regardless of the result.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Try Catch</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  adddlert("Welcome guest!");
}
catch(err) {
  text += "Error: " + err.message + "<br><br>";
}
finally {
  text += "The 'finally' block always runs.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-try_catch/index.html)

## Reference Errors

A `ReferenceError` is thrown if you use (reference) a variable that has not been declared.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Reference Error</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  x = y + 1;   // y cannot be referenced (used)
}
catch(err) {
  text += "Error Name: " + err.name + "<br>";
  text += "Error Message: " + err.message;
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-reference_errors/index.html)

## JavaScript Type Errors

A `TypeError` is thrown if you use a value that is outside the range of expected types.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Type Error</h4>
<p id="demo"></p>

<script>
let text = "";
let num = 1;

try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  text += "Error Name: " + err.name + "<br>";
  text += "Error Message: " + err.message;
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-type_errors/index.html)

## JavaScript Range Errors

A `RangeError` is thrown if you use a number that is outside the range of legal values.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Range Error</h4>
<p id="demo"></p>

<script>
let text = "";
let num = 1;

try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  text += "Error Name: " + err.name + "<br>";
  text += "Error Message: " + err.message;
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-range_errors/index.html)

## JavaScript URI Errors

A `URIError` is thrown if you use illegal characters in a URI function.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>URI Error</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  decodeURI("%%%");   // You cannot URI decode percent signs
}
catch(err) {
  text += "Error Name: " + err.name + "<br>";
  text += "Error Message: " + err.message;
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-uri_errors/index.html)

## JavaScript Syntax Errors

A `SyntaxError` is thrown if you try to evaluate code with a syntax error. Note: Syntax errors are **not catchable** in the same scope — they are thrown when the code is parsed, before execution.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Syntax Error (with eval)</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  text += "Error Name: " + err.name + "<br>";
  text += "Error Message: " + err.message;
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-syntax_errors/index.html)

## Document

Document in project

You can [Download PDF](js-errors.pdf) file.

## Reference

- [W3Schools JavaScript Errors](https://www.w3schools.com/js/js_errors_intro.asp)