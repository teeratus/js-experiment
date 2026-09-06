# JavaScript HTML Features

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript HTML Features](#javascript-html-features)
  - [The details Element](#the-details-element)
    - [Example 1](#example-1)
  - [HTML Form Validation](#html-form-validation)
    - [Example 2](#example-2)
  - [Input Types](#input-types)
    - [Example 3](#example-3)
  - [The datalist Element](#the-datalist-element)
    - [Example 4](#example-4)
  - [The dialog Element](#the-dialog-element)
    - [Example 5](#example-5)
  - [Lazy Loading Images](#lazy-loading-images)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## The details Element

The `<details>` element creates a disclosure widget that can be opened and closed without JavaScript:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The details Element</h4>

<details>
  <summary>Click to open (HTML only)</summary>
  <p>This content is shown/hidden using the HTML <details> element. No JavaScript required!</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</details>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-details_element/index.html)

## HTML Form Validation

HTML5 provides built-in form validation using attributes like `required`, `min`, `max`, `pattern`, etc.:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>HTML Form Validation</h4>

<form action="/action_page.php">
  <label for="fname">Name (required):</label>
  <input type="text" id="fname" name="fname" required>
  <br><br>

  <label for="age">Age (min=18, max=99):</label>
  <input type="number" id="age" name="age" min="18" max="99">
  <br><br>

  <label for="phone">Phone (pattern 10 digits):</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{10}">
  <br><br>

  <input type="submit" value="Submit">
</form>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-form_validation/index.html)

## Input Types

HTML5 introduced many new input types that provide native UI controls and validation:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Input Types</h4>

<form>
  <label>Color: <input type="color"></label><br><br>
  <label>Date: <input type="date"></label><br><br>
  <label>Range: <input type="range"></label><br><br>
  <label>Email: <input type="email"></label><br><br>
  <label>URL: <input type="url"></label><br><br>
  <label>Search: <input type="search"></label><br><br>
  <label>Tel: <input type="tel"></label><br><br>
  <label>Number: <input type="number"></label>
</form>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-input_types/index.html)

## The datalist Element

The `<datalist>` element provides an autocomplete feature for input fields:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The datalist Element</h4>

<form>
  <label for="browser">Choose a browser:</label>
  <input list="browsers" id="browser" name="browser">
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Edge">
    <option value="Safari">
    <option value="Opera">
  </datalist>
  <input type="submit">
</form>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-datalist_element/index.html)

## The dialog Element

The `<dialog>` element creates a native modal dialog without JavaScript:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The dialog Element</h4>

<dialog id="myDialog">
  <p>This is a native HTML dialog!</p>
  <button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>

<p>The <dialog> element is a modern HTML feature for modal dialogs.</p>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-dialog_element/index.html)

## Lazy Loading Images

The `loading="lazy"` attribute tells the browser to defer loading of images until the user scrolls near them:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML Features</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Lazy Loading Images</h4>

<p>The loading="lazy" attribute defers image loading until the user scrolls near the image.</p>

<img src="https://www.w3schools.com/js/pic_bulboff.gif" alt="Bulb off" loading="lazy" width="100" height="180">

<p>Scroll down to see the lazy-loaded image below (if viewing on a small screen):</p>

<br><br><br><br><br><br><br><br><br><br>

<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools" loading="lazy" width="200" height="200">

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-lazy_loading/index.html)

## Document

Document in project

You can [Download PDF](js-html_features.pdf) file.

## Reference

- [W3Schools JavaScript HTML Features](https://www.w3schools.com/js/js_htmlfirst_features.asp)