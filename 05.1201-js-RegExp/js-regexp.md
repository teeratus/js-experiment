# JavaScript RegExp

[Back to JS page](../index.html)

Table of Contents
- [JavaScript RegExp](#javascript-regexp)
  - [Regular Expression Syntax](#regular-expression-syntax)
    - [Example 1](#example-1)
  - [Using String Methods](#using-string-methods)
    - [Example 2](#example-2)
  - [JavaScript Regex Flags](#javascript-regex-flags)
    - [Example 3](#example-3)
  - [RegExp Metacharacters](#regexp-metacharacters)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Regular Expression Syntax

A regular expression is a sequence of characters that forms a search pattern. It is written between slashes `/pattern/`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Regular Expression Syntax</h4>
<p id="demo"></p>

<script>
const text = "The rain in Spain falls mainly in the plain";

// Search for "ain" using a regular expression
const pattern = /ain/;

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "Pattern: /ain/<br>" +
  "match() result: " + text.match(pattern);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-syntax/index.html)

## Using String Methods

Regular expressions are commonly used with string methods: `match()`, `replace()`, and `search()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using String Methods</h4>
<p id="demo"></p>

<script>
const text = "Visit W3Schools";

// match() - returns matches
const matchResult = text.match(/W3Schools/);

// replace() - replaces matches
const replaceResult = text.replace(/Visit/, "Welcome to");

// search() - returns position
const searchResult = text.search(/W3Schools/);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/W3Schools/): " + matchResult + "<br>" +
  "replace(/Visit/, 'Welcome to'): " + replaceResult + "<br>" +
  "search(/W3Schools/): " + searchResult + " (position)";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-string_methods/index.html)

## JavaScript Regex Flags

Flags modify how the pattern is searched:

| Flag | Description |
|------|-------------|
| `/g` | Global - matches all occurrences |
| `/i` | Insensitive - case insensitive |
| `/m` | Multiline - ^ and $ match line breaks |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Regex Flags</h4>
<p id="demo"></p>

<script>
const text = "The rain in Spain";

// Without /g - only first match
const noG = text.match(/ain/);

// With /g - all matches
const withG = text.match(/ain/g);

// With /i - case insensitive
const withI = text.match(/THE/i);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/ain/): " + noG + " (first only)<br>" +
  "match(/ain/g): " + withG + " (all occurrences)<br>" +
  "match(/THE/i): " + withI + " (case insensitive)";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-flags/index.html)

## RegExp Metacharacters

Metacharacters have special meanings in regular expressions:

| Metacharacter | Description |
|---------------|-------------|
| `\d` | Find a digit |
| `\s` | Find a whitespace |
| `\w` | Find a word character |
| `.` | Find a single character |
| `\b` | Find at word boundary |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp Metacharacters</h4>
<p id="demo"></p>

<script>
const text = "Give 100% and 25% effort";

// \d finds digits
const digits = text.match(/\d/g);

// \w finds word characters
const words = text.match(/\w+/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/\\d/g) digits: " + digits + "<br>" +
  "match(/\\w+/g) words: " + words;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-metacharacters/index.html)

## Document

Document in project

You can [Download PDF](js-regexp.pdf) file.

## Reference

- [W3Schools JavaScript RegExp](https://www.w3schools.com/js/js_regexp.asp)