# JavaScript Web Storage API

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Web Storage API](#javascript-web-storage-api)
  - [The localStorage Object](#the-localstorage-object)
    - [Example 1](#example-1)
  - [The setItem() and getItem() Methods](#the-setitem-and-getitem-methods)
    - [Example 2](#example-2)
  - [The sessionStorage Object](#the-sessionstorage-object)
    - [Example 3](#example-3)
  - [Storage Object Properties and Methods](#storage-object-properties-and-methods)
    - [Example 4](#example-4)
  - [Practical Example - Visitor Counter](#practical-example---visitor-counter)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The localStorage Object

The `localStorage` object stores data with no expiration date. The data is NOT deleted when the browser is closed, and will be available the next day, week, or year.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web Storage API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The localStorage Object</h4>
<p id="demo"></p>

<script>
// Store data
localStorage.setItem("name", "John Doe");
localStorage.setItem("age", "30");
localStorage.setItem("city", "New York");

// Retrieve data
document.getElementById("demo").innerHTML =
  "Stored in localStorage:<br><br>" +
  "name: " + localStorage.getItem("name") + "<br>" +
  "age: " + localStorage.getItem("age") + "<br>" +
  "city: " + localStorage.getItem("city");
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-localstorage/index.html)

## The setItem() and getItem() Methods

`setItem(key, value)` stores data. `getItem(key)` retrieves data. Values are stored as strings:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web Storage API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The setItem() and getItem() Methods</h4>

<input type="text" id="keyInput" placeholder="Key" value="color">
<input type="text" id="valueInput" placeholder="Value" value="blue">
<br><br>
<button onclick="saveItem()">Save Item</button>
<button onclick="loadItem()">Load Item</button>
<button onclick="removeItem()">Remove Item</button>
<p id="demo2"></p>

<script>
function saveItem() {
  const key = document.getElementById("keyInput").value;
  const value = document.getElementById("valueInput").value;
  localStorage.setItem(key, value);
  document.getElementById("demo2").innerHTML =
    "Saved: " + key + " = " + value;
}

function loadItem() {
  const key = document.getElementById("keyInput").value;
  const value = localStorage.getItem(key);
  if (value !== null) {
    document.getElementById("demo2").innerHTML =
      "Loaded: " + key + " = " + value;
  } else {
    document.getElementById("demo2").innerHTML =
      "Key '" + key + "' not found!";
  }
}

function removeItem() {
  const key = document.getElementById("keyInput").value;
  localStorage.removeItem(key);
  document.getElementById("demo2").innerHTML =
    "Removed: " + key;
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-set_get_item/index.html)

## The sessionStorage Object

The `sessionStorage` object stores data for one session only. The data is deleted when the browser tab is closed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web Storage API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The sessionStorage Object</h4>
<p id="demo3"></p>

<script>
// Store session data
sessionStorage.setItem("sessionId", "abc123");
sessionStorage.setItem("startTime", new Date().toLocaleTimeString());

// Retrieve session data
document.getElementById("demo3").innerHTML =
  "sessionStorage data (will be deleted when tab closes):<br><br>" +
  "sessionId: " + sessionStorage.getItem("sessionId") + "<br>" +
  "startTime: " + sessionStorage.getItem("startTime");
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-sessionstorage/index.html)

## Storage Object Properties and Methods

The Storage object provides these properties and methods:

| Method/Property | Description |
|----------------|-------------|
| `setItem(key, value)` | Stores a key/value pair |
| `getItem(key)` | Retrieves a value by key |
| `removeItem(key)` | Removes a key/value pair |
| `clear()` | Removes all key/value pairs |
| `key(index)` | Gets the key at a specific index |
| `length` | Returns the number of stored items |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web Storage API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Storage Object Properties and Methods</h4>
<p id="demo4"></p>

<button onclick="showAll()">Show All Items</button>
<button onclick="clearAll()">Clear All</button>

<script>
function showAll() {
  let text = "Number of items: " + localStorage.length + "<br><br>";
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    text += "[" + i + "] " + key + ": " + value + "<br>";
  }
  
  if (localStorage.length === 0) {
    text += "(empty)";
  }
  
  document.getElementById("demo4").innerHTML = text;
}

function clearAll() {
  localStorage.clear();
  document.getElementById("demo4").innerHTML = "All items cleared! (" + localStorage.length + " items)";
}

// Add some demo items if empty
if (localStorage.length === 0) {
  localStorage.setItem("demo1", "value1");
  localStorage.setItem("demo2", "value2");
  localStorage.setItem("demo3", "value3");
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-storage_properties/index.html)

## Practical Example - Visitor Counter

A practical example using localStorage to count and remember visitors:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web Storage API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Practical Example - Visitor Counter</h4>
<p id="counter"></p>
<p id="firstVisit"></p>
<p id="lastVisit"></p>

<button onclick="resetCounter()">Reset Counter</button>

<script>
function updateCounter() {
  let count = localStorage.getItem("visitCount");
  
  if (count === null) {
    count = 0;
    localStorage.setItem("firstVisit", new Date().toLocaleString());
  } else {
    count = parseInt(count);
  }
  
  count++;
  localStorage.setItem("visitCount", count);
  localStorage.setItem("lastVisit", new Date().toLocaleString());
  
  document.getElementById("counter").innerHTML = 
    "You have visited this page " + count + " time(s).";
  
  document.getElementById("firstVisit").innerHTML = 
    "First visit: " + localStorage.getItem("firstVisit");
    
  document.getElementById("lastVisit").innerHTML = 
    "Last visit: " + localStorage.getItem("lastVisit");
}

function resetCounter() {
  localStorage.removeItem("visitCount");
  localStorage.removeItem("firstVisit");
  localStorage.removeItem("lastVisit");
  updateCounter();
}

updateCounter();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-visitor_counter/index.html)

## Document

Document in project

You can [Download PDF](js-web_storage.pdf) file.

## Reference

- [W3Schools JavaScript Web Storage API](https://www.w3schools.com/js/js_api_web_storage.asp)