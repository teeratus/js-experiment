# JavaScript Array Reference

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Array Reference](#javascript-array-reference)
  - [Array Properties](#array-properties)
    - [Example 1](#example-1)
  - [Basic Methods](#basic-methods)
    - [Example 2](#example-2)
  - [Search Methods](#search-methods)
    - [Example 3](#example-3)
  - [Iteration Methods](#iteration-methods)
    - [Example 4](#example-4)
  - [Add/Remove Methods](#addremove-methods)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Array Properties

The complete `Array` object reference:

| Property | Description |
|----------|-------------|
| `length` | Number of elements in the array |
| `constructor` | The array constructor function |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Array Properties</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo").innerHTML =
  "Array: " + fruits + "<br>" +
  "length: " + fruits.length + "<br>" +
  "constructor: " + fruits.constructor;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-properties/index.html)

## Basic Methods

Basic array methods for converting and joining:

| Method | Description |
|--------|-------------|
| `toString()` | Convert array to comma-separated string |
| `join(sep)` | Join elements with a separator |
| `at(index)` | Get element at index (supports negative) |
| `fill(value)` | Fill all elements with a value |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Basic Methods</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];

// Create a copy for fill demonstration
const filled = new Array(3);
filled.fill("Kiwi");

document.getElementById("demo").innerHTML =
  "toString(): " + fruits.toString() + "<br>" +
  "join(' - '): " + fruits.join(" - ") + "<br>" +
  "at(-1): " + fruits.at(-1) + "<br>" +
  "fill('Kiwi'): " + filled;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-basic_methods/index.html)

## Search Methods

Array search methods reference:

| Method | Description |
|--------|-------------|
| `indexOf(item)` | First index of item (-1 if not found) |
| `lastIndexOf(item)` | Last index of item |
| `includes(item)` | True if item exists |
| `find(fn)` | First value passing test |
| `findIndex(fn)` | First index passing test |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Search Methods</h4>
<p id="demo"></p>

<script>
const numbers = [10, 20, 30, 20, 40];

document.getElementById("demo").innerHTML =
  "Array: " + numbers + "<br><br>" +
  "indexOf(20): " + numbers.indexOf(20) + "<br>" +
  "lastIndexOf(20): " + numbers.lastIndexOf(20) + "<br>" +
  "includes(30): " + numbers.includes(30) + "<br>" +
  "find(v > 25): " + numbers.find(v => v > 25) + "<br>" +
  "findIndex(v > 25): " + numbers.findIndex(v => v > 25);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-search_methods/index.html)

## Iteration Methods

Array iteration methods reference:

| Method | Description |
|--------|-------------|
| `forEach(fn)` | Call function for each element |
| `map(fn)` | Create new array from results |
| `filter(fn)` | Keep elements passing test |
| `reduce(fn)` | Reduce to a single value |
| `every(fn)` | True if all pass |
| `some(fn)` | True if any pass |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Iteration Methods</h4>
<p id="demo"></p>

<script>
const numbers = [1, 2, 3, 4, 5];

let text = "Array: " + numbers + "<br><br>";

// forEach
let sum = 0;
numbers.forEach(v => sum += v);
text += "forEach (sum): " + sum + "<br>";

// map
text += "map(v * 10): " + numbers.map(v => v * 10) + "<br>";

// filter
text += "filter(v % 2 == 0): " + numbers.filter(v => v % 2 === 0) + "<br>";

// reduce
text += "reduce(sum): " + numbers.reduce((acc, v) => acc + v, 0) + "<br>";

// every/some
text += "every(v > 0): " + numbers.every(v => v > 0) + "<br>";
text += "some(v > 4): " + numbers.some(v => v > 4);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-iteration_methods/index.html)

## Add/Remove Methods

Methods for adding and removing elements:

| Method | Description |
|--------|-------------|
| `push(item)` | Add to the end |
| `pop()` | Remove from the end |
| `shift()` | Remove from the beginning |
| `unshift(item)` | Add to the beginning |
| `splice(start, count)` | Add/remove in the middle |
| `concat(arr)` | Merge arrays |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Add/Remove Methods</h4>
<p id="demo"></p>

<script>
const arr = ["A", "B"];

let text = "Start: " + arr + "<br><br>";

arr.push("C");
text += "push('C'): " + arr + "<br>";

arr.unshift("Z");
text += "unshift('Z'): " + arr + "<br>";

arr.pop();
text += "pop(): " + arr + "<br>";

arr.shift();
text += "shift(): " + arr + "<br>";

arr.splice(1, 0, "X");
text += "splice(1,0,'X'): " + arr + "<br>";

text += "concat(['Y']): " + arr.concat(["Y"]);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-add_remove/index.html)

## Document

Document in project

You can [Download PDF](js-array_reference.pdf) file.

## Reference

- [W3Schools JavaScript Array Reference](https://www.w3schools.com/js/js_array_reference.asp)