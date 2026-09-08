# JavaScript Code Blocks

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Code Blocks](#javascript-code-blocks)
  - [Code Blocks and Statements](#code-blocks-and-statements)
    - [Example 1](#example-1)
  - [Defining Scope](#defining-scope)
    - [Example 2](#example-2)
  - [Standalone Blocks](#standalone-blocks)
    - [Example 3](#example-3)
  - [Encapsulation](#encapsulation)
    - [Example 4](#example-4)
  - [Organized Code](#organized-code)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Code Blocks and Statements

JavaScript statements are grouped together in **code blocks**. A code block is defined by curly braces `{}`.

Statements inside the same block execute together:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Code Blocks</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Code Blocks and Statements</h4>
<p id="demo"></p>

<script>
// A code block groups statements together
{
  let x = 5;
  let y = 10;
  let result = x + y;
  document.getElementById("demo").innerHTML =
    "x = " + x + "<br>" +
    "y = " + y + "<br>" +
    "x + y = " + result;
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-code_block/index.html)

## Defining Scope

Code blocks define scope for variables declared with `let` and `const`. Variables declared inside a block are only accessible within that block:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Code Blocks</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Defining Scope</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
// Outside block scope
let globalResult = 0;

{
  // Inside block scope
  let blockResult = 42;
  globalResult = blockResult * 2;
  document.getElementById("demo1").innerHTML =
    "Inside block - blockResult: " + blockResult;
}

// blockResult is NOT accessible here
// globalResult IS accessible
document.getElementById("demo2").innerHTML =
  "Outside block - globalResult: " + globalResult + "<br>" +
  "blockResult is not accessible outside the block";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-defining_scope/index.html)

## Standalone Blocks

Blocks can be used on their own, without functions or control flow. They are useful for organizing temporary code:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Code Blocks</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Standalone Blocks</h4>
<p id="demo"></p>

<script>
// Standalone block - no function or if statement needed
{
  let name = "Alice";
  let score = 95;

  let grade = score >= 90 ? "A" : "B";

  document.getElementById("demo").innerHTML =
    "Student: " + name + "<br>" +
    "Score: " + score + "<br>" +
    "Grade: " + grade;
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-standalone_block/index.html)

## Encapsulation

Code blocks provide **encapsulation** - temporary variables are kept inside the block and don't pollute the global scope:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Code Blocks</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Encapsulation</h4>
<p id="demo"></p>

<script>
let message = ""; // Global variable

{
  // Temporary variables - only used inside the block
  let temp1 = 15;
  let temp2 = 25;
  let sum = temp1 + temp2;

  message = "Sum of temporary values: " + sum;
}

// temp1, temp2, and sum are NOT accessible here
// They are encapsulated inside the block
document.getElementById("demo").innerHTML =
  message + "<br><br>" +
  "Temporary variables were kept inside the block";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-encapsulation/index.html)

## Organized Code

Code blocks help organize code into logical sections, making it easier to read and maintain:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Code Blocks</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Organized Code</h4>
<p id="demo"></p>

<script>
// Section 1: Calculate area
{
  const radius = 5;
  let area = Math.PI * radius * radius;
  document.getElementById("demo").innerHTML +=
    "Circle area: " + area.toFixed(2) + "<br>";
}

// Section 2: Calculate perimeter
{
  const width = 10;
  const height = 6;
  let perimeter = 2 * (width + height);
  document.getElementById("demo").innerHTML +=
    "Rectangle perimeter: " + perimeter + "<br>";
}

// Section 3: Display summary
{
  let summary = "Code organized into logical sections";
  document.getElementById("demo").innerHTML += "<br>" + summary;
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-organized_code/index.html)

## Document

Document in project

You can [Download PDF](js-code_blocks.pdf) file.

## Reference

- [W3Schools JavaScript Code Blocks](https://www.w3schools.com/js/js_codeblocks.asp)