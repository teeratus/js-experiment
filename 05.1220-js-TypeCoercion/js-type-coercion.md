# JavaScript Type Coercion

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Type Coercion](#javascript-type-coercion)
  - [Type Coercion](#type-coercion)
    - [Example 1](#example-1)
  - [String Coercion (+)](#string-coercion-)
    - [Example 2](#example-2)
  - [Numeric Coercion](#numeric-coercion)
    - [Example 3](#example-3)
  - [Boolean Coercion](#boolean-coercion)
    - [Example 4](#example-4)
  - [Loose Equality (==)](#loose-equality-)
    - [Example 5](#example-5)
  - [Best Practices to Avoid Bugs](#best-practices-to-avoid-bugs)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## Type Coercion

**Type coercion** is the **automatic conversion** of values from one data type to another.

Type coercion happens when you perform an operation on different data types, and the JavaScript engine tries to make them "fit" together.

JavaScript coerces types differently per operator, so type coercion can hide bugs. The program continues according to the coercion rules, but these may differ from what the programmer wanted to achieve.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Coercion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Type Coercion</h4>
<p id="demo"></p>

<script>
let result1 = ('5' + '2'); // = 52
let result2 = ('5' - '2'); // = 3

document.getElementById("demo").innerHTML =
  "('5' + '2') = " + result1 + "<br>" +
  "('5' - '2') = " + result2;
</script>

</body>
</html>
```

Coercion is **implicit** (handled automatically by the engine), while **type conversion** is explicit (you manually use functions like `Number()` or `String()`).

Because JavaScript is **weakly typed**, it doesn't throw errors when types don't match; it just tries to coerce them.

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-type_coercion/index.html)

## String Coercion (+)

If any part of a `+` operation is a string, JavaScript converts everything to strings and concatenates them.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Coercion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Coercion (+)</h4>
<p id="demo"></p>

<script>
let x = "5" + 2 // x = "52"

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-string_coercion/index.html)

## Numeric Coercion

Other arithmetic operators (`-`, `*`, `/`, `%`) and the unary plus (`+x`) force values into numbers.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Coercion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Numeric Coercion</h4>
<p id="demo"></p>

<script>
let x = "5" - 2 // x = 3

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-numeric_coercion/index.html)

## Boolean Coercion

Values are coerced to booleans in logical contexts like `if` statements or using the double-NOT operator (`!!`).

- **Falsy values:** `0`, `""`, `null`, `undefined`, `NaN`, and `false`
- **Truthy values:** Everything else (including empty objects `{}` and arrays `[]`)

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Coercion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Boolean Coercion</h4>
<p id="demo"></p>

<script>
let text = "";

text += "Boolean(0) = " + Boolean(0) + "<br>";
text += "Boolean(\"\") = " + Boolean("") + "<br>";
text += "Boolean(null) = " + Boolean(null) + "<br>";
text += "Boolean(undefined) = " + Boolean(undefined) + "<br>";
text += "Boolean(NaN) = " + Boolean(NaN) + "<br>";
text += "Boolean(false) = " + Boolean(false) + "<br>";
text += "Boolean({}) = " + Boolean({}) + "<br>";
text += "Boolean([]) = " + Boolean([]) + "<br>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-boolean_coercion/index.html)

## Loose Equality (==)

This operator performs coercion to find a "common type" before comparing.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Coercion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Loose Equality (==)</h4>
<p id="demo"></p>

<script>
let x = (5 == "5") // x = true

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-loose_equality/index.html)

## Best Practices to Avoid Bugs

- **Use `===` (Strict Equality):** This checks both value and type without coercion, preventing weird results.
- **Be Explicit:** Instead of relying on automatic behavior, use MDN's recommended conversion methods like `Number()` or `String()` to make your intent clear.
- **Watch for NaN:** If a string cannot be converted to a valid number, like `"abc" - 1`, the result is `NaN` (Not-a-Number).

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Type Coercion</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Best Practices to Avoid Bugs</h4>
<p id="demo"></p>

<script>
let text = "";

// Use === (Strict Equality)
text += "5 == \"5\" : " + (5 == "5") + "<br>";
text += "5 === \"5\" : " + (5 === "5") + "<br><br>";

// Be Explicit
text += "Number(\"5\") + 2 : " + (Number("5") + 2) + "<br><br>";

// Watch for NaN
let result = "abc" - 1;
text += "\"abc\" - 1 : " + result;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-best_practices/index.html)

## Document

Document in project

You can [Download PDF](js-type-coercion.pdf) file.

## Reference

- [W3Schools JavaScript Type Coercion](https://www.w3schools.com/js/js_type_coercion.asp)