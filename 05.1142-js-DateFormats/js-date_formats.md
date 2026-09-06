# JavaScript Date Formats

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Date Formats](#javascript-date-formats)
  - [JavaScript ISO Dates](#javascript-iso-dates)
    - [Example 1](#example-1)
  - [ISO Dates (Date-Time)](#iso-dates-date-time)
    - [Example 2](#example-2)
  - [JavaScript Short Dates](#javascript-short-dates)
    - [Example 3](#example-3)
  - [JavaScript Long Dates](#javascript-long-dates)
    - [Example 4](#example-4)
  - [Date Input - Parsing Dates](#date-input---parsing-dates)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript ISO Dates

**ISO 8601** is the international standard for the representation of dates and times. The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Formats</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript ISO Dates</h4>
<p id="demo"></p>

<script>
// Complete date (year-month-day)
const completeDate = new Date("2024-03-15");

// Year and month (yyyy-mm)
const yearMonth = new Date("2024-03");

// Only year (yyyy)
const onlyYear = new Date("2024");

document.getElementById("demo").innerHTML =
  "new Date('2024-03-15'): " + completeDate + "<br>" +
  "new Date('2024-03'): " + yearMonth + "<br>" +
  "new Date('2024'): " + onlyYear;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-iso_dates/index.html)

## ISO Dates (Date-Time)

ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Formats</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>ISO Dates (Date-Time)</h4>
<p id="demo"></p>

<script>
// Date and time with T separator
const dateTime = new Date("2024-03-15T10:30:00");

// Date and time with UTC (Z = Zulu time / UTC)
const utcTime = new Date("2024-03-15T10:30:00Z");

// Date and time with timezone offset
const timezoneTime = new Date("2024-03-15T10:30:00+07:00");

document.getElementById("demo").innerHTML =
  "With T separator: " + dateTime + "<br>" +
  "With Z (UTC): " + utcTime + "<br>" +
  "With +07:00 offset: " + timezoneTime;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-iso_datetime/index.html)

## JavaScript Short Dates

Short dates are written with the "MM/DD/YYYY" syntax. Be careful with month/day order:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Formats</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Short Dates</h4>
<p id="demo"></p>

<script>
// Short date format: MM/DD/YYYY
const shortDate1 = new Date("03/15/2024");   // March 15, 2024

// Short date with dashes
const shortDate2 = new Date("2024-03-15");

// Short date or long date
const shortDate3 = new Date("March 15, 2024");

document.getElementById("demo").innerHTML =
  "MM/DD/YYYY: " + shortDate1 + "<br>" +
  "YYYY-MM-DD: " + shortDate2 + "<br>" +
  "Month name: " + shortDate3;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-short_dates/index.html)

## JavaScript Long Dates

Long dates are most often written with a "MMM DD YYYY" syntax. Month and day can be in any order:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Formats</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Long Dates</h4>
<p id="demo"></p>

<script>
// Long date formats
const longDate1 = new Date("Mar 15 2024");          // Month name short
const longDate2 = new Date("March 15, 2024");       // Full month name
const longDate3 = new Date("15 Mar 2024");          // Day first

// With time
const longDate4 = new Date("March 15, 2024 10:30:00");

document.getElementById("demo").innerHTML =
  "Mar 15 2024: " + longDate1 + "<br>" +
  "March 15, 2024: " + longDate2 + "<br>" +
  "15 Mar 2024: " + longDate3 + "<br>" +
  "March 15, 2024 10:30:00: " + longDate4;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-long_dates/index.html)

## Date Input - Parsing Dates

If you have a valid date string, you can use the `Date.parse()` method to convert it to milliseconds and back to a Date object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Date Formats</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Date Input - Parsing Dates</h4>
<p id="demo"></p>

<script>
// Date.parse() converts a date string to milliseconds
let ms = Date.parse("March 15, 2024");
const parsedDate = new Date(ms);

// Parse ISO format
let ms2 = Date.parse("2024-03-15T10:30:00");
const parsedDate2 = new Date(ms2);

document.getElementById("demo").innerHTML =
  "Date.parse('March 15, 2024'): " + ms + " ms<br>" +
  "new Date(ms): " + parsedDate + "<br><br>" +
  "Date.parse('2024-03-15T10:30:00'): " + ms2 + " ms<br>" +
  "new Date(ms2): " + parsedDate2;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-parse_dates/index.html)

## Document

Document in project

You can [Download PDF](js-date_formats.pdf) file.

## Reference

- [W3Schools JavaScript Date Formats](https://www.w3schools.com/js/js_date_formats.asp)