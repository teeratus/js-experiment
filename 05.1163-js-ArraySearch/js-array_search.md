# JavaScript Array Search

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Array Search](#javascript-array-search)
  - [indexOf() and lastIndexOf()](#indexof-and-lastindexof)
    - [Example 1](#example-1)
  - [includes()](#includes)
    - [Example 2](#example-2)
  - [find()](#find)
    - [Example 3](#example-3)
  - [findIndex()](#findindex)
    - [Example 4](#example-4)
  - [findLast() and findLastIndex()](#findlast-and-findlastindex)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## indexOf() and lastIndexOf()

`indexOf()` searches an array for an element value and returns its position. `lastIndexOf()` returns the last index of the element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Search</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>indexOf() and lastIndexOf()</h4>
<p id="demo"></p>

<script>
const fruits = ["Apple", "Orange", "Apple", "Mango"];

// indexOf() - first occurrence
let index = fruits.indexOf("Apple");

// lastIndexOf() - last occurrence
let lastIndex = fruits.lastIndexOf("Apple");

document.getElementById("demo").innerHTML =
  "Array: " + fruits + "<br><br>" +
  "indexOf('Apple'): " + index + "<br>" +
  "lastIndexOf('Apple'): " + lastIndex + "<br><br>" +
  "indexOf('Banana'): " + fruits.indexOf("Banana") + " (-1 = not found)";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-index_lastindex/index.html)

## includes()

`includes()` checks if an element is present in the array. It returns true or false:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Search</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>includes()</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML =
  "Array: " + fruits + "<br><br>" +
  "includes('Apple'): " + fruits.includes("Apple") + "<br>" +
  "includes('Grape'): " + fruits.includes("Grape") + "<br><br>" +
  "includes() returns true if the element is in the array";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-includes/index.html)

## find()

`find()` returns the value of the first element that passes a test function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Search</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>find()</h4>
<p id="demo"></p>

<script>
const numbers = [4, 9, 16, 25, 29];

// Find the first element > 18
let first = numbers.find(function(value) {
  return value > 18;
});

// Find the first element > 10 and < 20
let first2 = numbers.find(function(value) {
  return value > 10 && value < 20;
});

document.getElementById("demo").innerHTML =
  "Array: " + numbers + "<br><br>" +
  "First > 18: " + first + "<br>" +
  "First > 10 and < 20: " + first2;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-find/index.html)

## findIndex()

`findIndex()` returns the index of the first element that passes a test function:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Search</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>findIndex()</h4>
<p id="demo"></p>

<script>
const numbers = [4, 9, 16, 25, 29];

// Find the index of the first element > 18
let index = numbers.findIndex(function(value) {
  return value > 18;
});

document.getElementById("demo").innerHTML =
  "Array: " + numbers + "<br><br>" +
  "findIndex(v > 18): " + index + " (element is " + numbers[index] + ")";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-find_index/index.html)

## findLast() and findLastIndex()

`findLast()` returns the value of the LAST element that passes a test. `findLastIndex()` returns its index:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Search</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>findLast() and findLastIndex()</h4>
<p id="demo"></p>

<script>
const numbers = [4, 9, 16, 25, 29];

// findLast() - last element > 10
let last = numbers.findLast(function(value) {
  return value > 10;
});

// findLastIndex() - index of last element > 10
let lastIndex = numbers.findLastIndex(function(value) {
  return value > 10;
});

document.getElementById("demo").innerHTML =
  "Array: " + numbers + "<br><br>" +
  "findLast(v > 10): " + last + "<br>" +
  "findLastIndex(v > 10): " + lastIndex;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-find_last/index.html)

## Document

Document in project

You can [Download PDF](js-array_search.pdf) file.

## Reference

- [W3Schools JavaScript Array Search](https://www.w3schools.com/js/js_array_search.asp)