# JavaScript HTML-First

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript HTML-First](#javascript-html-first)
  - [What Is HTML-First?](#what-is-html-first)
    - [Example 1](#example-1)
  - [Progressive Enhancement](#progressive-enhancement)
    - [Example 2](#example-2)
  - [Browsers Are Already Powerful](#browsers-are-already-powerful)
    - [Example 3](#example-3)
  - [Semantic HTML Improves Accessibility](#semantic-html-improves-accessibility)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## What Is HTML-First?

HTML-First is an approach to web development where you start with HTML to handle basic functionality before adding JavaScript.

This means:

- Use HTML form validation before adding JavaScript validation
- Use CSS for styling before using JavaScript for animations
- Write semantic HTML that works without JavaScript
- Add JavaScript only when necessary to enhance the user experience

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML-First</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What Is HTML-First?</h4>
<p>HTML-first means starting with HTML before adding JavaScript.</p>

<!-- HTML handles the form validation -->
<form action="/action_page.php" method="post">
  <label for="fname">First name (required):</label>
  <input type="text" id="fname" name="fname" required>
  <input type="submit" value="Submit">
</form>
<p>The required attribute is pure HTML validation - no JavaScript needed.</p>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-what_is_htmlfirst/index.html)

## Progressive Enhancement

Progressive enhancement means starting with a basic HTML version that works everywhere, then adding JavaScript to enhance the experience for browsers that support it:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML-First</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Progressive Enhancement</h4>

<!-- Basic HTML structure works without JavaScript -->
<details>
  <summary>Click to toggle content (HTML only)</summary>
  <p>This content can be shown/hidden without JavaScript using the HTML <details> element.</p>
</details>

<p id="demo"></p>

<script>
// JavaScript enhancement: Show a message if JavaScript is enabled
document.getElementById("demo").innerHTML = "JavaScript is enabled - page enhanced!";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-progressive_enhancement/index.html)

## Browsers Are Already Powerful

Modern browsers have built-in HTML features that reduce the need for JavaScript:

- `<input type="date">` - Date picker without JavaScript
- `<input type="range">` - Slider without JavaScript
- `<input type="email">` - Email validation without JavaScript
- `<details>` - Expandable content without JavaScript

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML-First</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Browsers Are Already Powerful</h4>

<p>HTML date picker (no JavaScript needed):</p>
<input type="date">

<p>HTML range slider (no JavaScript needed):</p>
<input type="range" min="0" max="100">

<p>HTML color picker (no JavaScript needed):</p>
<input type="color">

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-browser_powerful/index.html)

## Semantic HTML Improves Accessibility

Semantic HTML elements help screen readers and assistive technologies understand the structure of your page. Using proper HTML elements is better than relying on JavaScript for accessibility:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML-First</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Semantic HTML Improves Accessibility</h4>

<!-- Using semantic HTML elements -->
<nav>
  <a href="#">Home</a> |
  <a href="#">About</a> |
  <a href="#">Contact</a>
</nav>

<main>
  <article>
    <h5>Article Title</h5>
    <p>This article uses semantic HTML elements like <article>, <nav>, and <main>.</p>
  </article>
</main>

<p id="demo">Semantic HTML works without JavaScript and improves accessibility.</p>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-semantic_html/index.html)

## Document

Document in project

You can [Download PDF](js-htmlfirst.pdf) file.

## Reference

- [W3Schools JavaScript HTML-First](https://www.w3schools.com/js/js_htmlfirst.asp)