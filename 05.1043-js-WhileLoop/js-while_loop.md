# JavaScript While Loop

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript While Loop](#javascript-while-loop)
  - [The While Loop](#the-while-loop)
    - [Example 1](#example-1)
  - [The Do While Loop](#the-do-while-loop)
    - [Example 2](#example-2)
  - [Comparing For and While](#comparing-for-and-while)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## The While Loop

The `while` loop loops through a block of code as long as a specified condition is `true`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The While Loop</h4>
<p id="demo"></p>

<script>
let text = "";
let i = 0;
while (i < 5) {
  text += "Number: " + i + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-while_loop/index.html)

## The Do While Loop

The `do while` loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Do While Loop</h4>
<p id="demo"></p>

<script>
let text = "";
let i = 0;
do {
  text += "Number: " + i + "<br>";
  i++;
}
while (i < 5);
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-do_while/index.html)

## Comparing For and While

If you have read the previous chapter about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.

The loop in this example uses a `for` loop to collect the car names from the cars array:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Comparing For and While</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const cars = ["BMW", "Volvo", "Saab", "Ford"];

// Using for loop
let text1 = "";
for (let i = 0; i < cars.length; i++) {
  text1 += cars[i] + "<br>";
}
document.getElementById("demo1").innerHTML = "For loop:<br>" + text1;

// Using while loop
let text2 = "";
let j = 0;
while (j < cars.length) {
  text2 += cars[j] + "<br>";
  j++;
}
document.getElementById("demo2").innerHTML = "While loop:<br>" + text2;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-for_vs_while/index.html)

## Document

Document in project

You can [Download PDF](js-while_loop.pdf) file.

## Reference

- [W3Schools JavaScript While Loop](https://www.w3schools.com/js/js_loop_while.asp)