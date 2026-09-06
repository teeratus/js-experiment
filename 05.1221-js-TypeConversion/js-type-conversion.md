# JavaScript Type Conversion

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Type Conversion](#javascript-type-conversion)
  - [Converting Strings to Numbers](#converting-strings-to-numbers)
    - [Example 1](#example-1)
  - [The Unary + Operator](#the-unary--operator)
    - [Example 2](#example-2)
  - [Converting Numbers to Strings](#converting-numbers-to-strings)
    - [Example 3](#example-3)
  - [Converting Dates](#converting-dates)
    - [Example 4](#example-4)
  - [Converting Booleans](#converting-booleans)
    - [Example 5](#example-5)
  - [Automatic Type Conversion](#automatic-type-conversion)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Converting Strings to Numbers

The global method `Number()` converts a variable (or a value) into a number.

- A numeric string (like `"3.14"`) converts to a number (like `3.14`).
- An empty string (like `""`) converts to `0`.
- A non numeric string (like `"John"`) converts to `NaN` (Not a Number).

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Conversion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting Strings to Numbers</h4>
<p id="demo"></p>

<script>
let text = "";

text += "Number(\"3.14\") = " + Number("3.14") + "<br>";
text += "Number(\" \") = " + Number(" ") + "<br>";
text += "Number(\"\") = " + Number("") + "<br>";
text += "Number(\"99 88\") = " + Number("99 88") + "<br>";
text += "Number(\"John\") = " + Number("John");

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-converting_strings_to_numbers/index.html)

## The Unary + Operator

The **unary `+` operator** can be used to convert a variable to a number.

If the variable cannot be converted, it will still become a number, but with the value `NaN` (Not a Number).

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Conversion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Unary + Operator</h4>
<p id="demo"></p>

<script>
let text = "";

let y = "5";      // y is a string
let x = + y;      // x is a number

text += "typeof y (\"5\"): " + typeof y + "<br>";
text += "typeof x (+ y): " + typeof x + "<br><br>";

let z = "John";
let w = + z;

text += "\"John\" to number: " + w;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-unary_plus_operator/index.html)

## Converting Numbers to Strings

The global method `String()` can convert numbers to strings.

It can be used on any type of numbers, literals, variables, or expressions.

The Number method `toString()` does the same.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Conversion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting Numbers to Strings</h4>
<p id="demo"></p>

<script>
let text = "";

let x = 123;

text += "String(x): " + String(x) + "<br>";
text += "String(123): " + String(123) + "<br>";
text += "String(100 + 23): " + String(100 + 23) + "<br><br>";

text += "x.toString(): " + x.toString() + "<br>";
text += "(123).toString(): " + (123).toString() + "<br>";
text += "(100 + 23).toString(): " + (100 + 23).toString();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-converting_numbers_to_strings/index.html)

## Converting Dates

The global method `Number()` can be used to convert dates to numbers.

The date method `getTime()` does the same.

The global method `String()` can convert dates to strings. The `Date` method `toString()` does the same.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Conversion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting Dates</h4>
<p id="demo"></p>

<script>
let text = "";

let d = new Date();

text += "Number(d): " + Number(d) + "<br>";
text += "d.getTime(): " + d.getTime() + "<br><br>";

text += "String(d): " + String(d) + "<br>";
text += "d.toString(): " + d.toString();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-converting_dates/index.html)

## Converting Booleans

The global method `Number()` can also convert booleans to numbers:

- `Number(false)` returns `0`
- `Number(true)` returns `1`

The global method `String()` can convert booleans to strings. The Boolean method `toString()` does the same.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Conversion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting Booleans</h4>
<p id="demo"></p>

<script>
let text = "";

text += "Number(false) = " + Number(false) + "<br>";
text += "Number(true) = " + Number(true) + "<br><br>";

text += "String(false) = \"" + String(false) + "\"<br>";
text += "String(true) = \"" + String(true) + "\"<br><br>";

text += "false.toString() = \"" + false.toString() + "\"<br>";
text += "true.toString() = \"" + true.toString() + "\"";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-converting_booleans/index.html)

## Automatic Type Conversion

When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

The result is not always what you expect.

JavaScript automatically calls the variable's `toString()` function when you try to "output" an object or a variable.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Conversion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Automatic Type Conversion</h4>
<p id="demo"></p>

<script>
let text = "";

text += "(5 + null) = " + (5 + null) + "<br>";
text += "(\"5\" + null) = \"" + ("5" + null) + "\"<br>";
text += "(\"5\" + 2) = \"" + ("5" + 2) + "\"<br>";
text += "(\"5\" - 2) = " + ("5" - 2) + "<br>";
text += "(\"5\" * \"2\") = " + ("5" * "2") + "<br><br>";

// Automatic string conversion
document.getElementById("demo").innerHTML = text;

// Object to string
text += "Automatic toString() on object: " + {firstName:"John", lastName:"Doe"};

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-automatic_type_conversion/index.html)

## Document

Document in project

You can [Download PDF](js-type-conversion.pdf) file.

## Reference

- [W3Schools JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)