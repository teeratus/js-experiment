# JavaScript Dates

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Dates](#javascript-dates)
  - [Creating Date Objects](#creating-date-objects)
    - [Example 1](#example-1)
  - [new Date(year, month, ...)](#new-dateyear-month)
    - [Example 2](#example-2)
  - [JavaScript Stores Dates as Milliseconds](#javascript-stores-dates-as-milliseconds)
    - [Example 3](#example-3)
  - [Displaying Dates](#displaying-dates)
    - [Example 4](#example-4)
  - [Date Methods](#date-methods)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Creating Date Objects

Date objects are created with the `new Date()` constructor. There are 4 ways to create a date:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dates</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Creating Date Objects</h4>
<p id="demo"></p>

<script>
// new Date() - current date and time
const currentDate = new Date();

// new Date(date string)
const dateString = new Date("2024-02-14");

// new Date(year, month, day)
const specificDate = new Date(2024, 1, 14);

document.getElementById("demo").innerHTML =
  "new Date(): " + currentDate + "<br>" +
  "new Date('2024-02-14'): " + dateString + "<br>" +
  "new Date(2024, 1, 14): " + specificDate;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_dates/index.html)

## new Date(year, month, ...)

`new Date(year, month, day, hours, minutes, seconds, ms)` creates a date with the specified components. JavaScript counts months from 0 (January) to 11 (December):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dates</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>new Date(year, month, ...)</h4>
<p id="demo"></p>

<script>
// Month is 0-indexed: 0=Jan, 1=Feb, ..., 11=Dec
const date1 = new Date(2024, 0, 1);       // Jan 1, 2024
const date2 = new Date(2024, 5, 15, 12);  // Jun 15, 2024 at 12:00
const date3 = new Date(2024, 11, 31, 23, 59, 59); // Dec 31, 2024 at 23:59:59

// Using 2 numbers: year + month
const date4 = new Date(2024, 6);

document.getElementById("demo").innerHTML =
  "new Date(2024, 0, 1): " + date1 + "<br>" +
  "new Date(2024, 5, 15, 12): " + date2 + "<br>" +
  "new Date(2024, 11, 31, 23, 59, 59): " + date3 + "<br>" +
  "new Date(2024, 6): " + date4;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-date_numbers/index.html)

## JavaScript Stores Dates as Milliseconds

JavaScript stores dates as the number of milliseconds since January 1, 1970, 00:00:00 UTC:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dates</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Stores Dates as Milliseconds</h4>
<p id="demo"></p>

<script>
// Zero time is January 1, 1970
const zeroTime = new Date(0);

// One day in milliseconds: 24 * 60 * 60 * 1000
const oneDay = 24 * 60 * 60 * 1000;
const oneDayAfter = new Date(oneDay);

// Current time in milliseconds
const nowMs = Date.now();

document.getElementById("demo").innerHTML =
  "new Date(0): " + zeroTime + " (Jan 1, 1970)<br>" +
  "new Date(86400000): " + oneDayAfter + " (Jan 2, 1970)<br>" +
  "Date.now(): " + nowMs + " ms<br><br>" +
  "Dates are stored as milliseconds since Jan 1, 1970";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-milliseconds/index.html)

## Displaying Dates

Dates can be displayed in different formats using various methods:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dates</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Displaying Dates</h4>
<p id="demo"></p>

<script>
const d = new Date(2024, 5, 15, 12, 30, 45);

document.getElementById("demo").innerHTML =
  "toString(): " + d.toString() + "<br>" +
  "toDateString(): " + d.toDateString() + "<br>" +
  "toISOString(): " + d.toISOString() + "<br>" +
  "toUTCString(): " + d.toUTCString() + "<br>" +
  "toLocaleDateString(): " + d.toLocaleDateString() + "<br>" +
  "toLocaleTimeString(): " + d.toLocaleTimeString();
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-display_dates/index.html)

## Date Methods

Common date getter methods:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dates</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date Methods</h4>
<p id="demo"></p>

<script>
const d = new Date(2024, 5, 15, 12, 30, 45);

document.getElementById("demo").innerHTML =
  "getFullYear(): " + d.getFullYear() + "<br>" +
  "getMonth(): " + d.getMonth() + " (0-11)<br>" +
  "getDate(): " + d.getDate() + "<br>" +
  "getDay(): " + d.getDay() + " (0=Sunday)<br>" +
  "getHours(): " + d.getHours() + "<br>" +
  "getMinutes(): " + d.getMinutes() + "<br>" +
  "getSeconds(): " + d.getSeconds() + "<br>" +
  "getMilliseconds(): " + d.getMilliseconds() + "<br>" +
  "getTime(): " + d.getTime();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-date_methods/index.html)

## Document

Document in project

You can [Download PDF](js-dates.pdf) file.

## Reference

- [W3Schools JavaScript Dates](https://www.w3schools.com/js/js_dates.asp)