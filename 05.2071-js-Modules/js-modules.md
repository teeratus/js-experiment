# JavaScript Modules

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Modules](#javascript-modules)
  - [Module Files](#module-files)
    - [Example 1](#example-1)
  - [Export and Import](#export-and-import)
    - [Example 2](#example-2)
  - [Export Objects](#export-objects)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## What are Modules?

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

Modules are imported from external files with the `import` statement.

Modules also rely on `type="module"` in the `<script>` tag.

## Module Files

A module file exports functions or objects using the `export` keyword. The main file imports them using `import`:

**math.js** - Module file:

```javascript
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;
export const divide = (a, b) => a / b;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Modules</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Module Files</h4>
<p id="demo"></p>

<script type="module">
import { add, multiply } from './math.js';

document.getElementById("demo").innerHTML =
  "5 + 3 = " + add(5, 3) + "<br>" +
  "5 * 3 = " + multiply(5, 3);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-module_basics/index.html)

## Export and Import

You can export individual functions and import them by name:

**message.js** - Module file:

```javascript
export const greeting = "Hello";
export function welcome(name) {
  return greeting + ", " + name + "!";
}
export const farewell = (name) => "Goodbye, " + name + "!";
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Modules</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Export and Import</h4>
<p id="demo"></p>

<script type="module">
import { greeting, welcome, farewell } from './message.js';

document.getElementById("demo").innerHTML =
  greeting + "<br>" +
  welcome("John") + "<br>" +
  farewell("Jane");
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-export_import/index.html)

## Export Objects

You can export entire objects from a module:

**person.js** - Module file:

```javascript
export const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

export const cars = ["BMW", "Volvo", "Saab", "Ford"];
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Modules</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Export Objects</h4>
<p id="demo"></p>

<script type="module">
import { person, cars } from './person.js';

document.getElementById("demo").innerHTML =
  "Person: " + person.fullName() + "<br>" +
  "Age: " + person.age + "<br><br>" +
  "Cars: " + cars.join(", ");
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-export_objects/index.html)

## Document

Document in project

You can [Download PDF](js-modules.pdf) file.

## Reference

- [W3Schools JavaScript Modules](https://www.w3schools.com/js/js_modules.asp)