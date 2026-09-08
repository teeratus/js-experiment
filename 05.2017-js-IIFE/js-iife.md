# JavaScript IIFE

[Back to JS page](../index.html)

Table of Contents
- [JavaScript IIFE](#javascript-iife)
  - [What Is an IIFE?](#what-is-an-iife)
    - [Example 1](#example-1)
  - [Avoid Polluting the Global Scope](#avoid-polluting-the-global-scope)
    - [Example 2](#example-2)
  - [IIFE with Parameters](#iife-with-parameters)
    - [Example 3](#example-3)
  - [IIFE with Return Value](#iife-with-return-value)
    - [Example 4](#example-4)
  - [Arrow Function IIFE](#arrow-function-iife)
    - [Example 5](#example-5)
  - [IIFE as a Module (Private Variables)](#iife-as-a-module-private-variables)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## What Is an IIFE?

An **IIFE** (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript IIFE</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What Is an IIFE?</h4>
<p id="demo"></p>

<script>
(function() {
  document.getElementById("demo").innerHTML = "IIFE executed!";
})();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-what_is_iife/index.html)

## Avoid Polluting the Global Scope

IIFEs are commonly used to avoid polluting the global namespace. Variables declared inside an IIFE are not accessible outside:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript IIFE</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Avoid Polluting the Global Scope</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
(function() {
  let privateVar = "This is private";
  document.getElementById("demo1").innerHTML = "Inside IIFE: " + privateVar;
})();

// privateVar is NOT accessible here (would cause error)
document.getElementById("demo2").innerHTML = "Outside IIFE: privateVar is not accessible";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-avoid_global_scope/index.html)

## IIFE with Parameters

IIFEs can accept arguments, just like regular functions:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript IIFE</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>IIFE with Parameters</h4>
<p id="demo"></p>

<script>
(function(name, age) {
  document.getElementById("demo").innerHTML = "Hello " + name + ", you are " + age + " years old.";
})("John", 30);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-iife_parameters/index.html)

## IIFE with Return Value

An IIFE can return a value that is assigned to a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript IIFE</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>IIFE with Return Value</h4>
<p id="demo"></p>

<script>
let result = (function() {
  let x = 5;
  let y = 10;
  return x * y;
})();

document.getElementById("demo").innerHTML = "Result: " + result;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-iife_return/index.html)

## Arrow Function IIFE

IIFEs can also be written using arrow function syntax:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript IIFE</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arrow Function IIFE</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Arrow function IIFE
(() => {
  document.getElementById("demo1").innerHTML = "Arrow IIFE executed!";
})();

// Arrow function IIFE with parameter
((message) => {
  document.getElementById("demo2").innerHTML = "Message: " + message;
})("Hello from arrow IIFE!");
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-arrow_iife/index.html)

## IIFE as a Module (Private Variables)

IIFEs can be used to create modules with private variables and public methods:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript IIFE</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>IIFE as a Module</h4>
<p id="demo"></p>

<script>
const counterModule = (function() {
  let count = 0;  // private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
})();

document.getElementById("demo").innerHTML =
  "Initial: " + counterModule.getCount() + "<br>" +
  "After increment: " + counterModule.increment() + "<br>" +
  "After increment: " + counterModule.increment() + "<br>" +
  "After decrement: " + counterModule.decrement();
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-iife_module/index.html)

## Document

Document in project

You can [Download PDF](js-iife.pdf) file.

## Reference

- [W3Schools JavaScript IIFE](https://www.w3schools.com/js/js_function_IIFE.asp)