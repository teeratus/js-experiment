# JavaScript Typed Array Methods

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Typed Array Methods](#javascript-typed-array-methods)
  - [The from() Method](#the-from-method)
    - [Example 1](#example-1)
  - [The of() Method](#the-of-method)
    - [Example 2](#example-2)
  - [The fill() Method](#the-fill-method)
    - [Example 3](#example-3)
  - [The find() Method](#the-find-method)
    - [Example 4](#example-4)
  - [The some() Method](#the-some-method)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The from() Method

`TypedArray.from()` creates a new typed array from an array-like or iterable object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Typed Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The from() Method</h4>
<p id="demo"></p>

<script>
// Create Int8Array from a regular array
const regularArray = [10, 20, 30, 40, 50];
const typedArray = Int8Array.from(regularArray);

let text = "Original array: " + regularArray.join(", ") + "<br>";
text += "Typed array: ";
for (let num of typedArray) {
  text += num + " ";
}
text += "<br>Constructor: " + typedArray.constructor.name;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-from_method/index.html)

## The of() Method

`TypedArray.of()` creates a new typed array with a variable number of arguments:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Typed Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The of() Method</h4>
<p id="demo"></p>

<script>
// Create typed array from individual values
const values = Int16Array.of(100, 200, 300, 400, 500);

let text = "Int16Array.of(100, 200, 300, 400, 500):<br>";
for (let num of values) {
  text += num + " ";
}
text += "<br><br>";
text += "Length: " + values.length + "<br>";
text += "Constructor: " + values.constructor.name;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-of_method/index.html)

## The fill() Method

`fill()` fills all elements of a typed array with a static value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Typed Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The fill() Method</h4>
<p id="demo"></p>

<script>
// Create an array and fill it
const arr = new Int8Array(8);
arr.fill(42);

let text = "Int8Array(8) filled with 42:<br>";
for (let num of arr) {
  text += num + " ";
}
text += "<br><br>";

// Fill with a different value from index 3 to 6
arr.fill(99, 3, 6);
text += "After arr.fill(99, 3, 6):<br>";
for (let num of arr) {
  text += num + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-fill_method/index.html)

## The find() Method

`find()` returns the first element that satisfies a testing function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Typed Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The find() Method</h4>
<p id="demo"></p>

<script>
const numbers = new Int8Array([10, 25, 30, 45, 50, 65, 70]);

// Find first element > 40
const found = numbers.find(function(value) {
  return value > 40;
});

// Find first element > 10 and < 30
const found2 = numbers.find(function(value) {
  return value > 10 && value < 30;
});

document.getElementById("demo").innerHTML =
  "Numbers: 10, 25, 30, 45, 50, 65, 70<br><br>" +
  "First > 40: " + found + "<br>" +
  "First > 10 and < 30: " + found2;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-find_method/index.html)

## The some() Method

`some()` checks if any element satisfies a testing function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Typed Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The some() Method</h4>
<p id="demo"></p>

<script>
const numbers = new Int8Array([5, 10, 15, 20, 25]);

// Check if any number > 20
const hasLarge = numbers.some(function(value) {
  return value > 20;
});

// Check if any number < 0
const hasNegative = numbers.some(function(value) {
  return value < 0;
});

// Check if any number == 15
const hasFifteen = numbers.some(function(value) {
  return value === 15;
});

document.getElementById("demo").innerHTML =
  "Numbers: 5, 10, 15, 20, 25<br><br>" +
  "Any > 20? " + hasLarge + "<br>" +
  "Any < 0? " + hasNegative + "<br>" +
  "Any == 15? " + hasFifteen;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-some_method/index.html)

## Document

Document in project

You can [Download PDF](js-typed_array_methods.pdf) file.

## Reference

- [W3Schools JavaScript Typed Array Methods](https://www.w3schools.com/js/js_typed_methods.asp)