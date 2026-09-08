# JavaScript toString()

[Back to JS page](../index.html)

Table of Contents
- [JavaScript toString()](#javascript-tostring)
  - [JavaScript Array toString()](#javascript-array-tostring)
    - [Example 1](#example-1)
  - [JavaScript Date toString()](#javascript-date-tostring)
    - [Example 2](#example-2)
  - [JavaScript Number toString()](#javascript-number-tostring)
    - [Example 3](#example-3)
    - [Example 4](#example-4)
  - [JavaScript Function toString()](#javascript-function-tostring)
  - [JavaScript Object toString()](#javascript-object-tostring)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


The JavaScript `toString()` method converts a variable (or a value) to a string. It is a built-in method for many data types, including numbers, arrays, dates, and objects.

The method is useful for:

- Converting data to a readable format for display
- Ensuring type compatibility when a string is required
- Customizing objects other user interfaces
- Customizing objects for debugging

## JavaScript Array toString()

When used on an array, `toString()` returns the array elements as a comma separated string.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Array toString()</h4>
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();

document.getElementById("demo").innerHTML = myList;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-array_tostring/index.html)

## JavaScript Date toString()

When used on a date, `toString()` returns a human-readable date and time string.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date toString()</h4>
<p id="demo"></p>

<script>
const d = new Date();

let text = d.toString();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-date_tostring/index.html)

## JavaScript Number toString()

When used on a number, `toString()` returns the number as a string.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Number toString()</h4>
<p id="demo"></p>

<script>
let x = 123;

let text = x.toString();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-number_tostring/index.html)

Convert a number to a string, using base 2 (binary):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Number toString() with Base 2</h4>
<p id="demo"></p>

<script>
let x = 123;

let text = x.toString(2);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-number_tostring_base2/index.html)

## JavaScript Function toString()

When used on a function, `toString()` returns the source code of the function as a string.

## JavaScript Object toString()

When used on an object, `toString()` an object returns `"[object Object]"`. To provide a meaningful string representation, it can be overridden in the object definition:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object toString()</h4>
<p id="demo"></p>

<script>
let person = {
  firstname: "John",
  lastname: "Doe",
}

let text = person.toString();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-object_tostring/index.html)

## Document

Document in project

You can [Download PDF](js-tostring.pdf) file.

## Reference

- [W3Schools JavaScript toString()](https://www.w3schools.com/js/js_tostring.asp)