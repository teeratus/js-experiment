# JavaScript RegExp Flags

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript RegExp Flags](#javascript-regexp-flags)
  - [RegExp /g Flag (Global)](#regexp-g-flag-global)
    - [Example 1](#example-1)
  - [RegExp /i Flag (Insensitive)](#regexp-i-flag-insensitive)
    - [Example 2](#example-2)
  - [RegExp /m Flag (Multiline)](#regexp-m-flag-multiline)
    - [Example 3](#example-3)
  - [RegExp /y Flag (Sticky)](#regexp-y-flag-sticky)
    - [Example 4](#example-4)
  - [RegExp /u Flag (Unicode)](#regexp-u-flag-unicode)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## RegExp Modifier Flags

Flags modify how a regular expression searches for patterns. The syntax is `/pattern/flags`:

| Flag | Description |
|------|-------------|
| `/g` | Global - matches all occurrences |
| `/i` | Insensitive - case insensitive |
| `/m` | Multiline - ^ and $ match line breaks |
| `/s` | DotAll - `.` matches newlines too |
| `/y` | Sticky - matches only from lastIndex |
| `/u` | Unicode - proper Unicode handling |

## RegExp /g Flag (Global)

The `/g` flag searches for **all** occurrences, not just the first:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Flags</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp /g Flag (Global)</h4>
<p id="demo"></p>

<script>
const text = "apple banana apple cherry apple";

// Without /g - only first match
const first = text.match(/apple/);

// With /g - all matches
const all = text.match(/apple/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "without /g: " + first + "<br>" +
  "with /g: " + all + " (all occurrences)";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-global_flag/index.html)

## RegExp /i Flag (Insensitive)

The `/i` flag makes the search **case insensitive**:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Flags</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp /i Flag (Insensitive)</h4>
<p id="demo"></p>

<script>
const text = "JavaScript is FUN!";

// Case sensitive
const sensitive = text.match(/fun/);

// Case insensitive
const insensitive = text.match(/fun/i);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/fun/): " + sensitive + " (no match)<br>" +
  "match(/fun/i): " + insensitive + " (matched)";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-insensitive_flag/index.html)

## RegExp /m Flag (Multiline)

The `/m` flag makes `^` and `$` match the beginning/end of each line:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Flags</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp /m Flag (Multiline)</h4>
<p id="demo"></p>

<script>
const text = "line1\nline2\nline3";

// Without /m - ^ only matches start of string
const withoutM = text.match(/^line/g);

// With /m - ^ matches start of each line
const withM = text.match(/^line/gm);

document.getElementById("demo").innerHTML =
  "Text:<br>" + text + "<br><br>" +
  "match(/^line/g): " + withoutM + "<br>" +
  "match(/^line/gm): " + withM + " (each line)";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-multiline_flag/index.html)

## RegExp /y Flag (Sticky)

The `/y` flag makes the search **sticky** - it only matches starting at `lastIndex`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Flags</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp /y Flag (Sticky)</h4>
<p id="demo"></p>

<script>
const text = "abcabc";
const sticky = /abc/y;

// First match at position 0
const first = sticky.exec(text);

// After lastIndex = 3, matches "abc" again at position 3
const second = sticky.exec(text);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "sticky = /abc/y<br>" +
  "First exec: " + first[0] + " at index " + first.index + "<br>" +
  "lastIndex after: " + sticky.lastIndex + "<br>" +
  "Second exec: " + second[0] + " at index " + second.index;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-sticky_flag/index.html)

## RegExp /u Flag (Unicode)

The `/u` flag enables proper Unicode handling:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Flags</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp /u Flag (Unicode)</h4>
<p id="demo"></p>

<script>
const text = "Café 100";

// \d finds ASCII digits only
const asciiDigits = text.match(/\d/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/\\d/g): " + asciiDigits + "<br><br>" +
  "<b>Other flag properties:</b><br>" +
  "global: " + /a/g.global + "<br>" +
  "ignoreCase: " + /a/i.ignoreCase + "<br>" +
  "multiline: " + /a/m.multiline + "<br>" +
  "sticky: " + /a/y.sticky + "<br>" +
  "unicode: " + /a/u.unicode;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-unicode_flag/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_flags.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Flags](https://www.w3schools.com/js/js_regexp_flags.asp)