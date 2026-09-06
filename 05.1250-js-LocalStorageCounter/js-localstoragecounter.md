# JavaScript localStorage Counter

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript localStorage Counter](#javascript-localstorage-counter)
  - [Project Overview](#project-overview)
  - [1. Create the HTML](#1-create-the-html)
    - [Example 1](#example-1)
  - [2. Create a Script](#2-create-a-script)
    - [Example 2](#example-2)
  - [3. Add an Increase Counter Function](#3-add-an-increase-counter-function)
    - [Example 3](#example-3)
  - [4. Add a Decrease Counter Function](#4-add-a-decrease-counter-function)
    - [Example 4](#example-4)
  - [5. Add a Reset Counter Function](#5-add-a-reset-counter-function)
    - [Example 5](#example-5)
  - [6. Create a Save Counter Function](#6-create-a-save-counter-function)
    - [Example 6](#example-6)
  - [7. Create a Load Counter Function](#7-create-a-load-counter-function)
    - [Example 7](#example-7)
  - [Exercises & Solutions](#exercises--solutions)
    - [Example 8](#example-8)
  - [Document](#document)
  - [Reference](#reference)


## Project Overview

In this project, you will build a counter with buttons to:
- **Increase** the counter
- **Decrease** the counter
- **Reset** the counter
- **Save** the counter to local storage
- **Load** the counter from local storage

### Project Skills Required:
- JavaScript Variables
- JavaScript Functions
- JavaScript HTML DOM
- JavaScript Events (`onclick` attributes)
- JavaScript `localStorage` (to Save and Restore the counter)


## 1. Create the HTML

Create the basic HTML layout containing the counter display and buttons:
- Add a `<h2>` header element.
- Add a `<p>` element displaying a number.
- Add 5 `<button>` elements.
- Add an `onclick` attribute to each button to trigger JavaScript functions.

```html
<h2>Counter</h2>

<p id="count" style="font-size:40px;">0</p>

<button onclick="increaseCount()">+</button>
<button onclick="decreaseCount()">-</button>
<button onclick="resetCount()">Reset</button>
<button onclick="saveCount()">Save</button>
<button onclick="loadCount()">Load</button>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_html/index.html)


## 2. Create a Script

Create a script that:
- Declares a counter variable: `let count = 0`
- Creates a function `updateCount()` to update the display
- Uses `document.getElementById().innerHTML` to display the counter value

```html
<script>
// Declare a counter
let count = 0;

// Function to display the counter
function updateCount() {
  document.getElementById("count").innerHTML = count;
}
</script>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-create_script/index.html)


## 3. Add an Increase Counter Function

- Create `increaseCount()` to handle incrementing.
- Use `count++` to increase the counter.
- Call `updateCount()` to refresh the display.

```javascript
// Function to increase the counter
function increaseCount() {
  count++;
  updateCount();
}
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-increase_counter/index.html)


## 4. Add a Decrease Counter Function

- Create `decreaseCount()` to handle decrementing.
- Use `count--` to decrease the counter.
- Call `updateCount()` to refresh the display.

```javascript
// Function to decrease the counter
function decreaseCount() {
  count--;
  updateCount();
}
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-decrease_counter/index.html)


## 5. Add a Reset Counter Function

- Create `resetCount()` to reset.
- Set `count = 0` to reset the counter value.
- Call `updateCount()` to refresh the display.

```javascript
// Function to reset the counter
function resetCount() {
  count = 0;
  updateCount();
}
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-reset_counter/index.html)


## 6. Create a Save Counter Function

- Create `saveCount()` to save.
- Use `localStorage.setItem()` to store the current count value as text.

```javascript
// Function to save the counter
function saveCount() {
  localStorage.setItem("count", count);
}
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-save_counter/index.html)


## 7. Create a Load Counter Function

- Create `loadCount()` to load.
- Use `localStorage.getItem()` to get the saved value.
- Use `Number(saved)` to convert the saved text back into a number.
- Call `updateCount()` to refresh the display.

```javascript
// Function to load the counter
function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
  }
  updateCount();
}
```

> [!NOTE]
> `localStorage` stores values as text, so we use `Number()` to convert the value back into a number.

![](images/p7.png)

### Example 7

**Result** [View Example](ex7-load_counter/index.html)


## Exercises & Solutions

### Exercise 1
Make the counter start at 10 instead of 0.

### Exercise 2
Prevent the counter from going below 0.

### Exercise 3
Automatically load the saved counter value when the page opens.

### Solutions Code

```html
<h2>Counter</h2>

<p id="count" style="font-size:40px;">0</p>

<button onclick="increaseCount()">+</button>
<button onclick="decreaseCount()">-</button>
<button onclick="resetCount()">Reset</button>
<button onclick="saveCount()">Save</button>
<button onclick="loadCount()">Load</button>

<script>
// Declare the counter (starts at 10)
let count = 10;

// Load the counter when the page opens
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

// Function to decrease the counter (prevent going below 0)
function decreaseCount() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

// Function to reset the counter (resets to 10)
function resetCount() {
  count = 10;
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

![](images/p8.png)

### Example 8

**Result** [View Example](ex8-exercises_solutions/index.html)


## Document

Document in project

You can [Download PDF](js-localstoragecounter.pdf) file.


## Reference

- [W3Schools JavaScript Counter Project](https://www.w3schools.com/js/js_project_counter.asp)
