# JavaScript RegExp Objects

[Back to JS page](../index.html)

Table of Contents
- [JavaScript RegExp Objects](#javascript-regexp-objects)
  - [The RegExp Object](#the-regexp-object)
    - [Example 1](#example-1)
  - [Using test()](#using-test)
    - [Example 2](#example-2)
  - [Using exec()](#using-exec)
    - [Example 3](#example-3)
  - [The RegExp.escape() Method](#the-regexpescape-method)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## The RegExp Object

The `RegExp` object is used to search for patterns in strings. It can be created with literal syntax `/pattern/` or `new RegExp()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The RegExp Object</h4>
<p id="demo"></p>

<script>
// Literal syntax
const pattern1 = /hello/;

// Constructor syntax
const pattern2 = new RegExp("hello");

let text = "Literal pattern: " + pattern1 + "<br>";
text += "Constructor pattern: " + pattern2 + "<br><br>";
text += "Both are RegExp objects: " + (pattern1 instanceof RegExp) + "<br>";
text += "with global flag: " + /hello/g.global;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-regexp_object/index.html)

## Using test()

The `test()` method searches a string for a pattern match. It returns `true` or `false`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using test()</h4>
<p id="demo"></p>

<script>
const text = "The rain in Spain";

// test() returns boolean
const result1 = /ain/.test(text);
const result2 = /xyz/.test(text);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "test(/ain/): " + result1 + " (found)<br>" +
  "test(/xyz/): " + result2 + " (not found)<br><br>" +
  "test() returns true or false";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-test/index.html)

## Using exec()

The `exec()` method searches for a match and returns the match details (or `null`):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using exec()</h4>
<p id="demo"></p>

<script>
const text = "The rain in Spain";

// exec() returns match details
const result = /ain/.exec(text);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "exec(/ain/):<br>" +
  "match[0]: " + result[0] + "<br>" +
  "index: " + result.index + "<br>" +
  "input: " + result.input;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-exec/index.html)

## The RegExp.escape() Method

`RegExp.escape()` escapes special characters in a string so it can be used as a literal pattern:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The RegExp.escape() Method</h4>
<p id="demo"></p>

<script>
let text = "";

if (RegExp.escape) {
  // Escape special characters
  const escaped = RegExp.escape("a.b*c");
  text += "RegExp.escape('a.b*c'): " + escaped + "<br><br>";
  
  // Use escaped pattern to match literal dots and stars
  const result = "a.b*c".match(new RegExp(escaped));
  text += "Matching literal 'a.b*c': " + result[0];
} else {
  text += "RegExp.escape() is not supported in this browser yet.";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-escape/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_objects.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Objects](https://www.w3schools.com/js/js_regexp_objects.asp)