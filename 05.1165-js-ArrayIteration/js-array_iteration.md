# JavaScript Array Iteration

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Array Iteration](#javascript-array-iteration)
  - [Looping Array Values](#looping-array-values)
    - [Example 1](#example-1)
  - [forEach()](#foreach)
    - [Example 2](#example-2)
  - [map()](#map)
    - [Example 3](#example-3)
  - [filter() and reduce()](#filter-and-reduce)
    - [Example 4](#example-4)
  - [every() and some()](#every-and-some)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Looping Array Values

The `for...of` loop iterates over array values. The `for...in` loop iterates over array indexes (not recommended):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Iteration</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Looping Array Values</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for...of loop (recommended) - iterates values
let text1 = "for...of: ";
for (let fruit of fruits) {
  text1 += fruit + " ";
}
document.getElementById("demo1").innerHTML = text1;

// for...in loop (not recommended) - iterates indexes
let text2 = "for...in: ";
for (let index in fruits) {
  text2 += index + " ";
}
document.getElementById("demo2").innerHTML = text2;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-looping/index.html)

## forEach()

The `forEach()` method calls a function once for each array element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Iteration</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>forEach()</h4>
<p id="demo"></p>

<script>
const numbers = [1, 2, 3, 4, 5];
let text = "";

numbers.forEach(function(value, index) {
  text += "Index " + index + ": " + value + "<br>";
});

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-foreach/index.html)

## map()

The `map()` method creates a new array by performing a function on each element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Iteration</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>map()</h4>
<p id="demo"></p>

<script>
const numbers = [1, 2, 3, 4, 5];

// Create a new array with each value multiplied by 2
const doubled = numbers.map(function(value) {
  return value * 2;
});

// Create a new array with string labels
const labels = numbers.map(function(value) {
  return "Number: " + value;
});

document.getElementById("demo").innerHTML =
  "Original: " + numbers + "<br>" +
  "map(x * 2): " + doubled + "<br>" +
  "map(labels): " + labels;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-map/index.html)

## filter() and reduce()

`filter()` creates a new array with elements that pass a test. `reduce()` reduces the array to a single value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Iteration</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>filter() and reduce()</h4>
<p id="demo"></p>

<script>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter - keep values > 5
const filtered = numbers.filter(function(value) {
  return value > 5;
});

// reduce - sum all values
const sum = numbers.reduce(function(total, value) {
  return total + value;
}, 0);

// reduce - find max value
const max = numbers.reduce(function(acc, value) {
  return Math.max(acc, value);
});

document.getElementById("demo").innerHTML =
  "Original: " + numbers + "<br><br>" +
  "filter(v > 5): " + filtered + "<br>" +
  "reduce(sum): " + sum + "<br>" +
  "reduce(max): " + max;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-filter_reduce/index.html)

## every() and some()

`every()` returns true if ALL elements pass a test. `some()` returns true if ANY element passes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Iteration</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>every() and some()</h4>
<p id="demo"></p>

<script>
const numbers = [2, 4, 6, 8, 10];

// every() - all values > 1?
const allGreater = numbers.every(function(value) {
  return value > 1;
});

// every() - all even?
const allEven = numbers.every(function(value) {
  return value % 2 === 0;
});

// some() - any value > 6?
const anyGreater = numbers.some(function(value) {
  return value > 6;
});

// some() - any value > 10?
const anyOver10 = numbers.some(function(value) {
  return value > 10;
});

document.getElementById("demo").innerHTML =
  "Array: " + numbers + "<br><br>" +
  "every(v > 1): " + allGreater + "<br>" +
  "every(v even): " + allEven + "<br>" +
  "some(v > 6): " + anyGreater + "<br>" +
  "some(v > 10): " + anyOver10;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-every_some/index.html)

## Document

Document in project

You can [Download PDF](js-array_iteration.pdf) file.

## Reference

- [W3Schools JavaScript Array Iteration](https://www.w3schools.com/js/js_array_iteration.asp)