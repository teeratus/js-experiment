# JavaScript RegExp Characters

[Back to JS page](../index.html)

Table of Contents
- [JavaScript RegExp Characters](#javascript-regexp-characters)
  - [Character Class [HW]](#character-class-hw)
    - [Example 1](#example-1)
  - [Character Range [A-Z]](#character-range-a-z)
    - [Example 2](#example-2)
  - [Character Class [1234]](#character-class-1234)
    - [Example 3](#example-3)
  - [Character Range [1-4]](#character-range-1-4)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## RegExp Character Classes

Character classes match any one of the characters inside square brackets `[...]`.

## Character Class [HW]

`[HW]` matches any single character in the set H or W:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Character Class [HW]</h4>
<p id="demo"></p>

<script>
const text = "HELLO world";
const matches = text.match(/[HW]/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/[HW]/g): " + matches + "<br>" +
  "Matches any H or W character";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-hw_class/index.html)

## Character Range [A-Z]

`[A-Z]` matches any uppercase letter from A to Z:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Character Range [A-Z]</h4>
<p id="demo"></p>

<script>
const text = "Hello World 123";
const matches = text.match(/[A-Z]/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/[A-Z]/g): " + matches + "<br>" +
  "Matches any uppercase letter";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-a-z_range/index.html)

## Character Class [1234]

`[1234]` matches any single digit in the set 1, 2, 3, or 4:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Character Class [1234]</h4>
<p id="demo"></p>

<script>
const text = "123456789";
const matches = text.match(/[1234]/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/[1234]/g): " + matches + "<br>" +
  "Matches digits 1, 2, 3, or 4 only";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-1234_class/index.html)

## Character Range [1-4]

`[1-4]` matches any digit from 1 to 4 (same as [1234] but using a range):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Characters</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Character Range [1-4]</h4>
<p id="demo"></p>

<script>
const text = "123456789";
const matches = text.match(/[1-4]/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/[1-4]/g): " + matches + "<br>" +
  "Range syntax = same as [1234]";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-1-4_range/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_characters.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Characters](https://www.w3schools.com/js/js_regexp_characters.asp)