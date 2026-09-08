# JavaScript Random

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Random](#javascript-random)
  - [Math.random()](#mathrandom)
    - [Example 1](#example-1)
  - [JavaScript Random Integers](#javascript-random-integers)
    - [Example 2](#example-2)
  - [Random Integers in a Range](#random-integers-in-a-range)
    - [Example 3](#example-3)
  - [A Proper Random Function](#a-proper-random-function)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Math.random()

`Math.random()` returns a random number between 0 (inclusive) and 1 (exclusive):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Random</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Math.random()</h4>
<p id="demo"></p>

<script>
let text = "Random numbers between 0 and 1:<br><br>";

for (let i = 0; i < 5; i++) {
  text += Math.random() + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-math_random/index.html)

## JavaScript Random Integers

`Math.random()` used with `Math.floor()` generates random integers:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Random</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Random Integers</h4>
<p id="demo"></p>

<script>
let text = "Random integers:<br><br>";

// 0 to 9
text += "Math.floor(Math.random() * 10): ";
for (let i = 0; i < 3; i++) {
  text += Math.floor(Math.random() * 10) + " ";
}
text += "<br>";

// 1 to 10
text += "Math.floor(Math.random() * 10) + 1: ";
for (let i = 0; i < 3; i++) {
  text += Math.floor(Math.random() * 10) + 1 + " ";
}
text += "<br>";

// 0 to 100
text += "Math.floor(Math.random() * 100): ";
for (let i = 0; i < 3; i++) {
  text += Math.floor(Math.random() * 100) + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-random_integers/index.html)

## Random Integers in a Range

You can generate random integers in a specific range (min to max):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Random</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Random Integers in a Range</h4>
<p id="demo"></p>

<script>
// Random integer between min (inclusive) and max (inclusive)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let text = "Random integers between 1 and 6 (dice):<br>";
for (let i = 0; i < 6; i++) {
  text += getRndInteger(1, 6) + " ";
}
text += "<br><br>";

text += "Random integers between 10 and 20:<br>";
for (let i = 0; i < 6; i++) {
  text += getRndInteger(10, 20) + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-random_range/index.html)

## A Proper Random Function

A reusable function for generating random integers between any two values:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Random</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>A Proper Random Function</h4>
<p id="demo"></p>

<button onclick="rollDice()">Roll Dice</button>
<p id="diceResult"></p>

<script>
// Proper random function: min (inclusive) to max (inclusive)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
  const dice1 = getRndInteger(1, 6);
  const dice2 = getRndInteger(1, 6);
  document.getElementById("diceResult").innerHTML = 
    "Dice 1: " + dice1 + " | Dice 2: " + dice2 + " | Total: " + (dice1 + dice2);
}

document.getElementById("demo").innerHTML =
  "This function returns a random integer:<br>" +
  "from min (inclusive) to max (inclusive):<br><br>" +
  "function getRndInteger(min, max) {<br>" +
  "&nbsp;&nbsp;return Math.floor(Math.random() * (max - min + 1)) + min;<br>" +
  "}";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-proper_random/index.html)

## Document

Document in project

You can [Download PDF](js-random.pdf) file.

## Reference

- [W3Schools JavaScript Random](https://www.w3schools.com/js/js_random.asp)