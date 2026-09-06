# JavaScript Arithmetic

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Arithmetic](#javascript-arithmetic)
  - [Arithmetic Operators](#arithmetic-operators)
    - [Example 1](#example-1)
  - [Adding](#adding)
    - [Example 2](#example-2)
  - [Subtracting](#subtracting)
    - [Example 3](#example-3)
  - [Multiplying](#multiplying)
    - [Example 4](#example-4)
  - [Dividing](#dividing)
    - [Example 5](#example-5)
  - [Remainder](#remainder)
    - [Example 6](#example-6)
  - [Incrementing](#incrementing)
    - [Example 7](#example-7)
  - [Decrementing](#decrementing)
    - [Example 8](#example-8)
  - [Exponentiation](#exponentiation)
    - [Example 9](#example-9)
  - [Operator Precedence](#operator-precedence)
    - [Example 10](#example-10)
  - [Document](#document)
  - [Reference](#reference)


## Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables).

A typical arithmetic operation operates on two numbers.

The numbers (in an arithmetic operation) are called **operands**. The operation (to be performed between the two operands) is defined by an **operator**.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arithmetic Operators Overview</h4>
<p id="demo"></p>

<script>
let x = 10;
let y = 3;
document.getElementById("demo").innerHTML =
  "x = " + x + ", y = " + y + "<br><br>" +
  "x + y = " + (x + y) + " (Addition)<br>" +
  "x - y = " + (x - y) + " (Subtraction)<br>" +
  "x * y = " + (x * y) + " (Multiplication)<br>" +
  "x / y = " + (x / y) + " (Division)<br>" +
  "x % y = " + (x % y) + " (Modulus)<br>" +
  "x ** y = " + (x ** y) + " (Exponentiation)";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-operators_overview/index.html)

## Adding

The **addition** operator (`+`) adds numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding</h4>
<p id="demo"></p>

<script>
let a = 100;
let b = 50;
let x = a + b;
document.getElementById("demo").innerHTML = "a + b = " + x;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-adding/index.html)

## Subtracting

The **subtraction** operator (`-`) subtracts numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Subtracting</h4>
<p id="demo"></p>

<script>
let a = 100;
let b = 50;
let x = a - b;
document.getElementById("demo").innerHTML = "a - b = " + x;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-subtracting/index.html)

## Multiplying

The **multiplication** operator (`*`) multiplies numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Multiplying</h4>
<p id="demo"></p>

<script>
let a = 100;
let b = 50;
let x = a * b;
document.getElementById("demo").innerHTML = "a * b = " + x;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-multiplying/index.html)

## Dividing

The **division** operator (`/`) divides numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Dividing</h4>
<p id="demo"></p>

<script>
let a = 100;
let b = 50;
let x = a / b;
document.getElementById("demo").innerHTML = "a / b = " + x;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-dividing/index.html)

## Remainder

The **modulus** operator (`%`) returns the division remainder:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Remainder (Modulus)</h4>
<p id="demo"></p>

<script>
let a = 17;
let b = 5;
let x = a % b;
document.getElementById("demo").innerHTML = "a % b = " + x + " (remainder of " + a + " / " + b + ")";
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-modulus/index.html)

## Incrementing

The **increment** operator (`++`) increments numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Incrementing</h4>
<p id="demo"></p>

<script>
let x = 5;
x++;
let y = x;
document.getElementById("demo").innerHTML = "x = 5, x++ => y = " + y;
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-incrementing/index.html)

## Decrementing

The **decrement** operator (`--`) decrements numbers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Decrementing</h4>
<p id="demo"></p>

<script>
let x = 5;
x--;
let y = x;
document.getElementById("demo").innerHTML = "x = 5, x-- => y = " + y;
</script>

</body>
</html>
```

![](images/p8.png)

### Example 8

**Result** [View Example](ex8-decrementing/index.html)

## Exponentiation

The **exponentiation** operator (`**`) raises the first operand to the power of the second operand:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Exponentiation</h4>
<p id="demo"></p>

<script>
let x = 5;
let y = x ** 2;
document.getElementById("demo").innerHTML = "x = 5, x ** 2 = " + y;
</script>

</body>
</html>
```

![](images/p9.png)

### Example 9

**Result** [View Example](ex9-exponentiation/index.html)

## Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

Multiplication (`*`) and division (`/`) have higher **precedence** than addition (`+`) and subtraction (`-`).

Precedence can be changed by using parentheses:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arithmetic</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Operator Precedence</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
document.getElementById("demo1").innerHTML = "100 + 50 * 3 = " + (100 + 50 * 3);
document.getElementById("demo2").innerHTML = "(100 + 50) * 3 = " + ((100 + 50) * 3);
document.getElementById("demo3").innerHTML = "100 + 50 - 3 * 2 = " + (100 + 50 - 3 * 2);
</script>

</body>
</html>
```

![](images/p10.png)

### Example 10

**Result** [View Example](ex10-precedence/index.html)

## Document

Document in project

You can [Download PDF](js-arithmetic.pdf) file.

## Reference

- [W3Schools JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)