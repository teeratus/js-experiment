# JavaScript Web API Intro

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Web API Intro](#javascript-web-api-intro)
  - [What is Web API?](#what-is-web-api)
    - [Example 1](#example-1)
  - [Browser APIs](#browser-apis)
    - [Example 2](#example-2)
  - [Web Storage API](#web-storage-api)
    - [Example 3](#example-3)
  - [Third Party APIs](#third-party-apis)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## What is Web API?

API stands for **A**pplication **P**rogramming **I**nterface.

A Web API is an application programming interface for the web.

**Browser APIs** are built into your web browser. They extend the functionality of the browser.

**Third Party APIs** are not built into your browser. You need to download their code from the web.

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web API Intro</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What is Web API?</h4>
<p id="demo"></p>

<script>
// The Browser API is built into the browser
// It extends the browser's functionality

let text = "Browser APIs built into your browser:<br><br>";
text += "1. DOM API - Manipulate HTML elements<br>";
text += "2. Fetch API - Make HTTP requests<br>";
text += "3. Web Storage API - Store data locally<br>";
text += "4. History API - Navigate browser history<br>";
text += "5. Geolocation API - Get user location<br>";
text += "6. Canvas API - Draw graphics<br>";
text += "7. Console API - Debug code<br>";
text += "8. Timer API - setTimeout/setInterval<br>";
text += "9. Screen API - Get screen info<br>";
text += "10. Navigator API - Get browser info<br>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-what_is_api/index.html)

## Browser APIs

All browsers have a set of built-in Web APIs. Here are some of the most important ones:

| API | Description | Topic |
|-----|-------------|-------|
| **DOM API** | Access and modify HTML elements | `05.2101-05.2104` |
| **Fetch API** | Make HTTP requests to servers | `05.2061` |
| **Web Storage API** | Store data in the browser (localStorage/sessionStorage) | This topic |
| **History API** | Navigate browser history | `05.2114` |
| **Geolocation API** | Get user's geographic position | This topic |
| **Canvas API** | Draw graphics on a web page | External |
| **Console API** | Debug and log information | Built-in |
| **Screen API** | Get screen information | `05.2112` |
| **Navigator API** | Get browser/device info | `05.2115` |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web API Intro</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Browser APIs</h4>
<p id="demo"></p>

<script>
// Geolocation API example
let text = "Geolocation API - Checking browser support...<br><br>";

if (navigator.geolocation) {
  text += "✓ Geolocation is supported in this browser<br>";
  text += "✓ Fetch API is supported: " + ('fetch' in window) + "<br>";
  text += "✓ Web Storage is supported: " + ('localStorage' in window) + "<br>";
  text += "✓ History API is supported: " + ('history' in window) + "<br>";
  text += "✓ Console API is supported: " + ('console' in window) + "<br>";
} else {
  text += "✗ Geolocation is NOT supported";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-browser_apis/index.html)

## Web Storage API

The Web Storage API provides mechanisms for browsers to store key/value pairs:

- `localStorage` - stores data with no expiration date
- `sessionStorage` - stores data for one session (data is lost when the browser tab is closed)

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web API Intro</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Web Storage API</h4>
<p id="demo"></p>

<script>
// Store data using localStorage
localStorage.setItem("name", "John Doe");
localStorage.setItem("age", "30");

// Retrieve data
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

let text = "Web Storage API (localStorage):<br><br>";
text += "Stored name: " + name + "<br>";
text += "Stored age: " + age + "<br><br>";

// Count stored items
text += "Number of items: " + localStorage.length + "<br><br>";

// Remove an item
localStorage.removeItem("age");
text += "After removing 'age': " + localStorage.getItem("age") + " (null)<br><br>";

// Clear all storage
localStorage.clear();
text += "After clearing all storage: " + localStorage.length + " items";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-web_storage/index.html)

## Third Party APIs

Third Party APIs require you to download code from the web. Examples include:

- **Google Maps API** - Display maps on web pages
- **YouTube API** - Embed YouTube videos
- **Twitter API** - Display tweets
- **Facebook API** - Login with Facebook
- **Weather API** - Get weather data

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Web API Intro</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Third Party APIs</h4>
<p id="demo"></p>

<button onclick="fetchUsers()">Fetch Users (JSONPlaceholder API)</button>
<p id="result"></p>

<script>
function fetchUsers() {
  // Using the free JSONPlaceholder API (a third-party API)
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) { return response.json(); })
    .then(function(data) {
      let text = "Third Party API Result (JSONPlaceholder):<br><br>";
      for (let i = 0; i < 3; i++) {
        text += (i + 1) + ". " + data[i].name + " - " + data[i].email + "<br>";
      }
      text += "<br>... and " + (data.length - 3) + " more users";
      document.getElementById("result").innerHTML = text;
    })
    .catch(function(error) {
      document.getElementById("result").innerHTML = "Error: " + error.message;
    });

  document.getElementById("demo").innerHTML = "Fetching data from JSONPlaceholder API...";
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-third_party_apis/index.html)

## Document

Document in project

You can [Download PDF](js-web_api_intro.pdf) file.

## Reference

- [W3Schools JavaScript Web API Intro](https://www.w3schools.com/js/js_api_intro.asp)