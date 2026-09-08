# JavaScript Comparisons

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Comparisons](#javascript-comparisons)
  - [Comparison Operators](#comparison-operators)
    - [Example 1](#example-1)
  - [JavaScript String Comparison](#javascript-string-comparison)
    - [Example 2](#example-2)
  - [Comparing Different Types](#comparing-different-types)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Comparison Operators

Comparison operators are used to **compare two values** and always return `true` or `false`.

Given that `x = 5`, the table below explains the comparison operators:

| Operator | Description | Comparing | Returns |
|----------|-------------|-----------|---------|
| `==` | equal to | `x == 8` | `false` |
| `==` | equal to | `x == 5` | `true` |
| `==` | equal to | `x == "5"` | `true` |
| `===` | equal value and type | `x === 5` | `true` |
| `===` | equal value and type | `x === "5"` | `false` |
| `!=` | not equal | `x != 8` | `true` |
| `!==` | not equal value or type | `x !== 5` | `false` |
| `!==` | not equal value or type | `x !== "5"` | `true` |
| `>` | greater than | `x > 8` | `false` |
| `<` | less than | `x < 8` | `true` |
| `>=` | greater than or equal to | `x >= 8` | `false` |
| `<=` | less than or equal to | `x <= 8` | `true` |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comparisons</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Comparison Operators</h4>
<p id="demo"></p>

<script>
let x = 5;
document.getElementById("demo").innerHTML =
  "x = " + x + "<br><br>" +
  "x == 8 : " + (x == 8) + "<br>" +
  "x == 5 : " + (x == 5) + "<br>" +
  "x == '5' : " + (x == "5") + "<br>" +
  "x === 5 : " + (x === 5) + "<br>" +
  "x === '5' : " + (x === "5") + "<br>" +
  "x != 8 : " + (x != 8) + "<br>" +
  "x > 8 : " + (x > 8) + "<br>" +
  "x < 8 : " + (x < 8) + "<br>" +
  "x >= 8 : " + (x >= 8) + "<br>" +
  "x <= 8 : " + (x <= 8);
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-comparison_operators/index.html)

## JavaScript String Comparison

All the comparison operators can also be used on strings. Note that strings are compared alphabetically:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comparisons</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>String Comparison</h4>
<p id="demo"></p>

<script>
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("demo").innerHTML =
  "A < B : " + result + "<br><br>" +
  "\"Apple\" < \"Banana\" : " + ("Apple" < "Banana") + "<br>" +
  "\"John\" > \"Jane\" : " + ("John" > "Jane");
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-string_comparison/index.html)

## Comparing Different Types

Comparing data of different types may give unexpected results.

When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.

An empty string converts to 0. A non-numeric string converts to `NaN` which is always `false`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comparisons</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Comparing Different Types</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "2 < 12 : " + (2 < 12) + "<br>" +
  "\"2\" < \"12\" : " + ("2" < "12") + "<br>" +
  "\"2\" < 12 : " + ("2" < 12) + "<br>" +
  "\"\" == 0 : " + ("" == 0) + "<br>" +
  "\"\" === 0 : " + ("" === 0);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-different_types/index.html)

## Document

Document in project

You can [Download PDF](js-comparisons.pdf) file.

## Reference

- [W3Schools JavaScript Comparisons](https://www.w3schools.com/js/js_comparisons.asp)