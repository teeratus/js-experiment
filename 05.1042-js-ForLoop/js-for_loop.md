# JavaScript For Loop

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript For Loop](#javascript-for-loop)
  - [The For Loop](#the-for-loop)
    - [Example 1](#example-1)
  - [How to use exp 1](#how-to-use-exp-1)
    - [Example 2](#example-2)
  - [How to use exp 2](#how-to-use-exp-2)
    - [Example 3](#example-3)
  - [How to use exp 3](#how-to-use-exp-3)
    - [Example 4](#example-4)
  - [Loop Scope](#loop-scope)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The For Loop

The `for` statement creates a loop with 3 optional expressions:

**exp 1** is executed (one time) before the execution of the code block.

**exp 2** defines the condition for executing the code block.

**exp 3** is executed (every time) after the code block has been executed.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The For Loop</h4>
<p id="demo"></p>

<script>
let text = "";
for (let i = 0; i < 5; i++) {
  text += "Number: " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-for_loop_basic/index.html)

## How to use exp 1

**exp 1** is used to initialize the variable(s) used in the loop (let i = 0).

**exp 1** is optional. You can omit exp 1 if the value is set before the loop starts:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>How to use exp 1</h4>
<p id="demo"></p>

<script>
let i = 0;
let text = "";
for (; i < 5; i++) {
  text += "Number: " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-omit_exp1/index.html)

## How to use exp 2

**exp 2** is used to evaluate the condition of the initial variable. If exp 2 returns `false`, the loop will end.

If you omit exp 2, you must provide a `break` inside the loop. Otherwise the loop will never end:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>How to use exp 2</h4>
<p id="demo"></p>

<script>
let text = "";
let i = 0;
for (; ; i++) {
  if (i > 4) break;
  text += "Number: " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-omit_exp2/index.html)

## How to use exp 3

**exp 3** increments the value of the initial variable (i++).

**exp 3** is optional. It can be omitted if you increment the value inside the loop:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>How to use exp 3</h4>
<p id="demo"></p>

<script>
let text = "";
let i = 0;
for (; i < 5; ) {
  text += "Number: " + i + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-omit_exp3/index.html)

## Loop Scope

Using `var` in a loop: the variable declared in the loop redeclares the variable outside the loop.

Using `let` in a loop: the variable declared in the loop does not redeclare the variable outside the loop:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Loop Scope (let)</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
let text = "";
for (let i = 0; i < 5; i++) {
  text += i + " ";
}
document.getElementById("demo1").innerHTML = "Loop values: " + text;
// i is NOT accessible here (let has block scope)
document.getElementById("demo2").innerHTML = "Using let: i is not accessible outside the loop";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-loop_scope/index.html)

## Document

Document in project

You can [Download PDF](js-for_loop.pdf) file.

## Reference

- [W3Schools JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)