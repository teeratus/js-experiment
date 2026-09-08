# JavaScript Project - Event Listener

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Project - Event Listener](#javascript-project---event-listener)
  - [Using Event Listeners](#using-event-listeners)
    - [Example 1](#example-1)
  - [Improvements](#improvements)
    - [Example 2](#example-2)
  - [JavaScript in External File](#javascript-in-external-file)
  - [DOMContentLoaded](#domcontentloaded)
  - [Document](#document)
  - [Reference](#reference)


## Using Event Listeners

Using `addEventListener()` makes it easier to:
- Keep HTML and JavaScript separated
- Add multiple events to the same element
- Write cleaner code in bigger projects

Here is the basic implementation using event listeners:

### HTML Code
```html
<h2>Counter</h2>

<p id="count" style="font-size:40px;">0</p>

<button id="btnPlus">+</button>
<button id="btnMinus">-</button>
<button id="btnReset">Reset</button>
<button id="btnSave">Save</button>
<button id="btnLoad">Load</button>

<script>
// Add event listeners
document.getElementById("btnPlus").addEventListener("click", increaseCount);
document.getElementById("btnMinus").addEventListener("click", decreaseCount);
document.getElementById("btnReset").addEventListener("click", resetCount);
document.getElementById("btnSave").addEventListener("click", saveCount);
document.getElementById("btnLoad").addEventListener("click", loadCount);

// Declare the counter
let count = 0;

// Load counter when the page opens
loadCount();

// Function to display the counter
function updateCount() {
  document.getElementById("count").innerHTML = count;
}

// Function to increase the counter
function increaseCount() {
  count++;
  updateCount();
}

// Function to decrease the counter
function decreaseCount() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

// Function to reset the counter
function resetCount() {
  count = 0;
  updateCount();
}

// Function to save the counter
function saveCount() {
  localStorage.setItem("count", count);
}

// Function to load the counter
function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
  }
  updateCount();
}
</script>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-using_eventlistener/index.html)


## Improvements

Here are the key improvements:
- JavaScript is moved to an external file (`counter.js`)
- Uses `DOMContentLoaded` so JavaScript runs only after the HTML is ready
- Cleaner structure using element variables
- Shows a temporary **Saved!** or **Loaded!** message

### HTML Code
```html
<!DOCTYPE html>
<html>
<body>

<h2>Counter</h2>

<p id="count" style="font-size:40px;">0</p>

<button id="btnPlus">+</button>
<button id="btnMinus">-</button>
<button id="btnReset">Reset</button>
<button id="btnSave">Save</button>
<button id="btnLoad">Load</button>

<!-- Message display paragraph -->
<p id="message"></p>

<script src="counter.js"></script>

</body>
</html>
```

### counter.js
```javascript
document.addEventListener("DOMContentLoaded", function () {

// Declare the counter
let count = 0;

// Use element variables
const countEl = document.getElementById("count");
const msgEl = document.getElementById("message");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnReset = document.getElementById("btnReset");
const btnSave = document.getElementById("btnSave");
const btnLoad = document.getElementById("btnLoad");

// Add event listeners
btnPlus.addEventListener("click", increaseCount);
btnMinus.addEventListener("click", decreaseCount);
btnReset.addEventListener("click", resetCount);
btnSave.addEventListener("click", saveCount);
btnLoad.addEventListener("click", loadCount);

// Function to display the counter
function updateCount() {
  countEl.innerHTML = count;
}

// Function to display message
function showMessage(text) {
  msgEl.innerHTML = text;
  setTimeout(function () {
    msgEl.innerHTML = "";
  }, 3000);
}

// Function to increase the counter
function increaseCount() {
  count++;
  updateCount();
}

// Function to decrease the counter
function decreaseCount() {
  count--;
  updateCount();
}

// Function to reset the counter
function resetCount() {
  count = 0;
  updateCount();
}

// Function to save the counter
function saveCount() {
  localStorage.setItem("count", count);
  showMessage("Saved!");
}

// Function to load the counter
function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
    showMessage("Loaded!");
  }
  updateCount();
}

});
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-improvements/index.html)


## JavaScript in External File

Using `counter.js` makes your project:
- More Organized
- Keeps HTML and JavaScript separated
- Easier to read and to reuse
- More like real-world projects


## DOMContentLoaded

Why use `DOMContentLoaded`?

When you use an external JavaScript file, the browser may load the script before the HTML is ready. So we wrap the initialization code inside:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // JavaScript code
});
```

This guarantees that the JavaScript code runs only after the page has finished parsing the HTML.


## Document

Document in project

You can [Download PDF](js-projecteventlistener.pdf) file.


## Reference

- [W3Schools JavaScript Event Listener Project](https://www.w3schools.com/js/js_project_eventlistener.asp)
