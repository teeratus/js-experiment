# JavaScript RegExp Groups

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript RegExp Groups](#javascript-regexp-groups)
  - [RegExp Capturing Groups (x)](#regexp-capturing-groups-x)
    - [Example 1](#example-1)
  - [The Result Array](#the-result-array)
    - [Example 2](#example-2)
  - [Named Capturing Groups (?<n>)](#named-capturing-groups-n)
    - [Example 3](#example-3)
  - [Non-Capturing Groups (?:...)](#non-capturing-groups-)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## RegExp Groups

Groups allow you to combine multiple patterns as a single unit:

| Syntax | Description |
|--------|-------------|
| `(x)` | Capturing group - remembers the match |
| `(?<name>x)` | Named capturing group |
| `(?:x)` | Non-capturing group |
| `x(?=y)` | Lookahead |
| `x(?!y)` | Negative lookahead |
| `(?<=y)x` | Lookbehind |
| `(?<!y)x)` | Negative lookbehind |

## RegExp Capturing Groups (x)

Capturing groups `(...)` group patterns and remember the match:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Groups</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp Capturing Groups (x)</h4>
<p id="demo"></p>

<script>
const text = "John Smith, Jane Doe";
const matches = text.match(/(\w+) (\w+)/);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/(\\w+) (\\w+)/):<br>" +
  "Full match: " + matches[0] + "<br>" +
  "Group 1: " + matches[1] + "<br>" +
  "Group 2: " + matches[2];
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-capturing_groups/index.html)

## The Result Array

When using `match()`, capturing groups appear in the result array:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Groups</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Result Array</h4>
<p id="demo"></p>

<script>
const text = "Date: 2024-05-15";
const matches = text.match(/(\d{4})-(\d{2})-(\d{2})/);

let text2 = "Text: " + text + "<br><br>";
text2 += "match(/(\\d{4})-(\\d{2})-(\\d{2})/):<br><br>";
text2 += "matches[0] (full): " + matches[0] + "<br>";
text2 += "matches[1] (year): " + matches[1] + "<br>";
text2 += "matches[2] (month): " + matches[2] + "<br>";
text2 += "matches[3] (day): " + matches[3] + "<br><br>";
text2 += "index: " + matches.index + "<br>";
text2 += "input: " + matches.input;

document.getElementById("demo").innerHTML = text2;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-result_array/index.html)

## Named Capturing Groups (?<n>)

Named groups use `(?<name>...)` syntax. You can access matches by name:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Groups</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Named Capturing Groups (?<n>)</h4>
<p id="demo"></p>

<script>
const text = "Date: 2024-05-15";
const matches = text.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "Named groups:<br>" +
  "matches.groups.year: " + matches.groups.year + "<br>" +
  "matches.groups.month: " + matches.groups.month + "<br>" +
  "matches.groups.day: " + matches.groups.day;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-named_groups/index.html)

## Non-Capturing Groups (?:...)

Non-capturing groups `(?:...)` group patterns without remembering the match:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Groups</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Non-Capturing Groups (?:...)</h4>
<p id="demo"></p>

<script>
const text = "apple orange apple orange";
const matches = text.match(/(?:apple|orange)/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/(?:apple|orange)/g): " + matches + "<br><br>" +
  "Non-capturing groups don't save to result array:<br>" +
  "matches.length: " + matches.length;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-non_capturing/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_groups.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Groups](https://www.w3schools.com/js/js_regexp_groups.asp)