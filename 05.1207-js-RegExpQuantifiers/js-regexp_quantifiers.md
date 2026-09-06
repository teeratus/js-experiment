# JavaScript RegExp Quantifiers

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript RegExp Quantifiers](#javascript-regexp-quantifiers)
  - [RegExp + Quantifier](#regexp--quantifier)
    - [Example 1](#example-1)
  - [RegExp * Quantifier](#regexp--quantifier-1)
    - [Example 2](#example-2)
  - [RegExp ? Quantifier](#regexp--quantifier-2)
    - [Example 3](#example-3)
  - [RegExp {n} Quantifier](#regexp-n-quantifier)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## RegExp Quantifiers

Quantifiers specify how many times a pattern should match:

| Quantifier | Description |
|------------|-------------|
| `+` | Match 1 or more times |
| `*` | Match 0 or more times |
| `?` | Match 0 or 1 times |
| `{n}` | Match exactly n times |
| `{n,m}` | Match between n and m times |
| `{n,}` | Match n or more times |

## RegExp + Quantifier

`+` matches 1 or more occurrences of the preceding character/pattern:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Quantifiers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp + Quantifier</h4>
<p id="demo"></p>

<script>
const text = "hello world hello!!";
const matches = text.match(/o+/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/o+/g): " + matches + "<br>" +
  "'+' matches one or more 'o' characters";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-plus/index.html)

## RegExp * Quantifier

`*` matches 0 or more occurrences of the preceding pattern:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Quantifiers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp * Quantifier</h4>
<p id="demo"></p>

<script>
const text = "Hello World";
const matches = text.match(/lo*/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/lo*/g): " + matches + "<br>" +
  "'*' matches zero or more 'o' characters after 'l'";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-star/index.html)

## RegExp ? Quantifier

`?` matches 0 or 1 occurrence of the preceding character:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Quantifiers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp ? Quantifier</h4>
<p id="demo"></p>

<script>
const text = "color colour";
const matches = text.match(/colou?r/g);

document.getElementById("demo").innerHTML =
  "Text: " + text + "<br><br>" +
  "match(/colou?r/g): " + matches + "<br>" +
  "'?' makes 'u' optional (0 or 1)";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-question/index.html)

## RegExp {n} Quantifier

`{n}` matches exactly n occurrences:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript RegExp Quantifiers</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>RegExp {n} Quantifier</h4>
<p id="demo"></p>

<script>
const phone = "555-123-4567";
const matches = phone.match(/\d{3}/g);
const match4 = phone.match(/\d{4}/g);

document.getElementById("demo").innerHTML =
  "Text: " + phone + "<br><br>" +
  "match(/\\d{3}/g): " + matches + " (exactly 3 digits)<br>" +
  "match(/\\d{4}/g): " + match4 + " (exactly 4 digits)";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-amount/index.html)

## Document

Document in project

You can [Download PDF](js-regexp_quantifiers.pdf) file.

## Reference

- [W3Schools JavaScript RegExp Quantifiers](https://www.w3schools.com/js/js_regexp_quantifiers.asp)