# JavaScript Validation

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Validation](#javascript-validation)
  - [JavaScript Form Validation](#javascript-form-validation)
    - [Example 1](#example-1)
  - [JavaScript Can Validate Numeric Input](#javascript-can-validate-numeric-input)
    - [Example 2](#example-2)
  - [Automatic HTML Form Validation](#automatic-html-form-validation)
    - [Example 3](#example-3)
  - [Data Validation](#data-validation)
  - [HTML Constraint Validation](#html-constraint-validation)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Form Validation

HTML form validation can be done by JavaScript.

If a form field (fname) is empty, the `required` attribute prevents form submission:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Form Validation</h4>
<form action="/action_page.php" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" required>
  <input type="submit" value="Submit">
</form>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-form_validation/index.html)

## JavaScript Can Validate Numeric Input

JavaScript is often used to validate numeric input:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Validate Numeric Input</h4>
<p>Please input a number between 1 and 10:</p>
<input id="numb">
<button type="button" onclick="myFunction()">Submit</button>
<p id="demo"></p>

<script>
function myFunction() {
  let x = document.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-numeric_validation/index.html)

## Automatic HTML Form Validation

HTML form validation can be performed automatically by the browser using the `required` attribute:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Automatic HTML Form Validation</h4>
<form action="/action_page.php" method="post">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <input type="submit" value="Submit">
</form>
<p>The required attribute prevents submission if the field is empty.</p>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-auto_validation/index.html)

## Data Validation

Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks:

- Has the user filled in all required fields?
- Has the user entered a valid date?
- Has the user entered text in a numeric field?
- Has the user entered a valid email address?

**Constraint Validation HTML Input Attributes**

| Attribute | Description |
|-----------|-------------|
| `required` | Specifies that an input field must be filled in |
| `min` / `max` | Specifies min/max value of an input field |
| `minlength` / `maxlength` | Specifies min/max length of text input |
| `type` | Specifies the type of input (email, number, etc.) |
| `pattern` | Specifies a regex pattern for input validation |

## HTML Constraint Validation

Constraint validation in HTML is based on:

- **Constraint validation HTML Input Attributes** - described above
- **Constraint validation CSS Pseudo Selectors** - style form elements based on validity:
  - `:valid` - Selects form elements with a valid value
  - `:invalid` - Selects form elements with an invalid value

Example: Input fields with `type="email"` will automatically be validated when the form is submitted. The `:valid` and `:invalid` CSS pseudo-classes allow you to style valid/invalid fields.

## Document

Document in project

You can [Download PDF](js-validation.pdf) file.

## Reference

- [W3Schools JavaScript Validation](https://www.w3schools.com/js/js_validation.asp)