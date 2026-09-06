# JavaScript Strings

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Strings](#javascript-strings)
  - [Using Quotes](#using-quotes)
    - [Example 1](#example-1)
  - [Quotes Inside Quotes](#quotes-inside-quotes)
    - [Example 2](#example-2)
  - [String Length](#string-length)
    - [Example 3](#example-3)
  - [Escape Characters](#escape-characters)
    - [Example 4](#example-4)
  - [Breaking Long Lines](#breaking-long-lines)
    - [Example 5](#example-5)
  - [Template Strings](#template-strings)
    - [Example 6](#example-6)
  - [JavaScript Strings as Objects](#javascript-strings-as-objects)
    - [Example 7](#example-7)
  - [Document](#document)
  - [Reference](#reference)


## Using Quotes

A JavaScript string is zero or more characters written inside quotes.

You can use single or double quotes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Quotes</h4>
<p id="demo"></p>

<script>
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';
document.getElementById("demo").innerHTML =
  carName1 + "<br>" + carName2;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-using_quotes/index.html)

## Quotes Inside Quotes

You can use quotes inside a string, as long as they don't match the surrounding quotes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Quotes Inside Quotes</h4>
<p id="demo"></p>

<script>
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
document.getElementById("demo").innerHTML =
  answer1 + "<br>" + answer2 + "<br>" + answer3;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-quotes_inside_quotes/index.html)

## String Length

The `length` property returns the length of a string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Length</h4>
<p id="demo"></p>

<script>
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = "Length: " + text.length;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-string_length/index.html)

## Escape Characters

The backslash escape character `\` turns special characters into string characters:

| Code | Result |
|------|--------|
| `\'` | `'` |
| `\"` | `"` |
| `\\` | `\` |
| `\n` | new line |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Escape Characters</h4>
<p id="demo"></p>

<script>
let text = "We are the so-called \"Vikings\" from the north.";
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-escape_characters/index.html)

## Breaking Long Lines

For best readability, programmers often like to avoid code lines longer than 80 characters. You can break up a code line within a text string with a single backslash:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Breaking Long Lines</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-breaking_long_lines/index.html)

## Template Strings

Template strings use backticks (`` ` ``) instead of quotes to define a string.

With template strings you can use both single and double quotes inside a string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Template Strings</h4>
<p id="demo"></p>

<script>
let text = `He's often called "Johnny"`;
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-template_strings/index.html)

## JavaScript Strings as Objects

Normally, JavaScript strings are primitive values, created from literals.

But strings can also be defined as objects with the keyword `new`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Strings as Objects</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
let x = "John";
let y = new String("John");
document.getElementById("demo1").innerHTML = typeof x + "<br>" + typeof y;
document.getElementById("demo2").innerHTML = "x === y is " + (x === y);
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-strings_objects/index.html)

## Document

Document in project

You can [Download PDF](js-strings.pdf) file.

## Reference

- [W3Schools JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)