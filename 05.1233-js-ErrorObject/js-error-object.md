# JavaScript Error Reference

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Error Reference](#javascript-error-reference)
  - [The Error Object](#the-error-object)
    - [Example 1](#example-1)
  - [Error Object Properties & Methods](#error-object-properties--methods)
    - [Example 2](#example-2)
  - [EvalError](#evalerror)
    - [Example 3](#example-3)
  - [RangeError](#rangeerror)
    - [Example 4](#example-4)
  - [ReferenceError](#referenceerror)
    - [Example 5](#example-5)
  - [TypeError](#typeerror)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## The Error Object

The **Error Object** provides error information when an error occurs. JavaScript has a built-in error object that provides error information when an error occurs. The error object provides two useful properties: `name` and `message`.

You can also create a new Error object with the `new Error()` constructor.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Error Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Error Object</h4>
<p id="demo"></p>

<script>
// Create a new Error object
const err = new Error("Something went wrong!");

document.getElementById("demo").innerHTML =
  "Error Name: " + err.name + "<br>" +
  "Error Message: " + err.message;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-error_object/index.html)

## Error Object Properties & Methods

The Error object has the following important **properties**:

- **name:** Returns or sets the error name
- **message:** Returns or sets an error message (a string)

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Error Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Error Object Properties & Methods</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  adddlert("Welcome guest!");
}
catch(err) {
  text += "Error Name: " + err.name + "<br>";
  text += "Error Message: " + err.message + "<br><br>";
  text += "typeof err: " + typeof err;
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-error_properties_methods/index.html)

## EvalError

An `EvalError` indicates an error regarding the global `eval()` function. These errors are no longer thrown by JavaScript, but the `EvalError` object remains for compatibility.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Error Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>EvalError</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  throw new EvalError("Hello", "someFile.js", 10);
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

**Result** [View Example](ex3-eval_error/index.html)

## RangeError

A `RangeError` is thrown when a value is not in the set or range of allowed values.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Error Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RangeError</h4>
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

**Result** [View Example](ex4-range_error/index.html)

## ReferenceError

A `ReferenceError` is thrown when a variable that doesn't exist (hasn't been declared) is referenced.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Error Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>ReferenceError</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  x = y + 1;   // y is not defined
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

**Result** [View Example](ex5-reference_error/index.html)

## TypeError

A `TypeError` is thrown when an operation cannot be performed, typically when a value is not of the expected type.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Error Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>TypeError</h4>
<p id="demo"></p>

<script>
let text = "";

try {
  let num = 1;
  num.toUpperCase();   // Numbers don't have toUpperCase()
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

**Result** [View Example](ex6-type_error/index.html)

## Document

Document in project

You can [Download PDF](js-error-object.pdf) file.

## Reference

- [W3Schools JavaScript Error Reference](https://www.w3schools.com/js/js_error_object.asp)