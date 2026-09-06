# JavaScript RegExp Methods

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript RegExp Methods](#javascript-regexp-methods)
  - [RegExp Object Methods](#regexp-object-methods)
    - [Example 1](#example-1)
  - [String Methods with RegExp](#string-methods-with-regexp)
    - [Example 2](#example-2)
  - [String.replace() and split()](#stringreplace-and-split)
    - [Example 3](#example-3)
  - [Pattern-Based Validation](#pattern-based-validation)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Complete RexExp Reference

The complete RegExp reference includes:

**RegExp Methods:**

| Method | Description |
|--------|-------------|
| `test()` | Tests for a match - returns true/false |
| `exec()` | Returns match details or null |

**String Methods using RegExp:**

| Method | Description |
|--------|-------------|
| `match(pattern)` | Returns array of matches |
| `matchAll(pattern)` | Returns iterator of matches |
| `replace(pattern, repl)` | Replaces matches |
| `search(pattern)` | Returns position of match |
| `split(pattern)` | Splits by pattern |

## RegExp Object Methods

`test()` and `exec()` are the two RegExp object methods:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp Object Methods</h4>
<p id="demo"></p>

<script>
const text = "Hello World";

// test() - returns boolean
const testResult = /World/.test(text);

// exec() - returns match object
const execResult = /World/.exec(text);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "test(/World/): " + testResult + "<br>" +
  "exec(/World/)[0]: " + execResult[0] + "<br>" +
  "exec() index: " + execResult.index;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-regexp_methods/index.html)

## String Methods with RegExp

String methods that work with RegExp patterns:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Methods with RegExp</h4>
<p id="demo"></p>

<script>
const text = "JavaScript is awesome, JavaScript!";

let output = "Text: " + text + "<br><br>";
output += "match(/JavaScript/g): " + text.match(/JavaScript/g) + "<br>";
output += "search(/awesome/): " + text.search(/awesome/) + "<br>";

// matchAll returns iterator
const iterator = text.matchAll(/JavaScript/g);
output += "matchAll: ";
for (let m of iterator) output += m[0] + " ";

document.getElementById("demo").innerHTML = output;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-string_methods/index.html)

## String.replace() and split()

`replace()` replaces matches. `split()` splits strings by a pattern:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String.replace() and split()</h4>
<p id="demo"></p>

<script>
const text = "Hello 123 World";

// replace() with RegExp
const replaced = text.replace(/\d+/, "NUMBERS");

// split() with RegExp
const parts = text.split(/\s+/);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "replace(/\\d+/, 'NUMBERS'): " + replaced + "<br>" +
  "split(/\\s+/): " + parts;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-replace_split/index.html)

## Pattern-Based Validation

Combine RegExp methods for practical form validation:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Pattern-Based Validation</h4>
<p id="demo"></p>

<script>
// Email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation pattern
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

let output = "Email: john@example.com → ";
output += emailPattern.test("john@example.com") ? "✓ Valid" : "✗ Invalid";
output += "<br>";

output += "Email: invalid → ";
output += emailPattern.test("invalid") ? "✓ Valid" : "✗ Invalid";
output += "<br><br>";

output += "Phone: 555-123-4567 → ";
output += phonePattern.test("555-123-4567") ? "✓ Valid" : "✗ Invalid";
output += "<br>";

output += "Phone: 5551234567 → ";
output += phonePattern.test("5551234567") ? "✓ Valid" : "✗ Invalid";

document.getElementById("demo").innerHTML = output;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-validation/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_methods.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Methods](https://www.w3schools.com/js/js_regexp_methods.asp)