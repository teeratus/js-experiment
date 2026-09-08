# JavaScript RegExp Meta Characters

[Back to JS page](../index.html)

Table of Contents
- [JavaScript RegExp Meta Characters](#javascript-regexp-meta-characters)
  - [RegExp \d (digits) Metacharacter](#regexp-d-digits-metacharacter)
    - [Example 1](#example-1)
  - [RegExp \D Metacharacter](#regexp-d-metacharacter)
    - [Example 2](#example-2)
  - [RegExp \w (word) Metacharacter](#regexp-w-word-metacharacter)
    - [Example 3](#example-3)
  - [The \s (space) Metacharacter](#the-s-space-metacharacter)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Regular Expression Metacharacters

Metacharacters are characters with special meanings in regular expressions:

| Metacharacter | Description |
|---------------|-------------|
| `\d` | Find a digit (0-9) |
| `\D` | Find a non-digit |
| `\w` | Find a word character (letter, digit, underscore) |
| `\W` | Find a non-word character |
| `\s` | Find a whitespace character |
| `\S` | Find a non-whitespace character |
| `\xhh` | Find a character by hexadecimal value |
| `\uhhhh` | Find a Unicode character |

## RegExp \d (digits) Metacharacter

`\d` matches any digit character (0-9):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Meta Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp \d (digits) Metacharacter</h4>
<p id="demo"></p>

<script>
const text = "Phone: 123-456-7890";
const matches = text.match(/\d/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/\\d/g): " + matches + "<br>" +
  "Finds all digits (0-9)";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-d_metacharacter/index.html)

## RegExp \D Metacharacter

`\D` matches any character that is NOT a digit:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Meta Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp \D Metacharacter</h4>
<p id="demo"></p>

<script>
const text = "Phone: 123-456";
const matches = text.match(/\D/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/\\D/g): " + matches.join("") + "<br>" +
  "Finds all non-digit characters";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-D_metacharacter/index.html)

## RegExp \w (word) Metacharacter

`\w` matches any word character (letters, digits, and underscore). `\W` is the opposite:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Meta Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp \w (word) Metacharacter</h4>
<p id="demo"></p>

<script>
const text = "Hello_world 123!";
const words = text.match(/\w+/g);
const nonWords = text.match(/\W/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/\\w+/g): " + words + "<br>" +
  "match(/\\W/g): " + nonWords;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-w_metacharacter/index.html)

## The \s (space) Metacharacter

`\s` matches any whitespace character (spaces, tabs, newlines):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Meta Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The \s (space) Metacharacter</h4>
<p id="demo"></p>

<script>
const text = "Hello World!";
const spaces = text.match(/\s/g);
const noSpaces = text.match(/\S/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/\\s/g): " + spaces + " (" + spaces.length + " spaces)<br>" +
  "match(/\\S/g): " + noSpaces.join("");
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-s_metacharacter/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_metacharacters.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Meta Characters](https://www.w3schools.com/js/js_regexp_meta_characters.asp)