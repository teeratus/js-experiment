# JavaScript Date Methods

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Date Methods](#javascript-date-methods)
  - [Get the Current Time](#get-the-current-time)
    - [Example 1](#example-1)
  - [Date Get Methods](#date-get-methods)
    - [Example 2](#example-2)
  - [The Date.now() Method](#the-datenow-method)
    - [Example 3](#example-3)
  - [UTC Date Get Methods](#utc-date-get-methods)
    - [Example 4](#example-4)
  - [The getTimezoneOffset() Method](#the-gettimezoneoffset-method)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Get the Current Time

The `new Date()` constructor creates a date object with the current date and time:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Get the Current Time</h4>
<p id="demo"></p>

<script>
const d = new Date();
document.getElementById("demo").innerHTML = "Current date and time: " + d;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-current_time/index.html)

## Date Get Methods

Date get methods return parts of a date. The most common methods:

- `getFullYear()` - year (4 digits)
- `getMonth()` - month (0-11)
- `getDate()` - day of month (1-31)
- `getDay()` - day of week (0=Sunday)
- `getHours()` - hours (0-23)
- `getMinutes()` - minutes (0-59)
- `getSeconds()` - seconds (0-59)

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date Get Methods</h4>
<p id="demo"></p>

<script>
const d = new Date(2024, 5, 15, 14, 30, 45);

document.getElementById("demo").innerHTML =
  "getFullYear(): " + d.getFullYear() + "<br>" +
  "getMonth(): " + d.getMonth() + " (June = 5)<br>" +
  "getDate(): " + d.getDate() + "<br>" +
  "getDay(): " + d.getDay() + " (Saturday = 6)<br>" +
  "getHours(): " + d.getHours() + "<br>" +
  "getMinutes(): " + d.getMinutes() + "<br>" +
  "getSeconds(): " + d.getSeconds();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-get_methods/index.html)

## The Date.now() Method

`Date.now()` returns the number of milliseconds since January 1, 1970:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Date.now() Method</h4>
<p id="demo"></p>

<script>
// Date.now() returns milliseconds since Jan 1, 1970
const ms = Date.now();
const date = new Date(ms);

// Also getTime() returns the same
const d = new Date();
const time = d.getTime();

document.getElementById("demo").innerHTML =
  "Date.now(): " + ms + " ms<br>" +
  "new Date(Date.now()): " + date + "<br><br>" +
  "d.getTime(): " + time + " ms<br>" +
  "Date.now() === d.getTime(): " + (ms === time);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-date_now/index.html)

## UTC Date Get Methods

UTC methods return date parts according to UTC (Coordinated Universal Time):

- `getUTCFullYear()` - year in UTC
- `getUTCMonth()` - month in UTC
- `getUTCDate()` - day in UTC
- `getUTCDay()` - weekday in UTC
- `getUTCHours()` - hours in UTC

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>UTC Date Get Methods</h4>
<p id="demo"></p>

<script>
const d = new Date();

document.getElementById("demo").innerHTML =
  "Local vs UTC:<br><br>" +
  "getHours(): " + d.getHours() + " (local)<br>" +
  "getUTCHours(): " + d.getUTCHours() + " (UTC)<br><br>" +
  "getFullYear(): " + d.getFullYear() + " (local)<br>" +
  "getUTCFullYear(): " + d.getUTCFullYear() + " (UTC)<br><br>" +
  "getMonth(): " + d.getMonth() + " (local)<br>" +
  "getUTCMonth(): " + d.getUTCMonth() + " (UTC)<br><br>" +
  "UTC methods use the universal time standard";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-utc_methods/index.html)

## The getTimezoneOffset() Method

`getTimezoneOffset()` returns the difference (in minutes) between local time and UTC time:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The getTimezoneOffset() Method</h4>
<p id="demo"></p>

<script>
const d = new Date();

// Returns the timezone offset in minutes
const offset = d.getTimezoneOffset();

// Convert to hours
const offsetHours = offset / 60;

document.getElementById("demo").innerHTML =
  "getTimezoneOffset(): " + offset + " minutes<br>" +
  "Offset in hours: " + offsetHours + " hours<br><br>" +
  "This is the difference between your local time and UTC. " +
  "For example, Bangkok (UTC+7) has an offset of -420 minutes.";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-timezone_offset/index.html)

## Document

Document in project

You can [Download PDF](js-date_methods.pdf) file.

## Reference

- [W3Schools JavaScript Date Methods](https://www.w3schools.com/js/js_date_methods.asp)