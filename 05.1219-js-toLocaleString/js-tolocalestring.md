# JavaScript toLocaleString()

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript toLocaleString()](#javascript-tolocalestring)
  - [The toLocaleString() Method](#the-tolocalestring-method)
    - [Example 1](#example-1)
  - [Using Locales](#using-locales)
    - [Example 2](#example-2)
  - [Formatting Currency](#formatting-currency)
    - [Example 3](#example-3)
  - [Formatting Percentages](#formatting-percentages)
    - [Example 4](#example-4)
  - [Controlling Decimal Digits](#controlling-decimal-digits)
    - [Example 5](#example-5)
  - [Formatting Dates](#formatting-dates)
    - [Example 6](#example-6)
  - [Date Formatting Options](#date-formatting-options)
    - [Example 7](#example-7)
  - [A Clever Use: Readable File Sizes](#a-clever-use-readable-file-sizes)
    - [Example 8](#example-8)
  - [Arrays and toLocaleString()](#arrays-and-tolocalestring)
    - [Example 9](#example-9)
  - [Document](#document)
  - [Reference](#reference)


The `toLocaleString()` method converts a value to a string, using local formatting rules. The `toLocaleString()` method is especially useful for formatting numbers, dates, arrays, currencies, and percentages for different countries.

## The toLocaleString() Method

The `toLocaleString()` method is available for many JavaScript datatypes / objects:

- Numbers
- Dates
- Arrays
- BigInts

In this example it is used on a Number (`num`):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The toLocaleString() Method</h4>
<p id="demo"></p>

<script>
let num = 1234567.89;

let text = num.toLocaleString();

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-tolocalestring_method/index.html)

## Using Locales

You can specify a language and country code to format a value for a specific locale.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Locales</h4>
<p id="demo"></p>

<script>
let num = 1234567.89;

let us = num.toLocaleString("en-US");
let de = num.toLocaleString("de-DE");
let no = num.toLocaleString("no-NO");

document.getElementById("demo").innerHTML =
  "en-US: " + us + "<br>" +
  "de-DE: " + de + "<br>" +
  "no-NO: " + no;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-using_locales/index.html)

## Formatting Currency

With options, `toLocaleString()` can format numbers as currency.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Formatting Currency</h4>
<p id="demo"></p>

<script>
let price = 1299.95;

let dollars = price.toLocaleString("en-US",
{style:"currency", currency:"USD"});

let euros = price.toLocaleString("de-DE",
{style:"currency", currency:"EUR"});

let kroner = price.toLocaleString("no-NO",
{style:"currency", currency:"NOK"});

document.getElementById("demo").innerHTML =
  dollars + "<br>" + euros + "<br>" + kroner;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-formatting_currency/index.html)

## Formatting Percentages

The `style:"percent"` option formats a number as a percentage.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Formatting Percentages</h4>
<p id="demo"></p>

<script>
let score = 0.875;

let result = score.toLocaleString("en-US", {style:"percent"});

document.getElementById("demo").innerHTML = result;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-formatting_percentages/index.html)

## Controlling Decimal Digits

You can control the number of decimal digits with `minimumFractionDigits` and `maximumFractionDigits`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Controlling Decimal Digits</h4>
<p id="demo"></p>

<script>
let num = 3.14159;

let text = num.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-decimal_digits/index.html)

## Formatting Dates

Dates can also be formatted with `toLocaleString()`.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Formatting Dates</h4>
<p id="demo"></p>

<script>
let date = new Date();

let text = date.toLocaleString("en-US");

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-formatting_dates/index.html)

## Date Formatting Options

Many options can be used to control how dates are displayed.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date Formatting Options</h4>
<p id="demo"></p>

<script>
let date = new Date();

let text = date.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-date_formatting_options/index.html)

## A Clever Use: Readable File Sizes

A clever use of `toLocaleString()` is to make file sizes easier to read.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>A Clever Use: Readable File Sizes</h4>
<p id="demo"></p>

<script>
function fileSize(bytes) {
  if (bytes < 1024) return bytes + " bytes";
  if (bytes < 1024 * 1024) return (bytes / 1024).toLocaleString("en-US", {maximumFractionDigits: 1}) + " KB";
  return (bytes / 1024 / 1024).toLocaleString("en-US", {maximumFractionDigits: 1}) + " MB";
}

let size = 1536000;
let text = fileSize(size);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p8.png)

### Example 8

**Result** [View Example](ex8-readable_file_sizes/index.html)

## Arrays and toLocaleString()

For arrays, the `toLocaleString()` methods converts each array element.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript toLocaleString()</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Arrays and toLocaleString()</h4>
<p id="demo"></p>

<script>
const dates = [
  new Date("2026-01-01"),
  new Date("2026-12-24")
];

let text = dates.toLocaleString("en-US");

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p9.png)

### Example 9

**Result** [View Example](ex9-arrays_tolocalestring/index.html)

## Document

Document in project

You can [Download PDF](js-tolocalestring.pdf) file.

## Reference

- [W3Schools JavaScript toLocaleString()](https://www.w3schools.com/js/js_tolocalestring.asp)