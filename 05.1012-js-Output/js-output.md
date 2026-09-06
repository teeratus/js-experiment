# JavaScript Output

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Output](#javascript-output)
  - [JavaScript Display Possibilities](#javascript-display-possibilities)
  - [Using innerHTML](#using-innerhtml)
    - [Example 1](#example-1)
  - [Using document.write()](#using-documentwrite)
    - [Example 2](#example-2)
  - [Using window.alert()](#using-windowalert)
    - [Example 3](#example-3)
  - [Using console.log()](#using-consolelog)
    - [Example 4](#example-4)
  - [JavaScript Print](#javascript-print)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Display Possibilities

JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`.
- Writing into the browser console, using `console.log()`.


## Using innerHTML

To access an HTML element, JavaScript uses the `document.getElementById(id)` method.

The `innerHTML` property defines the HTML content.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Output</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using innerHTML</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-innerHTML/index.html)

## Using document.write()

For testing purposes, it is convenient to use `document.write()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Output</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using document.write()</h4>
<script>
document.write(5 + 6);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-document_write/index.html)

## Using window.alert()

You can use an alert box to display data:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Output</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using window.alert()</h4>
<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-window_alert/index.html)

## Using console.log()

For debugging purposes, you can call the `console.log()` method in the browser to display data.

You will need to activate the browser console with F12, and select "Console" in the menu.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Output</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using console.log()</h4>
<script>
console.log(5 + 6);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-console_log/index.html)

## JavaScript Print

JavaScript does not have any print object or print methods.

You cannot access output devices from JavaScript.

The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Output</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Print</h4>
<button onclick="window.print()">Print this page</button>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-print/index.html)

## Document

Document in project

You can [Download PDF](js-output.pdf) file.

## Reference

- [W3Schools JavaScript Output](https://www.w3schools.com/js/js_output.asp)