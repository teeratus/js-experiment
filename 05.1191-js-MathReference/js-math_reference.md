# JavaScript Math Reference

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Math Reference](#javascript-math-reference)
  - [Math Properties](#math-properties)
    - [Example 1](#example-1)
  - [Math Rounding Methods](#math-rounding-methods)
    - [Example 2](#example-2)
  - [Math Power and Root Methods](#math-power-and-root-methods)
    - [Example 3](#example-3)
  - [Math Trigonometry Methods](#math-trigonometry-methods)
    - [Example 4](#example-4)
  - [Math Utility Methods](#math-utility-methods)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Math Properties

The complete `Math` object reference - properties (constants):

| Property | Description |
|----------|-------------|
| `Math.E` | Euler's number (~2.718) |
| `Math.PI` | Pi (~3.14159) |
| `Math.SQRT2` | Square root of 2 (~1.414) |
| `Math.SQRT1_2` | Square root of 1/2 (~0.707) |
| `Math.LN2` | Natural log of 2 (~0.693) |
| `Math.LN10` | Natural log of 10 (~2.303) |
| `Math.LOG2E` | Log base 2 of E (~1.443) |
| `Math.LOG10E` | Log base 10 of E (~0.434) |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math Properties</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Math.E: " + Math.E + "<br>" +
  "Math.PI: " + Math.PI + "<br>" +
  "Math.SQRT2: " + Math.SQRT2 + "<br>" +
  "Math.SQRT1_2: " + Math.SQRT1_2 + "<br>" +
  "Math.LN2: " + Math.LN2 + "<br>" +
  "Math.LN10: " + Math.LN10 + "<br>" +
  "Math.LOG2E: " + Math.LOG2E + "<br>" +
  "Math.LOG10E: " + Math.LOG10E;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-properties/index.html)

## Math Rounding Methods

Reference for rounding methods:

| Method | Description |
|--------|-------------|
| `Math.round(x)` | Rounds to nearest integer |
| `Math.ceil(x)` | Rounds up to nearest integer |
| `Math.floor(x)` | Rounds down to nearest integer |
| `Math.trunc(x)` | Removes decimal part (no rounding) |
| `Math.sign(x)` | Returns -1, 0, or 1 |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math Rounding Methods</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Math.round(4.6): " + Math.round(4.6) + "<br>" +
  "Math.ceil(4.2): " + Math.ceil(4.2) + "<br>" +
  "Math.floor(4.9): " + Math.floor(4.9) + "<br>" +
  "Math.trunc(4.7): " + Math.trunc(4.7) + "<br>" +
  "Math.sign(-5): " + Math.sign(-5) + "<br>" +
  "Math.sign(0): " + Math.sign(0) + "<br>" +
  "Math.sign(8): " + Math.sign(8);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-rounding_methods/index.html)

## Math Power and Root Methods

Reference for power and root methods:

| Method | Description |
|--------|-------------|
| `Math.pow(x, y)` | x raised to the power y |
| `Math.sqrt(x)` | Square root of x |
| `Math.cbrt(x)` | Cube root of x |
| `Math.exp(x)` | e raised to the power x |
| `Math.log(x)` | Natural log of x |
| `Math.log2(x)` | Log base 2 of x |
| `Math.log10(x)` | Log base 10 of x |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math Power and Root Methods</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Math.pow(2, 3): " + Math.pow(2, 3) + "<br>" +
  "Math.sqrt(16): " + Math.sqrt(16) + "<br>" +
  "Math.cbrt(8): " + Math.cbrt(8) + "<br>" +
  "Math.exp(1): " + Math.exp(1).toFixed(4) + "<br>" +
  "Math.log(10): " + Math.log(10).toFixed(4) + "<br>" +
  "Math.log2(8): " + Math.log2(8) + "<br>" +
  "Math.log10(1000): " + Math.log10(1000);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-power_root/index.html)

## Math Trigonometry Methods

Reference for trigonometry methods:

| Method | Description |
|--------|-------------|
| `Math.sin(x)` | Sine of x (radians) |
| `Math.cos(x)` | Cosine of x (radians) |
| `Math.tan(x)` | Tangent of x (radians) |
| `Math.asin(x)` | Arcsine of x |
| `Math.acos(x)` | Arccosine of x |
| `Math.atan(x)` | Arctangent of x |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math Trigonometry Methods</h4>
<p id="demo"></p>

<script>
// Angle in radians: 90 degrees = PI/2
const angle = Math.PI / 2;

document.getElementById("demo").innerHTML =
  "sin(PI/2): " + Math.sin(angle).toFixed(2) + "<br>" +
  "cos(0): " + Math.cos(0).toFixed(2) + "<br>" +
  "tan(PI/4): " + Math.tan(Math.PI / 4).toFixed(2) + "<br><br>" +
  "asin(1): " + Math.asin(1).toFixed(2) + " rad<br>" +
  "acos(1): " + Math.acos(1).toFixed(2) + " rad<br>" +
  "atan(1): " + Math.atan(1).toFixed(2) + " rad";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-trigonometry/index.html)

## Math Utility Methods

Reference for utility methods:

| Method | Description |
|--------|-------------|
| `Math.abs(x)` | Absolute value of x |
| `Math.min(a, b, ...)` | Lowest value |
| `Math.max(a, b, ...)` | Highest value |
| `Math.random()` | Random number 0-1 |
| `Math.hypot(a, b)` | Square root of (a² + b²) |
| `Math.fround(x)` | Nearest 32-bit float |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math Utility Methods</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Math.abs(-7.5): " + Math.abs(-7.5) + "<br>" +
  "Math.min(3, 8, 1): " + Math.min(3, 8, 1) + "<br>" +
  "Math.max(3, 8, 1): " + Math.max(3, 8, 1) + "<br>" +
  "Math.random(): " + Math.random().toFixed(4) + "<br>" +
  "Math.hypot(3, 4): " + Math.hypot(3, 4) + " (3-4-5 triangle)<br>" +
  "Math.fround(1.5): " + Math.fround(1.5);
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-utility_methods/index.html)

## Document

Document in project

You can [Download PDF](js-math_reference.pdf) file.

## Reference

- [W3Schools JavaScript Math Reference](https://www.w3schools.com/js/js_math_reference.asp)