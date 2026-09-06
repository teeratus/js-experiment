# JavaScript Temporal

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Temporal](#javascript-temporal)
  - [What is JavaScript Temporal?](#what-is-javascript-temporal)
    - [Example 1](#example-1)
  - [Temporal.Instant](#temporalinstant)
    - [Example 2](#example-2)
  - [Temporal.PlainDate](#temporalplaindate)
    - [Example 3](#example-3)
  - [Temporal.Now](#temporalnow)
    - [Example 4](#example-4)
  - [Temporal Arithmetic](#temporal-arithmetic)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## What is JavaScript Temporal?

**Temporal** is a new JavaScript API for date and time. It solves the problems of the old `Date` object.

Temporal provides separate objects for different use cases:

| Object | Description |
|--------|-------------|
| `Temporal.Instant` | A point in time (UTC) |
| `Temporal.PlainDate` | A date without time |
| `Temporal.PlainTime` | A time without date |
| `Temporal.PlainDateTime` | Date and time without timezone |
| `Temporal.Duration` | A duration of time |
| `Temporal.ZonedDateTime` | Date and time with timezone |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Temporal</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What is JavaScript Temporal?</h4>
<p id="demo"></p>

<script>
let text = "Temporal vs Date:<br><br>";
text += "<b>Temporal provides:</b><br>";
text += "1. Separate objects for different date/time needs<br>";
text += "2. Immutable objects (safer)<br>";
text += "3. Better timezone support<br>";
text += "4. Simple arithmetic operations<br>";
text += "5. Clearer API names<br><br>";

// Check browser support
if (typeof Temporal !== "undefined") {
  text += "✓ Temporal is supported in this browser";
} else {
  text += "✗ Temporal needs a polyfill in this browser";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-what_is_temporal/index.html)

## Temporal.Instant

A `Temporal.Instant` represents a single point in time, always in UTC:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Temporal</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Temporal.Instant</h4>
<p id="demo"></p>

<script>
// Get the current instant (if available)
if (typeof Temporal !== "undefined") {
  const now = Temporal.Now.instant();
  document.getElementById("demo").innerHTML =
    "Temporal.Now.instant(): " + now.toString() + "<br>" +
    "Epoch milliseconds: " + now.epochMilliseconds + "<br>" +
    "Epoch seconds: " + now.epochSeconds;
} else {
  document.getElementById("demo").innerHTML =
    "Temporal is not supported in this browser.<br>" +
    "Use Date.now() instead: " + Date.now() + " ms";
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-instant/index.html)

## Temporal.PlainDate

A `Temporal.PlainDate` represents a date without time or timezone:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Temporal</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Temporal.PlainDate</h4>
<p id="demo"></p>

<script>
if (typeof Temporal !== "undefined") {
  // Create a plain date
  const date = Temporal.PlainDate.from("2024-05-15");

  document.getElementById("demo").innerHTML =
    "Temporal.PlainDate.from('2024-05-15'): " + date.toString() + "<br>" +
    "Year: " + date.year + "<br>" +
    "Month: " + date.month + "<br>" +
    "Day: " + date.day + "<br>" +
    "Day of week: " + date.dayOfWeek;
} else {
  document.getElementById("demo").innerHTML =
    "Temporal is not supported in this browser.";
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-plain_date/index.html)

## Temporal.Now

`Temporal.Now` provides easy access to the current date and time in different forms:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Temporal</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Temporal.Now</h4>
<p id="demo"></p>

<script>
if (typeof Temporal !== "undefined") {
  document.getElementById("demo").innerHTML =
    "Temporal.Now.instant(): " + Temporal.Now.instant().toString() + "<br>" +
    "Temporal.Now.zonedDateTimeISO(): " + Temporal.Now.zonedDateTimeISO().toString() + "<br>" +
    "Temporal.Now.plainDateTimeISO(): " + Temporal.Now.plainDateTimeISO().toString() + "<br>" +
    "Temporal.Now.plainDateISO(): " + Temporal.Now.plainDateISO().toString() + "<br>" +
    "Temporal.Now.plainTimeISO(): " + Temporal.Now.plainTimeISO().toString();
} else {
  document.getElementById("demo").innerHTML =
    "Temporal is not supported in this browser.<br>" +
    "Equivalent Date.now(): " + new Date().toLocaleString();
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-now/index.html)

## Temporal Arithmetic

Temporal makes date arithmetic simple and intuitive:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Temporal</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Temporal Arithmetic</h4>
<p id="demo"></p>

<script>
if (typeof Temporal !== "undefined") {
  const date = Temporal.PlainDate.from("2024-05-15");

  // Add and subtract durations
  const plusWeek = date.add({ days: 7 });
  const minusMonth = date.subtract({ months: 1 });

  // Compare dates
  const date2 = Temporal.PlainDate.from("2024-06-01");
  const isBefore = Temporal.PlainDate.compare(date, date2);

  document.getElementById("demo").innerHTML =
    "Date: " + date.toString() + "<br>" +
    "Add 7 days: " + plusWeek.toString() + "<br>" +
    "Subtract 1 month: " + minusMonth.toString() + "<br><br>" +
    "Compare with 2024-06-01: " + isBefore + " (-1 = before, 0 = equal, 1 = after)";
} else {
  document.getElementById("demo").innerHTML =
    "Temporal is not supported in this browser.";
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-arithmetic/index.html)

## Document

Document in project

You can [Download PDF](js-temporal.pdf) file.

## Reference

- [W3Schools JavaScript Temporal](https://www.w3schools.com/js/js_temporal.asp)