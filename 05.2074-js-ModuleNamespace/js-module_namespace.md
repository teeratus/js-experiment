# JavaScript Module Namespace

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Module Namespace](#javascript-module-namespace)
  - [The Module Namespace Object](#the-module-namespace-object)
    - [Example 1](#example-1)
  - [Module Namespace Export](#module-namespace-export)
    - [Example 2](#example-2)
  - [Aggregator Scripts](#aggregator-scripts)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## The Module Namespace Object

A module namespace object is created when you import everything from a module using `import * as name`.

The namespace object contains all the exports from the module as properties:

**shapes.js** - Module file:

```javascript
export const circle = (r) => Math.PI * r * r;
export const square = (s) => s * s;
export const rectangle = (w, h) => w * h;
export const triangle = (b, h) => (b * h) / 2;
export const PI = Math.PI;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Namespace</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Module Namespace Object</h4>
<p id="demo"></p>

<script type="module">
import * as Shapes from './shapes.js';

document.getElementById("demo").innerHTML =
  "Circle area (r=5): " + Shapes.circle(5).toFixed(2) + "<br>" +
  "Square area (s=4): " + Shapes.square(4) + "<br>" +
  "Rectangle area (4x3): " + Shapes.rectangle(4, 3) + "<br>" +
  "Triangle area (6x2): " + Shapes.triangle(6, 2) + "<br>" +
  "PI: " + Shapes.PI.toFixed(4);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-namespace_object/index.html)

## Module Namespace Export

Namespace exports allow you to re-export everything from another module as a namespace:

**math_ops.js** - Individual math functions:

```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```

**utilities.js** - Aggregator that re-exports with namespace:

```javascript
export * as MathOps from './math_ops.js';
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Namespace</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Module Namespace Export</h4>
<p id="demo"></p>

<script type="module">
import { MathOps } from './utilities.js';

document.getElementById("demo").innerHTML =
  "MathOps.add(10, 5): " + MathOps.add(10, 5) + "<br>" +
  "MathOps.subtract(10, 5): " + MathOps.subtract(10, 5) + "<br>" +
  "MathOps.multiply(10, 5): " + MathOps.multiply(10, 5) + "<br>" +
  "MathOps.divide(10, 5): " + MathOps.divide(10, 5);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-namespace_export/index.html)

## Aggregator Scripts

Aggregator scripts combine multiple modules into a single import point using re-exports:

**string_utils.js** - String utility functions:

```javascript
export const toUpper = (s) => s.toUpperCase();
export const toLower = (s) => s.toLowerCase();
export const reverse = (s) => s.split("").reverse().join("");
```

**number_utils.js** - Number utility functions:

```javascript
export const isEven = (n) => n % 2 === 0;
export const isOdd = (n) => n % 2 !== 0;
export const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
```

**index.js** - Aggregator script that re-exports everything:

```javascript
export * from './string_utils.js';
export * from './number_utils.js';
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Namespace</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Aggregator Scripts</h4>
<p id="demo"></p>

<script type="module">
import { toUpper, reverse, isEven, factorial } from './index.js';

document.getElementById("demo").innerHTML =
  "toUpper('hello'): " + toUpper("hello") + "<br>" +
  "reverse('world'): " + reverse("world") + "<br>" +
  "isEven(7): " + isEven(7) + "<br>" +
  "factorial(5): " + factorial(5);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-aggregator/index.html)

## Document

Document in project

You can [Download PDF](js-module_namespace.pdf) file.

## Reference

- [W3Schools JavaScript Module Namespace](https://www.w3schools.com/js/js_modules_namespace.asp)