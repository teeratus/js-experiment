# JavaScript Assignment

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Assignment](#javascript-assignment)
  - [The = Operator](#the--operator)
    - [Example 1](#example-1)
  - [The += Operator](#the--operator-1)
    - [Example 2](#example-2)
  - [The -= Operator](#the---operator)
    - [Example 3](#example-3)
  - [The *= Operator](#the--operator-2)
    - [Example 4](#example-4)
  - [The **= Operator](#the--operator-3)
    - [Example 5](#example-5)
  - [The /= Operator](#the--operator-4)
    - [Example 6](#example-6)
  - [The %= Operator](#the--operator-5)
    - [Example 7](#example-7)
  - [String Assignment](#string-assignment)
    - [Example 8](#example-8)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Assignment Operators

Assignment operators assign values to JavaScript variables.

Given that `x = 10` and `y = 5`, the table below explains the assignment operators:

| Operator | Example | Same As | Result |
|----------|---------|---------|--------|
| `=` | `x = y` | `x = y` | `x = 5` |
| `+=` | `x += y` | `x = x + y` | `x = 15` |
| `-=` | `x -= y` | `x = x - y` | `x = 5` |
| `*=` | `x *= y` | `x = x * y` | `x = 50` |
| `/=` | `x /= y` | `x = x / y` | `x = 2` |
| `%=` | `x %= y` | `x = x % y` | `x = 0` |
| `**=` | `x **= y` | `x = x ** y` | `x = 100000` |

## The = Operator

The **Simple Assignment Operator** assigns a simple value to a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The = Operator</h4>
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

**Result** [View Example](ex1-simple_assignment/index.html)

## The += Operator

The **Addition Assignment Operator** adds a value to a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The += Operator</h4>
<p id="demo"></p>

<script>
let x = 10;
x += 5;
document.getElementById("demo").innerHTML = "x += 5 => " + x;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-addition_assignment/index.html)

## The -= Operator

The **Subtraction Assignment Operator** subtracts a value from a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The -= Operator</h4>
<p id="demo"></p>

<script>
let x = 10;
x -= 5;
document.getElementById("demo").innerHTML = "x -= 5 => " + x;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-subtraction_assignment/index.html)

## The *= Operator

The **Multiplication Assignment Operator** multiplies a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The *= Operator</h4>
<p id="demo"></p>

<script>
let x = 10;
x *= 5;
document.getElementById("demo").innerHTML = "x *= 5 => " + x;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-multiplication_assignment/index.html)

## The **= Operator

The **Exponentiation Assignment Operator** raises a variable to the power of the operand:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The **= Operator</h4>
<p id="demo"></p>

<script>
let x = 10;
x **= 5;
document.getElementById("demo").innerHTML = "x **= 5 => " + x;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-exponentiation_assignment/index.html)

## The /= Operator

The **Division Assignment Operator** divides a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The /= Operator</h4>
<p id="demo"></p>

<script>
let x = 10;
x /= 5;
document.getElementById("demo").innerHTML = "x /= 5 => " + x;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-division_assignment/index.html)

## The %= Operator

The **Remainder Assignment Operator** assigns a remainder to a variable:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The %= Operator</h4>
<p id="demo"></p>

<script>
let x = 10;
x %= 5;
document.getElementById("demo").innerHTML = "x %= 5 => " + x;
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-remainder_assignment/index.html)

## String Assignment

Two assignment operators can assign values to strings:

The **Simple Assignment Operator** (`=`) assigns a simple value to a string.

The **Addition Assignment Operator** (`+=`) adds (concatenates) strings:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Assignment</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Assignment</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
let text1 = "Hello";
let text2 = "World";
text2 += "!";
document.getElementById("demo1").innerHTML = "text1 = " + text1;
document.getElementById("demo2").innerHTML = "text2 += \"!\" => " + text2;
</script>

</body>
</html>
```

![](images/p8.png)

### Example 8

**Result** [View Example](ex8-string_assignment/index.html)

## Document

Document in project

You can [Download PDF](js-assignment.pdf) file.

## Reference

- [W3Schools JavaScript Assignment](https://www.w3schools.com/js/js_assignment.asp)