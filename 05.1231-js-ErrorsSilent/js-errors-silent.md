# JavaScript Silent Errors

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Silent Errors](#javascript-silent-errors)
  - [Silent Errors](#silent-errors)
    - [Example 1](#example-1)
  - [Type Coercion](#type-coercion)
    - [Example 2](#example-2)
  - [String Coercion (+)](#string-coercion-)
    - [Example 3](#example-3)
  - [Numeric Coercion](#numeric-coercion)
    - [Example 4](#example-4)
  - [Loose Equality (==)](#loose-equality-)
    - [Example 5](#example-5)
  - [Practices to Avoid Bugs](#practices-to-avoid-bugs)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Silent Errors

**Silent errors** happen when JavaScript fails silently instead of throwing an error. Unlike runtime errors that stop execution, silent errors let the program continue but produce unexpected results.

Silent errors often occur due to type coercion, where JavaScript automatically converts between types without warning.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Silent Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Silent Errors</h4>
<p id="demo"></p>

<script>
let text = "";

// These do NOT throw errors but produce unexpected results
let result1 = 5 + null;        // silent: null becomes 0
let result2 = "5" - 2;         // silent: string "5" becomes number 5
let result3 = "5" + 2;         // silent: number 2 becomes string "2"

text += "5 + null = " + result1 + "<br>";
text += "\"5\" - 2 = " + result2 + "<br>";
text += "\"5\" + 2 = \"" + result3 + "\"<br><br>";
text += "No errors were thrown!";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-silent_errors/index.html)

## Type Coercion

**Type coercion** is the automatic conversion of values from one data type to another. It happens silently when you perform operations on different data types, and JavaScript tries to make them "fit" together.

Because JavaScript is **weakly typed**, it doesn't throw errors when types don't match — it just coerces them. This can hide bugs.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Silent Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Type Coercion</h4>
<p id="demo"></p>

<script>
let result1 = ('5' + '2'); // = 52 (concatenation)
let result2 = ('5' - '2'); // = 3  (numeric subtraction)

document.getElementById("demo").innerHTML =
  "('5' + '2') = " + result1 + "<br>" +
  "('5' - '2') = " + result2;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-type_coercion/index.html)

## String Coercion (+)

If any part of a `+` operation is a string, JavaScript converts everything to strings and concatenates them. This is a common source of silent errors.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Silent Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Coercion (+)</h4>
<p id="demo"></p>

<script>
let x = "5" + 2; // x = "52" (number converted to string)

document.getElementById("demo").innerHTML =
  "\"5\" + 2 = \"" + x + "\"";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-string_coercion/index.html)

## Numeric Coercion

Other arithmetic operators (`-`, `*`, `/`, `%`) and the unary plus (`+x`) force values into numbers. If a value cannot be converted, the result is `NaN`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Silent Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Numeric Coercion</h4>
<p id="demo"></p>

<script>
let text = "";

let x = "5" - 2;       // x = 3 (string converted to number)
let y = "abc" - 1;     // y = NaN (cannot convert)

text += "\"5\" - 2 = " + x + "<br>";
text += "\"abc\" - 1 = " + y + "<br>";
text += "No errors thrown, just NaN.";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-numeric_coercion/index.html)

## Loose Equality (==)

The `==` operator performs coercion to find a "common type" before comparing. This can lead to unexpected results — a classic source of silent bugs.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Silent Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Loose Equality (==)</h4>
<p id="demo"></p>

<script>
let text = "";

text += "5 == \"5\" : " + (5 == "5") + "<br>";
text += "0 == false : " + (0 == false) + "<br>";
text += "\"\" == false : " + ("" == false) + "<br>";
text += "null == undefined : " + (null == undefined);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-loose_equality/index.html)

## Practices to Avoid Bugs

To avoid silent errors caused by type coercion:

- **Use `===` (Strict Equality):** This checks both value and type without coercion.
- **Be Explicit:** Use `Number()`, `String()`, or `Boolean()` to make your intent clear.
- **Watch for NaN:** If a conversion fails, check for `NaN` before using the result.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Silent Errors</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Practices to Avoid Bugs</h4>
<p id="demo"></p>

<script>
let text = "";

// Use === (Strict Equality)
text += "5 == \"5\" : " + (5 == "5") + " (loose)<br>";
text += "5 === \"5\" : " + (5 === "5") + " (strict)<br><br>";

// Be Explicit
text += "Number(\"5\") + 2 : " + (Number("5") + 2) + "<br><br>";

// Watch for NaN
let result = "abc" - 1;
if (isNaN(result)) {
  text += "\"abc\" - 1 is NaN, handle it gracefully.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-practices_to_avoid_bugs/index.html)

## Document

Document in project

You can [Download PDF](js-errors-silent.pdf) file.

## Reference

- [W3Schools JavaScript Silent Errors](https://www.w3schools.com/js/js_errors_silent.asp)