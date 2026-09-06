# JavaScript Date Set Methods

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Date Set Methods](#javascript-date-set-methods)
  - [The setFullYear() Method](#the-setfullyear-method)
    - [Example 1](#example-1)
  - [The setMonth() and setDate() Methods](#the-setmonth-and-setdate-methods)
    - [Example 2](#example-2)
  - [The setHours() and setMinutes() Methods](#the-sethours-and-setminutes-methods)
    - [Example 3](#example-3)
  - [Compare Dates](#compare-dates)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Set Date Methods

Set methods allow you to set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

## The setFullYear() Method

`setFullYear()` sets the year of a date object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The setFullYear() Method</h4>
<p id="demo"></p>

<script>
const d = new Date();
d.setFullYear(2020);

document.getElementById("demo").innerHTML =
  "After setFullYear(2020):<br>" + d;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-set_full_year/index.html)

## The setMonth() and setDate() Methods

`setMonth()` sets the month (0-11). `setDate()` sets the day of month (1-31):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The setMonth() and setDate() Methods</h4>
<p id="demo"></p>

<script>
// Set to March (month 2)
const d1 = new Date();
d1.setMonth(2);

// Set to day 15
const d2 = new Date();
d2.setDate(15);

document.getElementById("demo").innerHTML =
  "setMonth(2) - March: " + d1 + "<br>" +
  "setDate(15): " + d2;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-set_month_date/index.html)

## The setHours() and setMinutes() Methods

`setHours()` sets the hours (0-23). `setMinutes()` sets the minutes (0-59):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The setHours() and setMinutes() Methods</h4>
<p id="demo"></p>

<script>
// Set hours to 14 (2 PM)
const d1 = new Date();
d1.setHours(14);

// Set minutes to 45
const d2 = new Date();
d2.setMinutes(45);

document.getElementById("demo").innerHTML =
  "setHours(14) - 2 PM: " + d1 + "<br>" +
  "setMinutes(45): " + d2;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-set_hours_minutes/index.html)

## Compare Dates

Dates can easily be compared using comparison operators (`<`, `>`, `==`, `!=`):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Set Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Compare Dates</h4>
<p id="demo"></p>

<script>
let text = "";

const today = new Date();
const someday = new Date();
someday.setFullYear(2100);

if (someday > today) {
  text = "Today is before 2100.";
} else {
  text = "Today is after 2100.";
}

// Also compare with getTime()
const d1 = new Date(2024, 0, 1);
const d2 = new Date(2024, 0, 15);
text += "<br><br>d1 (Jan 1) < d2 (Jan 15): " + (d1.getTime() < d2.getTime());

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-compare_dates/index.html)

## Document

Document in project

You can [Download PDF](js-date_set_methods.pdf) file.

## Reference

- [W3Schools JavaScript Date Set Methods](https://www.w3schools.com/js/js_date_methods_set.asp)