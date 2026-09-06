# JavaScript Strict Mode

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Strict Mode](#javascript-strict-mode)
  - [Declaring Strict Mode](#declaring-strict-mode)
    - [Example 1](#example-1)
  - [Why Strict Mode?](#why-strict-mode)
    - [Example 2](#example-2)
  - [Not Allowed in Strict Mode](#not-allowed-in-strict-mode)
    - [Example 3](#example-3)
  - [Watch Out!](#watch-out)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## The "use strict" Directive

The `"use strict"` directive was introduced in ECMAScript 5. It is **not a statement**, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of `"use strict"` is to indicate that the code should be executed in **strict mode**. With strict mode, you cannot, for example, use undeclared variables.

## Declaring Strict Mode

Strict mode is declared by adding `"use strict";` to the beginning of a script or a function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strict Mode</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Declaring Strict Mode</h4>
<p id="demo"></p>

<script>
// Declare strict mode at the top of the script
"use strict";

// This works fine in strict mode (declared variable)
let carName = "Volvo";
document.getElementById("demo").innerHTML =
  "carName: " + carName + "<br>" +
  "Strict mode is active at script level";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-declare_strict/index.html)

## Why Strict Mode?

Strict mode helps you write cleaner code by catching common coding mistakes and "unsafe" actions:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strict Mode</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Why Strict Mode?</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Without strict mode - undeclared variable is silently created
function nonStrict() {
  undeclaredVar = 42;  // No error (bad!)
}
nonStrict();
document.getElementById("demo1").innerHTML =
  "Non-strict: undeclaredVar = " + undeclaredVar + " (silently created)";

// With strict mode - undeclared variable causes an error
function strictFunction() {
  "use strict";
  try {
    undeclaredVar2 = 99;  // Throws ReferenceError in strict mode
  } catch(err) {
    document.getElementById("demo2").innerHTML =
      "Strict mode error: " + err.message;
  }
}
strictFunction();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-why_strict/index.html)

## Not Allowed in Strict Mode

Strict mode prevents several unsafe actions:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strict Mode</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Not Allowed in Strict Mode</h4>
<p id="demo"></p>

<script>
"use strict";

let text = "<b>Not allowed in strict mode:</b><br><br>";
text += "1. Using undeclared variables (ReferenceError)<br>";
text += "2. Deleting variables (SyntaxError)<br>";
text += "3. Duplicating parameters (SyntaxError)<br>";
text += "4. Using reserved words as names<br>";
text += "5. Octal numeric literals<br>";
text += "6. Writing to read-only properties<br><br>";

// Example: writing to read-only property
try {
  const obj = {};
  Object.defineProperty(obj, "readonly", {value: 10, writable: false});
  obj.readonly = 20;  // TypeError in strict mode
  text += "Read-only property write: no error (non-strict behavior)";
} catch(err) {
  text += "Read-only property error: " + err.message;
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-not_allowed/index.html)

## Watch Out!

Strict mode only applies to the code where it is declared. If you declare it inside a function, it only applies to that function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strict Mode</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Watch Out!</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Strict mode is NOT active here (global scope without directive)

// Function with strict mode - only affects this function
function strictFunction() {
  "use strict";
  try {
    undeclaredVar = 100; // Error in strict mode
  } catch(err) {
    document.getElementById("demo1").innerHTML =
      "Inside strict function: " + err.message;
  }
}

// Function WITHOUT strict mode - affected by global non-strict
function nonStrictFunction() {
  undeclaredVar2 = 200; // No error (non-strict)
  document.getElementById("demo2").innerHTML =
    "Outside strict function (global): undeclaredVar2 = " + undeclaredVar2 + "<br>" +
    "Strict mode only applies where it is declared";
}

strictFunction();
nonStrictFunction();
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-watch_out/index.html)

## Document

Document in project

You can [Download PDF](js-strict_mode.pdf) file.

## Reference

- [W3Schools JavaScript Strict Mode](https://www.w3schools.com/js/js_strict.asp)