# JavaScript Operators

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Operators](#javascript-operators)
  - [JavaScript Assignment](#javascript-assignment)
    - [Example 1](#example-1)
  - [JavaScript Addition](#javascript-addition)
    - [Example 2](#example-2)
  - [JavaScript Multiplication](#javascript-multiplication)
    - [Example 3](#example-3)
  - [Types of JavaScript Operators](#types-of-javascript-operators)
  - [JavaScript Arithmetic Operators](#javascript-arithmetic-operators)
    - [Example 4](#example-4)
  - [JavaScript String Addition](#javascript-string-addition)
    - [Example 5](#example-5)
  - [Adding Strings and Numbers](#adding-strings-and-numbers)
    - [Example 6](#example-6)
  - [JavaScript Assignment Operators](#javascript-assignment-operators)
    - [Example 7](#example-7)
  - [JavaScript Comparison Operators](#javascript-comparison-operators)
    - [Example 8](#example-8)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Assignment

The **Assignment Operator** (`=`) assigns a value to a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Assignment</h4>
<p id="demo"></p>

<script>
let x = 10;
document.getElementById("demo").innerHTML = "x = " + x;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-assignment/index.html)

## JavaScript Addition

The **Addition Operator** (`+`) adds numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Addition</h4>
<p id="demo"></p>

<script>
let x = 5;
let y = 2;
let z = x + y;
document.getElementById("demo").innerHTML = "x + y = " + z;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-addition/index.html)

## JavaScript Multiplication

The **Multiplication Operator** (`*`) multiplies numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Multiplication</h4>
<p id="demo"></p>

<script>
let x = 5;
let y = 2;
let z = x * y;
document.getElementById("demo").innerHTML = "x * y = " + z;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-multiplication/index.html)

## Types of JavaScript Operators

There are different types of JavaScript operators:

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
- **String Operators**: `+`, `+=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`, `?`
- **Logical Operators**: `&&`, `||`, `!`

## JavaScript Arithmetic Operators

**Arithmetic Operators** are used to perform arithmetic on numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arithmetic Operators</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>

<script>
let a = 10;
let b = 3;
document.getElementById("demo1").innerHTML = "a + b = " + (a + b);
document.getElementById("demo2").innerHTML = "a - b = " + (a - b);
document.getElementById("demo3").innerHTML = "a * b = " + (a * b);
document.getElementById("demo4").innerHTML = "a / b = " + (a / b);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-arithmetic_operators/index.html)

## JavaScript String Addition

The `+` operator can also be used to add (concatenate) strings:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Addition (Concatenation)</h4>
<p id="demo"></p>

<script>
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
document.getElementById("demo").innerHTML = text3;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-string_addition/index.html)

## Adding Strings and Numbers

Adding two numbers will return the sum as a number.

Adding a number and a string will return the sum as a concatenated string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding Strings and Numbers</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
document.getElementById("demo1").innerHTML = "5 + 5 = " + x + " (number)";
document.getElementById("demo2").innerHTML = '"5" + 5 = ' + y + " (string)";
document.getElementById("demo3").innerHTML = '"Hello" + 5 = ' + z + " (string)";
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-string_number/index.html)

## JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

The **Addition Assignment Operator** (`+=`) adds a value to a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Assignment Operators</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
let x = 10;
let y = 10;
let z = 10;
x += 5;
y -= 3;
z *= 2;
document.getElementById("demo1").innerHTML = "x += 5 => " + x;
document.getElementById("demo2").innerHTML = "y -= 3 => " + y;
document.getElementById("demo3").innerHTML = "z *= 2 => " + z;
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-assignment_operators/index.html)

## JavaScript Comparison Operators

Comparison operators are used to **compare two values** and always return `true` or `false`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Operators</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Comparison Operators</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
let x = 5;
document.getElementById("demo1").innerHTML = "5 == '5' is " + (5 == "5");
document.getElementById("demo2").innerHTML = "5 === '5' is " + (5 === "5");
document.getElementById("demo3").innerHTML = "5 > 8 is " + (5 > 8);
</script>

</body>
</html>
```

![](images/p8.png)

### Example 8

**Result** [View Example](ex8-comparison_operators/index.html)

## Document

Document in project

You can [Download PDF](js-operators.pdf) file.

## Reference

- [W3Schools JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)