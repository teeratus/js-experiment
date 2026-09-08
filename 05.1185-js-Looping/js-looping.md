# JavaScript Looping

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Looping](#javascript-looping)
  - [The for Loop](#the-for-loop)
    - [Example 1](#example-1)
  - [The while Loop](#the-while-loop)
    - [Example 2](#example-2)
  - [The do...while Loop](#the-dowhile-loop)
    - [Example 3](#example-3)
  - [The for...in Loop](#the-forin-loop)
    - [Example 4](#example-4)
  - [The for...of Loop](#the-forof-loop)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The for Loop

The `for` loop repeats a block of code a specific number of times:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Looping</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The for Loop</h4>
<p id="demo"></p>

<script>
let text = "";
for (let i = 0; i < 5; i++) {
  text += "Iteration: " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-for_loop/index.html)

## The while Loop

The `while` loop repeats while a condition is true:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Looping</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The while Loop</h4>
<p id="demo"></p>

<script>
let i = 0;
let text = "";
while (i < 5) {
  text += "Number: " + i + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-while_loop/index.html)

## The do...while Loop

The `do...while` loop runs at least once before checking the condition:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Looping</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The do...while Loop</h4>
<p id="demo"></p>

<script>
let i = 0;
let text = "";
do {
  text += "Number: " + i + "<br>";
  i++;
} while (i < 5);
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-do_while/index.html)

## The for...in Loop

The `for...in` loop iterates over the keys/properties of an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Looping</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The for...in Loop</h4>
<p id="demo"></p>

<script>
const person = { name: "John", age: 30, city: "New York" };
let text = "";

for (let key in person) {
  text += key + ": " + person[key] + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-for_in/index.html)

## The for...of Loop

The `for...of` loop iterates over the values of an iterable (arrays, strings, Maps, Sets):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Looping</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The for...of Loop</h4>
<p id="demo"></p>

<script>
const fruits = ["Apple", "Banana", "Orange"];
let text = "";

for (let fruit of fruits) {
  text += fruit + "<br>";
}

// Can also iterate over strings
text += "<br>String characters:<br>";
for (let ch of "JS") {
  text += ch + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-for_of/index.html)

## Document

Document in project

You can [Download PDF](js-looping.pdf) file.

## Reference

- [W3Schools JavaScript Looping](https://www.w3schools.com/js/js_looping.asp)