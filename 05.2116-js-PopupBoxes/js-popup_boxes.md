# JavaScript Popup Boxes

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Popup Boxes](#javascript-popup-boxes)
  - [Alert Box](#alert-box)
    - [Example 1](#example-1)
  - [Confirm Box](#confirm-box)
    - [Example 2](#example-2)
  - [Prompt Box](#prompt-box)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## Alert Box

An alert box is often used to display information to the user. It has an OK button.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Popup Boxes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Alert Box</h4>
<p id="demo"></p>

<button onclick="showAlert()">Show Alert</button>

<script>
function showAlert() {
  alert("Hello! This is an alert box.");
  document.getElementById("demo").innerHTML = "Alert box was displayed!";
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-alert_box/index.html)

## Confirm Box

A confirm box asks the user to confirm something. It has OK and Cancel buttons.

- If the user clicks OK, the box returns `true`
- If the user clicks Cancel, the box returns `false`

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Popup Boxes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Confirm Box</h4>
<p id="demo"></p>

<button onclick="showConfirm()">Show Confirm</button>

<script>
function showConfirm() {
  let text;
  if (confirm("Do you want to continue?")) {
    text = "You clicked OK!";
  } else {
    text = "You clicked Cancel!";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-confirm_box/index.html)

## Prompt Box

A prompt box asks the user to input a value. It has OK and Cancel buttons.

- If the user clicks OK, the box returns the input value
- If the user clicks Cancel, the box returns `null`

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Popup Boxes</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Prompt Box</h4>
<p id="demo"></p>

<button onclick="showPrompt()">Show Prompt</button>

<script>
function showPrompt() {
  let person = prompt("Please enter your name:", "John Doe");
  if (person != null && person != "") {
    document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
  }
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-prompt_box/index.html)

## Document

Document in project

You can [Download PDF](js-popup_boxes.pdf) file.

## Reference

- [W3Schools JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)