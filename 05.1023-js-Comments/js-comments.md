# JavaScript Comments

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Comments](#javascript-comments)
  - [Single Line Comments](#single-line-comments)
    - [Example 1](#example-1)
  - [Multi-line Comments](#multi-line-comments)
    - [Example 2](#example-2)
  - [Using Comments to Prevent Execution](#using-comments-to-prevent-execution)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Single Line Comments

Single line comments start with `//`.

Any text between `//` and the end of the line will be ignored by JavaScript (will not be executed).

Single-line comments before each code line to explain the code:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comments</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Single Line Comments</h4>
<p id="demo"></p>

<script>
// Change heading
document.getElementById("demo").innerHTML = "Your first name";
// Change paragraph
document.getElementById("demo").innerHTML = "Peter";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-single_line_comments/index.html)

## Multi-line Comments

Multi-line comments start with `/*` and end with `*/`.

Any text between `/*` and `*/` will be ignored by JavaScript.

This example uses a multi-line comment (a comment block) to explain the code:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comments</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Multi-line Comments</h4>
<p id="demo"></p>

<script>
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
*/
let x = 5;
let y = 6;
document.getElementById("demo").innerHTML = x + y;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-multi_line_comments/index.html)

## Using Comments to Prevent Execution

Using comments to prevent execution of code is suitable for code testing.

Adding `//` in front of a code line changes the code lines from an executable line to a comment.

This example uses `//` to prevent execution of one of the code lines, and uses a comment block to prevent execution of multiple lines:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comments</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Comments to Prevent Execution</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
//document.getElementById("demo1").innerHTML = "This line is commented out";
document.getElementById("demo1").innerHTML = "Hello Dolly!";

/*
document.getElementById("demo2").innerHTML = "This is block commented out";
document.getElementById("demo2").innerHTML = "Also block commented out";
*/
document.getElementById("demo2").innerHTML = "Only this runs!";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-prevent_execution/index.html)

## Document

Document in project

You can [Download PDF](js-comments.pdf) file.

## Reference

- [W3Schools JavaScript Comments](https://www.w3schools.com/js/js_comments.asp)