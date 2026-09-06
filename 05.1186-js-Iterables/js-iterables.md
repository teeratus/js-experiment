# JavaScript Iterables

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Iterables](#javascript-iterables)
  - [Iterating Over a String](#iterating-over-a-string)
    - [Example 1](#example-1)
  - [Iterating Over an Array](#iterating-over-an-array)
    - [Example 2](#example-2)
  - [Iterating Over a Set](#iterating-over-a-set)
    - [Example 3](#example-3)
  - [Iterating Over a Map](#iterating-over-a-map)
    - [Example 4](#example-4)
  - [Home Made Iterable](#home-made-iterable)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## An Iterable is an Iterable Object

An iterable is an object that can be iterated over with `for...of`. Iterables include: strings, arrays, Sets, and Maps.

## Iterating Over a String

Strings are iterable, so you can loop over each character:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Iterables</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Iterating Over a String</h4>
<p id="demo"></p>

<script>
const word = "Hello";
let text = "";

for (let char of word) {
  text += char + " ";
}

document.getElementById("demo").innerHTML =
  "String: " + word + "<br>" +
  "Characters: " + text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-iterating_string/index.html)

## Iterating Over an Array

Arrays are iterable, so you can loop over each element:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Iterables</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Iterating Over an Array</h4>
<p id="demo"></p>

<script>
const fruits = ["Apple", "Banana", "Orange"];
let text = "";

for (let fruit of fruits) {
  text += fruit + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-iterating_array/index.html)

## Iterating Over a Set

Sets are iterable, so you can loop over each value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Iterables</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Iterating Over a Set</h4>
<p id="demo"></p>

<script>
const letters = new Set(["a", "b", "c"]);
let text = "";

for (let letter of letters) {
  text += letter + " ";
}

document.getElementById("demo").innerHTML =
  "Set: a, b, c<br>" +
  "Iterated: " + text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-iterating_set/index.html)

## Iterating Over a Map

Maps are iterable, so you can loop over each entry:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Iterables</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Iterating Over a Map</h4>
<p id="demo"></p>

<script>
const fruits = new Map([
  ["apple", 500],
  ["banana", 300]
]);
let text = "";

for (let entry of fruits) {
  text += entry[0] + " = " + entry[1] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-iterating_map/index.html)

## Home Made Iterable

You can create your own iterable by implementing the `Symbol.iterator` method:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Iterables</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Home Made Iterable</h4>
<p id="demo"></p>

<script>
// Create a home made iterable
function myIterable() {
  let i = 0;
  return {
    [Symbol.iterator]: function() {
      return {
        next: function() {
          i++;
          return i <= 5 ? {value: i, done: false} : {done: true};
        }
      };
    }
  };
}

let text = "";
for (let num of myIterable()) {
  text += num + " ";
}

document.getElementById("demo").innerHTML =
  "Home made iterable: " + text + "<br><br>" +
  "Custom iterable using Symbol.iterator and next()";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-home_made_iterable/index.html)

## Document

Document in project

You can [Download PDF](js-iterables.pdf) file.

## Reference

- [W3Schools JavaScript Iterables](https://www.w3schools.com/js/js_iterables.asp)