# JavaScript NaN

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript NaN](#javascript-nan)
  - [Invalid Number Operations](#invalid-number-operations)
    - [Example 1](#example-1)
  - [NaN is a Number](#nan-is-a-number)
    - [Example 2](#example-2)
  - [Numeric Strings](#numeric-strings)
    - [Example 3](#example-3)
  - [Non-Numeric Strings](#non-numeric-strings)
    - [Example 4](#example-4)
  - [Using isNaN()](#using-isnan)
    - [Example 5](#example-5)
  - [NaN is Not Equal to Itself](#nan-is-not-equal-to-itself)
    - [Example 6](#example-6)
  - [NaN in Math](#nan-in-math)
    - [Example 7](#example-7)
  - [Document](#document)
  - [Reference](#reference)


## Invalid Number Operations

In JavaScript, `NaN` is short for **Not a Number**. `NaN` is a JavaScript number that is not a legal number.

You get `NaN` when JavaScript cannot calculate a number.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NaN</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Invalid Number Operations</h4>
<p id="demo"></p>

<script>
let x = 100 / "Apple";

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-invalid_number_operations/index.html)

## NaN is a Number

The type of `NaN` is `number`. This may look strange, but `NaN` belongs to the JavaScript number type.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NaN</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>NaN is a Number</h4>
<p id="demo"></p>

<script>
let x = NaN;

document.getElementById("demo").innerHTML = typeof x;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-nan_is_a_number/index.html)

## Numeric Strings

JavaScript tries to convert numeric strings to numbers in arithmetic operations.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NaN</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Numeric Strings</h4>
<p id="demo"></p>

<script>
let x = 100 / "10";

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

The result is `10`, because `"10"` is converted to the number `10`.

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-numeric_strings/index.html)

## Non-Numeric Strings

A non-numeric string cannot be converted to a number.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NaN</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Non-Numeric Strings</h4>
<p id="demo"></p>

<script>
let x = 100 / "Apple";

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

The result is `NaN`, because `"Apple"` cannot be converted to a number.

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-non_numeric_strings/index.html)

## Using isNaN()

You can use the JavaScript function `isNaN()` to find out if a value is not a number.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NaN</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using isNaN()</h4>
<p id="demo"></p>

<script>
let x = 100 / "Apple";

document.getElementById("demo").innerHTML = isNaN(x);
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-using_isnan/index.html)

## NaN is Not Equal to Itself

`NaN` is the only JavaScript value that is not equal to itself.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NaN</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>NaN is Not Equal to Itself</h4>
<p id="demo"></p>

<script>
let x = NaN;

document.getElementById("demo").innerHTML = x == x;
</script>

</body>
</html>
```

To test for `NaN`, use `isNaN()`.

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-nan_not_equal/index.html)

## NaN in Math

If you use `NaN` in a mathematical operation, the result will also be `NaN`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript NaN</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>NaN in Math</h4>
<p id="demo"></p>

<script>
let x = NaN;
let y = 5;

document.getElementById("demo").innerHTML = x + y;
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-nan_in_math/index.html)

## Note

`NaN` means **Not a Number**. But the type of `NaN` is `number`. Use `isNaN()` to check if a value is `NaN`.

## Document

Document in project

You can [Download PDF](js-nan.pdf) file.

## Reference

- [W3Schools JavaScript NaN](https://www.w3schools.com/js/js_nan.asp)