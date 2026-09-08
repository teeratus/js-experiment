# JavaScript Module Export

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Module Export](#javascript-module-export)
  - [Named Exports](#named-exports)
    - [Example 1](#example-1)
  - [Default Exports](#default-exports)
    - [Example 2](#example-2)
  - [Combining Default + Named](#combining-default--named)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## The Export Keyword

The `export` keyword is used to export functions, objects, or primitive values from a module file so they can be used in other files with the `import` keyword.

There are two types of exports: **Named Exports** and **Default Exports**.

## Named Exports

Named exports allow you to export multiple items from a module. The import must use the exact same name:

**math.js** - Module file with named exports:

```javascript
export const square = (x) => x * x;
export const cube = (x) => x * x * x;
export const double = (x) => x * 2;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Export</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Named Exports</h4>
<p id="demo"></p>

<script type="module">
import { square, cube, double } from './math.js';

document.getElementById("demo").innerHTML =
  "square(5) = " + square(5) + "<br>" +
  "cube(3) = " + cube(3) + "<br>" +
  "double(10) = " + double(10);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-named_exports/index.html)

## Default Exports

A module can have one default export. Default exports don't need curly braces when importing, and can be imported with any name:

**message.js** - Module file with default export:

```javascript
const greet = (name) => "Hello, " + name + "!";
export default greet;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Export</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Default Exports</h4>
<p id="demo"></p>

<script type="module">
import myGreeting from './message.js';

document.getElementById("demo").innerHTML =
  myGreeting("John") + "<br>" +
  myGreeting("Jane");
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-default_export/index.html)

## Combining Default + Named

You can combine default and named exports in the same module:

**toolbox.js** - Module file with both default and named exports:

```javascript
export default function(a, b) {
  return a + b;
}

export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Export</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Combining Default + Named</h4>
<p id="demo"></p>

<script type="module">
import myAdd, { subtract, multiply } from './toolbox.js';

document.getElementById("demo").innerHTML =
  "Default (add): 10 + 5 = " + myAdd(10, 5) + "<br>" +
  "Named (subtract): 10 - 5 = " + subtract(10, 5) + "<br>" +
  "Named (multiply): 10 * 5 = " + multiply(10, 5);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-combined_exports/index.html)

## Document

Document in project

You can [Download PDF](js-module_export.pdf) file.

## Reference

- [W3Schools JavaScript Module Export](https://www.w3schools.com/js/js_modules_export.asp)