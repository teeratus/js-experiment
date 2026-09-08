# JavaScript Array Constructor

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Array Constructor](#javascript-array-constructor)
  - [new Array() vs Array()](#new-array-vs-array)
    - [Example 1](#example-1)
  - [A Common Error](#a-common-error)
    - [Example 2](#example-2)
  - [Array Literal (Preferred)](#array-literal-preferred)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## new Array() vs Array()

There is no difference between `new Array()` and `Array()`. Both create a new array:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Constructor</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>new Array() vs Array()</h4>
<p id="demo"></p>

<script>
// new Array() - creates a new array
const arr1 = new Array("Apple", "Banana", "Orange");

// Array() - same result, no 'new' needed
const arr2 = Array("Apple", "Banana", "Orange");

document.getElementById("demo").innerHTML =
  "new Array(...): " + arr1 + "<br>" +
  "Array(...): " + arr2 + "<br><br>" +
  "Both give the same result!";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-new_vs_array/index.html)

## A Common Error

A common error is using `new Array(number)` with a single numeric argument. It creates an array with that many undefined elements, NOT an array with one element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Constructor</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>A Common Error</h4>
<p id="demo"></p>

<script>
// WARNING: new Array(5) creates an array with 5 empty slots!
const arr = new Array(5);

let text = "new Array(5):<br>";
text += "Length: " + arr.length + "<br>";
text += "Elements: " + arr + "<br><br>";

text += "This creates 5 EMPTY slots, not an array with value 5!<br><br>";

// To create an array with one element use brackets
const correct = [5];
text += "Correct way [5]: length = " + correct.length + ", value = " + correct[0];

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-common_error/index.html)

## Array Literal (Preferred)

The array literal `[]` is the preferred way to create an array. It is simpler and safer:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Constructor</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Array Literal (Preferred)</h4>
<p id="demo"></p>

<script>
// Preferred: array literal
const fruits = ["Apple", "Banana", "Orange"];

// Using new Array() with explicit elements (works but not preferred)
const cars = new Array("Volvo", "BMW", "Toyota");

let text = "Array literal: " + fruits + "<br>";
text += "new Array(): " + cars + "<br><br>";
text += "<b>Why use the array literal?</b><br>";
text += "1. Simpler to read and write<br>";
text += "2. Avoids the new Array(number) error<br>";
text += "3. Better performance<br>";
text += "4. Consistent behavior";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-array_literal/index.html)

## Document

Document in project

You can [Download PDF](js-array_constructor.pdf) file.

## Reference

- [W3Schools JavaScript Array Constructor](https://www.w3schools.com/js/js_array_constructor.asp)