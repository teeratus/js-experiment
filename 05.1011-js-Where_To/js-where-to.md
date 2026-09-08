# JavaScript Where To

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Where To](#javascript-where-to)
  - [The script Tag](#the-script-tag)
    - [Example 1](#example-1)
  - [JavaScript in Head or Body](#javascript-in-head-or-body)
    - [Example 2](#example-2)
  - [JavaScript in Body](#javascript-in-body)
    - [Example 3](#example-3)
  - [External JavaScript](#external-javascript)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)

## The script Tag

In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

```html
<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A paragraph</p>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-script_tag/index.html)

## JavaScript in Head or Body

You can place any number of scripts in an HTML document.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.

```html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h2>Demo JavaScript in Head</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-head/index.html)

## JavaScript in Body

In this example, a JavaScript function is placed in the `<body>` section of an HTML page.

The function is invoked when a button is clicked.

```html
<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-body/index.html)

## External JavaScript

Scripts can also be placed in external files.

External scripts are useful when the same code is used in many different web pages.

```html
<!DOCTYPE html>
<html>
<body>

<h2>Demo External JavaScript</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script src="myScript.js"></script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-external_script/index.html)

## Document

Document in project

You can [Download PDF](js-where-to.pdf) file.

## Reference

- [W3Schools JavaScript Where To](https://www.w3schools.com/js/js_whereto.asp)
