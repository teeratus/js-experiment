# JavaScript Array Methods

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Array Methods](#javascript-array-methods)
  - [Basic Array Methods](#basic-array-methods)
    - [Example 1](#example-1)
  - [Popping and Pushing](#popping-and-pushing)
    - [Example 2](#example-2)
  - [Shifting Elements](#shifting-elements)
    - [Example 3](#example-3)
  - [Merging Arrays](#merging-arrays)
    - [Example 4](#example-4)
  - [Splicing and Slicing](#splicing-and-slicing)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Basic Array Methods

The `length` property returns the number of elements. `toString()` converts the array to a string. `join()` joins elements with a separator. `at()` accesses elements by index:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Basic Array Methods</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "length: " + fruits.length + "<br>";
text += "toString(): " + fruits.toString() + "<br>";
text += "join(' - '): " + fruits.join(" - ") + "<br>";
text += "at(0): " + fruits.at(0) + "<br>";
text += "at(-1): " + fruits.at(-1) + " (last element)<br>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-basic_methods/index.html)

## Popping and Pushing

`pop()` removes the last element and returns it. `push()` adds a new element to the end:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Popping and Pushing</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];

// pop() removes the last element
let popped = fruits.pop();
let text = "Popped: " + popped + "<br>";
text += "After pop(): " + fruits + "<br><br>";

// push() adds to the end
let newLength = fruits.push("Kiwi");
text += "Pushed 'Kiwi', new length: " + newLength + "<br>";
text += "After push(): " + fruits;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-pop_push/index.html)

## Shifting Elements

`shift()` removes the first element. `unshift()` adds a new element to the beginning:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Shifting Elements</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];

// shift() removes the first element
let shifted = fruits.shift();
let text = "Shifted: " + shifted + "<br>";
text += "After shift(): " + fruits + "<br><br>";

// unshift() adds to the beginning
let newLength = fruits.unshift("Lemon");
text += "Unshifted 'Lemon', new length: " + newLength + "<br>";
text += "After unshift(): " + fruits;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-shift_unshift/index.html)

## Merging Arrays

`concat()` merges two or more arrays:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Merging Arrays</h4>
<p id="demo"></p>

<script>
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

// Merge two arrays
const merged2 = arr1.concat(arr2);

// Merge three arrays
const merged3 = arr1.concat(arr2, arr3);

// Merge array with values
const mergedValues = arr1.concat("Peter");

document.getElementById("demo").innerHTML =
  "Merged 2 arrays: " + merged2 + "<br>" +
  "Merged 3 arrays: " + merged3 + "<br>" +
  "Merged with values: " + mergedValues;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-concat/index.html)

## Splicing and Slicing

`splice()` adds/removes elements in the middle. `slice()` extracts a section without modifying the original:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Splicing and Slicing</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// splice(position, count, items...) - adds/removes in middle
fruits.splice(2, 0, "Lemon", "Kiwi");
let text = "After splice(2, 0, 'Lemon', 'Kiwi'): " + fruits + "<br><br>";

// splice to remove elements
fruits.splice(2, 2);
text += "After splice(2, 2): " + fruits + "<br><br>";

// slice(start, end) - extracts without modifying
const citrus = fruits.slice(1, 3);
text += "slice(1, 3): " + citrus + "<br>";
text += "Original: " + fruits + " (unchanged)";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-splice_slice/index.html)

## Document

Document in project

You can [Download PDF](js-array_methods.pdf) file.

## Reference

- [W3Schools JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)