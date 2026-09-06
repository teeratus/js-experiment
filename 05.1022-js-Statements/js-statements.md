# JavaScript Statements

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Statements](#javascript-statements)
  - [JavaScript Programs](#javascript-programs)
  - [JavaScript Statements](#javascript-statements)
    - [Example 1](#example-1)
  - [Semicolons](#semicolons)
    - [Example 2](#example-2)
  - [JavaScript White Space](#javascript-white-space)
  - [JavaScript Line Length and Line Breaks](#javascript-line-length-and-line-breaks)
    - [Example 3](#example-3)
  - [JavaScript Code Blocks](#javascript-code-blocks)
    - [Example 4](#example-4)
  - [JavaScript Keywords](#javascript-keywords)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Programs

A **computer program** is a list of "instructions" to be "executed" by a computer.

These programming instructions are called **statements**.

Most JavaScript programs contain many statements.

The statements are executed, one by one, in the same order as they are written.

In HTML, JavaScript programs are executed by the web browser.

## JavaScript Statements

JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Statements</h4>
<p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>
<p id="demo"></p>

<script>
let x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById("demo").innerHTML = "The value of z is " + z + ".";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-statements/index.html)

## Semicolons

Semicolons separate JavaScript statements.

Add a semicolon at the end of each executable statement:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Semicolons</h4>
<p>Multiple statements on one line are allowed when separated by semicolons:</p>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo1").innerHTML = "Value of a is " + a + ";";
document.getElementById("demo2").innerHTML = "Value of b is " + b + ";";
document.getElementById("demo3").innerHTML = "Value of c is " + c + ";";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-semicolons/index.html)

## JavaScript White Space

JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.

The following lines are equivalent:

```javascript
let person = "Hege";
let person="Hege";
```

A good practice is to put spaces around operators (`=` `+` `-` `*` `/`).

## JavaScript Line Length and Line Breaks

For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Line Length and Line Breaks</h4>
<p>The best place to break a code line is after an operator:</p>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"Hello Dolly!";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-line_breaks/index.html)

## JavaScript Code Blocks

JavaScript statements can be grouped together in code blocks, inside curly brackets `{...}`.

The purpose of code blocks is to define statements to be executed together.

One place you will find statements grouped together in blocks is in JavaScript functions:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Code Blocks</h4>
<p>JavaScript code blocks are used to group statements together.</p>
<button type="button" onclick="myFunction()">Click Me!</button>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-code_blocks/index.html)

## JavaScript Keywords

JavaScript statements often start with a **keyword** to identify the JavaScript action to be performed.

Here is a list of some of the keywords you will learn about in this tutorial:

| Keyword | Description |
|---------|-------------|
| `let` | Declares a variable |
| `const` | Declares a constant |
| `if` | Marks a block of statements to be executed on a condition |
| `switch` | Marks a block of statements to be executed in different cases |
| `function` | Declares a function |
| `return` | Exits a function |
| `for` | Marks a block of statements to be executed in a loop |
| `while` | Marks a block of statements to be executed in a loop |

JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

## Document

Document in project

You can [Download PDF](js-statements.pdf) file.

## Reference

- [W3Schools JavaScript Statements](https://www.w3schools.com/js/js_statements.asp)