# JavaScript Date Reference

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Date Reference](#javascript-date-reference)
  - [Date Get Methods](#date-get-methods)
    - [Example 1](#example-1)
  - [Date Set Methods](#date-set-methods)
    - [Example 2](#example-2)
  - [Date Display Methods](#date-display-methods)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Date Get Methods

Reference table for all Date get methods:

| Method | Description |
|--------|-------------|
| `getFullYear()` | Year (4 digits) |
| `getMonth()` | Month (0-11) |
| `getDate()` | Day of month (1-31) |
| `getDay()` | Day of week (0=Sunday) |
| `getHours()` | Hours (0-23) |
| `getMinutes()` | Minutes (0-59) |
| `getSeconds()` | Seconds (0-59) |
| `getMilliseconds()` | Milliseconds (0-999) |
| `getTime()` | Milliseconds since Jan 1, 1970 |
| `Date.now()` | Same as getTime() but static |
| `getTimezoneOffset()` | Minutes between local and UTC |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date Get Methods</h4>
<p id="demo"></p>

<script>
const d = new Date(2024, 5, 15, 12, 30, 45, 123);

document.getElementById("demo").innerHTML =
  "getFullYear(): " + d.getFullYear() + "<br>" +
  "getMonth(): " + d.getMonth() + "<br>" +
  "getDate(): " + d.getDate() + "<br>" +
  "getDay(): " + d.getDay() + "<br>" +
  "getHours(): " + d.getHours() + "<br>" +
  "getMinutes(): " + d.getMinutes() + "<br>" +
  "getSeconds(): " + d.getSeconds() + "<br>" +
  "getMilliseconds(): " + d.getMilliseconds() + "<br>" +
  "getTime(): " + d.getTime();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-get_methods/index.html)

## Date Set Methods

Reference table for all Date set methods:

| Method | Description |
|--------|-------------|
| `setFullYear()` | Set year |
| `setMonth()` | Set month (0-11) |
| `setDate()` | Set day of month (1-31) |
| `setHours()` | Set hours (0-23) |
| `setMinutes()` | Set minutes (0-59) |
| `setSeconds()` | Set seconds (0-59) |
| `setMilliseconds()` | Set milliseconds (0-999) |
| `setTime()` | Set time (milliseconds) |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date Set Methods</h4>
<p id="demo"></p>

<script>
const d = new Date();
d.setFullYear(2024);
d.setMonth(5);
d.setDate(15);
d.setHours(12);
d.setMinutes(30);
d.setSeconds(45);

document.getElementById("demo").innerHTML = "After using set methods:<br>" + d;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-set_methods/index.html)

## Date Display Methods

Reference table for display methods:

| Method | Description |
|--------|-------------|
| `toString()` | Standard string format |
| `toDateString()` | Date only, no time |
| `toISOString()` | ISO 8601 format |
| `toUTCString()` | UTC string format |
| `toLocaleDateString()` | Local date format |
| `toLocaleTimeString()` | Local time format |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Reference</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date Display Methods</h4>
<p id="demo"></p>

<script>
const d = new Date(2024, 5, 15, 12, 30);

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

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-display_methods/index.html)

## Document

Document in project

You can [Download PDF](js-date_reference.pdf) file.

## Reference

- [W3Schools JavaScript Date Reference](https://www.w3schools.com/js/js_date_reference.asp)