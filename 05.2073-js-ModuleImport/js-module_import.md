# JavaScript Module Import

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Module Import](#javascript-module-import)
  - [Named Imports](#named-imports)
    - [Example 1](#example-1)
  - [Default Import](#default-import)
    - [Example 2](#example-2)
  - [Default + Named Import](#default--named-import)
    - [Example 3](#example-3)
  - [Importing All](#importing-all)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Named Imports

Named imports use curly braces `{}` and must match the exported name exactly. You can import multiple items:

**utils.js** - Module file:

```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
export const PI = 3.14159;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Import</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Named Imports</h4>
<p id="demo"></p>

<script type="module">
import { add, multiply, PI } from './utils.js';

document.getElementById("demo").innerHTML =
  "add(10, 5) = " + add(10, 5) + "<br>" +
  "multiply(10, 5) = " + multiply(10, 5) + "<br>" +
  "PI = " + PI;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-named_imports/index.html)

## Default Import

Default imports don't need curly braces. You can name the import anything you want:

**greet.js** - Module file:

```javascript
export default function(name) {
  return "Hello " + name + "!";
}
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Import</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Default Import</h4>
<p id="demo"></p>

<script type="module">
import sayHello from './greet.js';

document.getElementById("demo").innerHTML =
  sayHello("John") + "<br>" +
  sayHello("Jane");
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-default_import/index.html)

## Default + Named Import

You can import both default and named exports in a single statement:

**calc.js** - Module file:

```javascript
export default function(a, b) {
  return a + b;
}

export const square = (x) => x * x;
export const cube = (x) => x * x * x;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Import</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Default + Named Import</h4>
<p id="demo"></p>

<script type="module">
import myAdd, { square, cube } from './calc.js';

document.getElementById("demo").innerHTML =
  "Default (add): 10 + 5 = " + myAdd(10, 5) + "<br>" +
  "square(5) = " + square(5) + "<br>" +
  "cube(3) = " + cube(3);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-default_named/index.html)

## Importing All

Use `*` to import everything from a module as a namespace object:

**colors.js** - Module file:

```javascript
export const red = "#FF0000";
export const green = "#00FF00";
export const blue = "#0000FF";
export const white = "#FFFFFF";
export const black = "#000000";
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Module Import</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Importing All</h4>
<p id="demo"></p>

<script type="module">
import * as Colors from './colors.js';

document.getElementById("demo").innerHTML =
  "Red: " + Colors.red + "<br>" +
  "Green: " + Colors.green + "<br>" +
  "Blue: " + Colors.blue + "<br>" +
  "White: " + Colors.white + "<br>" +
  "Black: " + Colors.black;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-import_all/index.html)

## Document

Document in project

You can [Download PDF](js-module_import.pdf) file.

## Reference

- [W3Schools JavaScript Module Import](https://www.w3schools.com/js/js_modules_import.asp)