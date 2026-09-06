# JavaScript Math

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Math](#javascript-math)
  - [Math Properties (Constants)](#math-properties-constants)
    - [Example 1](#example-1)
  - [Number to Integer](#number-to-integer)
    - [Example 2](#example-2)
  - [Math.pow() and Math.sqrt()](#mathpow-and-mathsqrt)
    - [Example 3](#example-3)
  - [Math.min() and Math.max()](#mathmin-and-mathmax)
    - [Example 4](#example-4)
  - [Math.random()](#mathrandom)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Math Properties (Constants)

The `Math` object provides mathematical constants as properties:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math Properties (Constants)</h4>
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

**Result** [View Example](ex1-math_constants/index.html)

## Number to Integer

Methods to convert numbers to integers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Number to Integer</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Math.round(4.6): " + Math.round(4.6) + " (nearest)<br>" +
  "Math.ceil(4.2): " + Math.ceil(4.2) + " (up)<br>" +
  "Math.floor(4.8): " + Math.floor(4.8) + " (down)<br>" +
  "Math.trunc(4.7): " + Math.trunc(4.7) + " (remove decimals)<br>" +
  "Math.sign(-5): " + Math.sign(-5) + " (-1, 0, or 1)<br>" +
  "Math.abs(-7.5): " + Math.abs(-7.5) + " (absolute value)";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-integer_methods/index.html)

## Math.pow() and Math.sqrt()

Power and square root functions:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math.pow() and Math.sqrt()</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Math.pow(2, 3): " + Math.pow(2, 3) + " (2³)<br>" +
  "Math.pow(5, 2): " + Math.pow(5, 2) + " (5²)<br>" +
  "Math.pow(3, 4): " + Math.pow(3, 4) + " (3⁴)<br><br>" +
  "Math.sqrt(16): " + Math.sqrt(16) + "<br>" +
  "Math.sqrt(81): " + Math.sqrt(81) + "<br>" +
  "Math.sqrt(2): " + Math.sqrt(2).toFixed(4);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-pow_sqrt/index.html)

## Math.min() and Math.max()

Find the lowest and highest values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math.min() and Math.max()</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Math.min(5, 10, 3, 8): " + Math.min(5, 10, 3, 8) + "<br>" +
  "Math.max(5, 10, 3, 8): " + Math.max(5, 10, 3, 8) + "<br><br>" +
  "Math.min(-5, 0, -10): " + Math.min(-5, 0, -10) + "<br>" +
  "Math.max(-5, 0, -10): " + Math.max(-5, 0, -10);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-min_max/index.html)

## Math.random()

`Math.random()` returns a random number between 0 (inclusive) and 1 (exclusive):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math.random()</h4>
<p id="demo"></p>

<script>
let text = "Random numbers:<br><br>";

for (let i = 0; i < 3; i++) {
  text += Math.random() + "<br>";
}

text += "<br>Random integer 1-10: " + 
  Math.floor(Math.random() * 10) + 1;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-random/index.html)

## Document

Document in project

You can [Download PDF](js-math.pdf) file.

## Reference

- [W3Schools JavaScript Math](https://www.w3schools.com/js/js_math.asp)