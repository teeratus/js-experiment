# JavaScript Arrays

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Arrays](#javascript-arrays)
  - [Creating an Array](#creating-an-array)
    - [Example 1](#example-1)
  - [Accessing and Changing Array Elements](#accessing-and-changing-array-elements)
    - [Example 2](#example-2)
  - [Converting an Array to a String](#converting-an-array-to-a-string)
    - [Example 3](#example-3)
  - [The length Property](#the-length-property)
    - [Example 4](#example-4)
  - [Adding Array Elements](#adding-array-elements)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Creating an Array

An array is a special variable that can hold more than one value. There are two ways to create an array:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Creating an Array</h4>
<p id="demo"></p>

<script>
// Array literal (preferred)
const cars = ["Volvo", "BMW", "Toyota"];

// Using the new keyword (not recommended)
const fruits = new Array("Apple", "Banana", "Orange");

document.getElementById("demo").innerHTML =
  "Cars: " + cars + "<br>" +
  "Fruits: " + fruits + "<br><br>" +
  "Using the array literal is the recommended way";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_array/index.html)

## Accessing and Changing Array Elements

Array elements are accessed by their index number (starting from 0) and can be changed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Accessing and Changing Array Elements</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const cars = ["Volvo", "BMW", "Toyota"];

// Access elements by index (0-based)
const firstCar = cars[0];
const lastCar = cars[2];

// Change an element
cars[1] = "Honda";

document.getElementById("demo1").innerHTML =
  "First car: " + firstCar + "<br>" +
  "Last car: " + lastCar;

document.getElementById("demo2").innerHTML =
  "After cars[1] = 'Honda': " + cars;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-access_elements/index.html)

## Converting an Array to a String

The `toString()` method converts an array to a comma-separated string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Converting an Array to a String</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// toString() joins with commas
const fruitString = fruits.toString();

document.getElementById("demo").innerHTML =
  "Array: " + fruits + "<br>" +
  "toString(): " + fruitString + "<br>" +
  "Type: " + typeof fruitString;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-to_string/index.html)

## The length Property

The `length` property returns the number of array elements. It is always one more than the highest array index:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The length Property</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML =
  "Array: " + fruits + "<br>" +
  "length: " + fruits.length + "<br><br>" +
  "First element: " + fruits[0] + "<br>" +
  "Last element: " + fruits[fruits.length - 1];
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-length_property/index.html)

## Adding Array Elements

You can add new elements to an array using `push()` or the array's length property:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding Array Elements</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange"];

// push() adds to the end
fruits.push("Mango");

// Using length adds to the end
fruits[fruits.length] = "Apple";

// Adding at a higher index creates empty slots
fruits[5] = "Grape";

let text = "After adding elements: " + fruits + "<br><br>";

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === undefined) {
    text += "Index " + i + ": (empty)" + "<br>";
  } else {
    text += "Index " + i + ": " + fruits[i] + "<br>";
  }
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-add_elements/index.html)

## Document

Document in project

You can [Download PDF](js-arrays.pdf) file.

## Reference

- [W3Schools JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)