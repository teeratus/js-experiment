# JavaScript Syntax 111

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Syntax](#javascript-syntax)
  - [JavaScript Values](#javascript-values)
  - [JavaScript Literals](#javascript-literals)
    - [Example 1](#example-1)
  - [JavaScript Variables](#javascript-variables)
    - [Example 2](#example-2)
  - [JavaScript Identifiers](#javascript-identifiers)
  - [JavaScript Operators](#javascript-operators)
    - [Example 3](#example-3)
  - [JavaScript Expressions](#javascript-expressions)
    - [Example 4](#example-4)
  - [JavaScript is Case Sensitive](#javascript-is-case-sensitive)
    - [Example 5](#example-5)
  - [JavaScript and Camel Case](#javascript-and-camel-case)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Values

The JavaScript syntax defines two types of values:

- **Fixed values** are called **Literals**.
- **Variable values** are called **Variables**.

## JavaScript Literals

The most important syntax rules for **literals** (fixed values) are:

**Numbers** are written with or without decimals:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Numbers</h4>
<p>Number can be written with or without decimals:</p>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
document.getElementById("demo1").innerHTML = 10.50;
document.getElementById("demo2").innerHTML = 1001;
</script>

</body>
</html>
```

![](images/p1.png)

**Strings** are text, written within double or single quotes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Strings</h4>
<p>Strings can be written with double or single quotes:</p>
<p id="demo3"></p>
<p id="demo4"></p>

<script>
document.getElementById("demo3").innerHTML = "John Doe";
document.getElementById("demo4").innerHTML = 'John Doe';
</script>

</body>
</html>
```

![](images/p2.png)

### Example 1

**Result** [View Example](ex1-literals/index.html)

## JavaScript Variables

**Variables** are containers for **storing data values**.

Variables must be **identified** with **unique names**.

The `let` and `const` keywords create variables:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Variables</h4>
<p id="demo"></p>

<script>
let x;
x = 6;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 2

**Result** [View Example](ex2-variables/index.html)

## JavaScript Identifiers

An **identifier** is the **name** given to a variable.

Rules for identifiers:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with `$` and `_`.
- Names are case sensitive (y and Y are different variables).
- Reserved words (like JavaScript keywords) cannot be used as names.

## JavaScript Operators

JavaScript **assignment operators** (`=`) assign values to variables:

JavaScript uses **arithmetic operators** (`+` `-` `*` `/`) to **compute** values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Operators</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
let a, b, c;
a = 5;
b = 2;
c = a + b;
document.getElementById("demo1").innerHTML = "Value of a + b = " + c;
document.getElementById("demo2").innerHTML = "Value of a * b = " + (a * b);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 3

**Result** [View Example](ex3-operators/index.html)

## JavaScript Expressions

An expression is a combination of values, variables, and operators, which computes to a value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Expressions</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
document.getElementById("demo1").innerHTML = (5 + 6) * 10;
let x = 5;
document.getElementById("demo2").innerHTML = x * 10;
document.getElementById("demo3").innerHTML = "John" + " " + "Doe";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 4

**Result** [View Example](ex4-expressions/index.html)

## JavaScript is Case Sensitive

JavaScript identifiers are **case sensitive**.

The variables `lastName` and `lastname`, are different variables:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Syntax</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript is Case Sensitive</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
let lastName = "Doe";
let lastname = "Smith";
document.getElementById("demo1").innerHTML = lastName;
document.getElementById("demo2").innerHTML = lastname;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 5

**Result** [View Example](ex5-case_sensitive/index.html)

## JavaScript and Camel Case

Historically, programmers have used different ways of joining multiple words into one variable name:

- **Hyphens:** first-name, last-name. Hyphens are **not allowed** in JavaScript. They are reserved for subtractions.
- **Underscore:** first_name, last_name.
- **Upper Camel Case (Pascal Case):** FirstName, LastName.
- **Lower Camel Case:** firstName, lastName.

JavaScript programmers tend to use **lower camel case**.

## Document

Document in project

You can [Download PDF](js-syntax.pdf) file.

## Reference

- [W3Schools JavaScript Syntax](https://www.w3schools.com/js/js_syntax.asp)