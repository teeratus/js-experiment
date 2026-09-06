# JavaScript Conditions

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Conditions](#javascript-conditions)
  - [The if Statement](#the-if-statement)
    - [Example 1](#example-1)
  - [The else Statement](#the-else-statement)
    - [Example 2](#example-2)
  - [The else if Statement](#the-else-if-statement)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## The if Statement

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is `true`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Conditions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The if Statement</h4>
<p id="demo"></p>

<script>
let hour = 12;
if (hour < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-if_statement/index.html)

## The else Statement

Use the `else` statement to specify a block of code to be executed if a condition is `false`.

If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Conditions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The else Statement</h4>
<p id="demo"></p>

<script>
let hour = 20;
if (hour < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
} else {
  document.getElementById("demo").innerHTML = "Good evening!";
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-else_statement/index.html)

## The else if Statement

Use the `else if` statement to specify a new condition if the first condition is `false`.

If time is less than 10:00, create a "Good morning" greeting, if not but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Conditions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The else if Statement</h4>
<p id="demo"></p>

<script>
let time = 14;
if (time < 10) {
  document.getElementById("demo").innerHTML = "Good morning!";
} else if (time < 20) {
  document.getElementById("demo").innerHTML = "Good day!";
} else {
  document.getElementById("demo").innerHTML = "Good evening!";
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-else_if_statement/index.html)

## Document

Document in project

You can [Download PDF](js-conditions.pdf) file.

## Reference

- [W3Schools JavaScript Conditions](https://www.w3schools.com/js/js_if_else.asp)