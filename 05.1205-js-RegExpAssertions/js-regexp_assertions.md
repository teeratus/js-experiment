# JavaScript RegExp Assertions

[Back to JS page](../index.html)

Table of Contents
- [JavaScript RegExp Assertions](#javascript-regexp-assertions)
  - [RegExp ^ Metacharacter](#regexp--metacharacter)
    - [Example 1](#example-1)
  - [RegExp $ Metacharacter](#regexp--metacharacter-1)
    - [Example 2](#example-2)
  - [The \b Metacharacter](#the-b-metacharacter)
    - [Example 3](#example-3)
  - [RegExp Lookahead x(?=y)](#regexp-lookahead-xy)
    - [Example 4](#example-4)
  - [Negative Lookahead x(?!y)](#negative-lookahead-xy)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## RegExp Assertions

Assertions are conditions that must be true at a position in the string:

| Assertion | Description |
|-----------|-------------|
| `^` | Matches the beginning of the string |
| `$` | Matches the end of the string |
| `\b` | Matches at a word boundary |
| `x(?=y)` | Lookahead: x only if followed by y |
| `x(?!y)` | Negative lookahead: x only if NOT followed by y |
| `(?<=y)x` | Lookbehind: x only if preceded by y |
| `(?<!y)x` | Negative lookbehind: x only if NOT preceded by y |

## RegExp ^ Metacharacter

`^` asserts the position at the start of the string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Assertions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp ^ Metacharacter</h4>
<p id="demo"></p>

<script>
const text = "Hello World, Hello Again";
const matches = text.match(/^Hello/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/^Hello/g): " + matches + "<br>" +
  "^ matches 'Hello' only at the start";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-start_metacharacter/index.html)

## RegExp $ Metacharacter

`$` asserts the position at the end of the string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Assertions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp $ Metacharacter</h4>
<p id="demo"></p>

<script>
const text = "Hello World, Hello";
const matches = text.match(/Hello$/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/Hello$/g): " + matches + "<br>" +
  "$ matches 'Hello' only at the end";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-end_metacharacter/index.html)

## The \b Metacharacter

`\b` asserts a word boundary - where a word starts or ends:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Assertions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The \b Metacharacter</h4>
<p id="demo"></p>

<script>
const text = "car cart scar";
const matches = text.match(/\bcar\b/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/\\bcar\\b/g): " + matches + "<br>" +
  "Finds 'car' as a whole word only";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-word_boundary/index.html)

## RegExp Lookahead x(?=y)

Lookahead matches `x` only if it is followed by `y`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Assertions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp Lookahead x(?=y)</h4>
<p id="demo"></p>

<script>
const text = "apple banana applepie";
const matches = text.match(/apple(?=pie)/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/apple(?=pie)/g): " + matches + "<br>" +
  "Matches 'apple' only when followed by 'pie'";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-lookahead/index.html)

## Negative Lookahead x(?!y)

Negative lookahead matches `x` only if it is NOT followed by `y`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Assertions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Negative Lookahead x(?!y)</h4>
<p id="demo"></p>

<script>
const text = "apple banana applepie";
const matches = text.match(/apple(?!pie)/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/apple(?!pie)/g): " + matches + "<br>" +
  "Matches 'apple' only when NOT followed by 'pie'";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-negative_lookahead/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_assertions.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Assertions](https://www.w3schools.com/js/js_regexp_assertions.asp)