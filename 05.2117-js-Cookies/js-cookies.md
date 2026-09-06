# JavaScript Cookies

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Cookies](#javascript-cookies)
  - [Create a Cookie](#create-a-cookie)
    - [Example 1](#example-1)
  - [Read a Cookie](#read-a-cookie)
    - [Example 2](#example-2)
  - [Change a Cookie](#change-a-cookie)
    - [Example 3](#example-3)
  - [Delete a Cookie](#delete-a-cookie)
    - [Example 4](#example-4)
  - [Cookie Functions](#cookie-functions)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## What are Cookies?

Cookies are data, stored in small text files on your computer. When a web server sends a web page to a browser, the connection is closed. The server forgets everything about the user. Cookies were invented to solve the problem of "remembering" the user.

## Create a Cookie

A cookie is created with `document.cookie`. You can add an expiry date (in UTC time) and a path:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Cookies</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Create a Cookie</h4>
<p id="demo"></p>

<button onclick="createCookie()">Create Cookie</button>

<script>
function createCookie() {
  document.cookie = "username=John Doe; expires=Thu, 31 Dec 2027 23:59:59 UTC; path=/";
  document.getElementById("demo").innerHTML = "Cookie 'username' created!";
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_cookie/index.html)

## Read a Cookie

You can read all cookies with `document.cookie`. It returns all cookies in one string:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Cookies</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Read a Cookie</h4>
<p id="demo"></p>

<button onclick="createCookie()">Create Cookie</button>
<button onclick="readCookie()">Read Cookie</button>

<script>
function createCookie() {
  document.cookie = "username=John Doe; expires=Thu, 31 Dec 2027 23:59:59 UTC; path=/";
  document.getElementById("demo").innerHTML = "Cookie 'username' created!";
}

function readCookie() {
  let cookies = document.cookie;
  document.getElementById("demo").innerHTML = "All cookies: " + cookies;
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-read_cookie/index.html)

## Change a Cookie

To change a cookie, just set it again with a new value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Cookies</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Change a Cookie</h4>
<p id="demo"></p>

<button onclick="createCookie()">Create Cookie</button>
<button onclick="changeCookie()">Change Cookie</button>
<button onclick="readCookie()">Read Cookie</button>

<script>
function createCookie() {
  document.cookie = "username=John Doe; expires=Thu, 31 Dec 2027 23:59:59 UTC; path=/";
  document.getElementById("demo").innerHTML = "Cookie 'username' created!";
}

function changeCookie() {
  document.cookie = "username=Jane Smith; expires=Thu, 31 Dec 2027 23:59:59 UTC; path=/";
  document.getElementById("demo").innerHTML = "Cookie 'username' changed to Jane Smith!";
}

function readCookie() {
  document.getElementById("demo").innerHTML = "All cookies: " + document.cookie;
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-change_cookie/index.html)

## Delete a Cookie

To delete a cookie, set the expires parameter to a past date:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Cookies</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Delete a Cookie</h4>
<p id="demo"></p>

<button onclick="createCookie()">Create Cookie</button>
<button onclick="deleteCookie()">Delete Cookie</button>
<button onclick="readCookie()">Check Cookies</button>

<script>
function createCookie() {
  document.cookie = "username=John Doe; expires=Thu, 31 Dec 2027 23:59:59 UTC; path=/";
  document.getElementById("demo").innerHTML = "Cookie created!";
}

function deleteCookie() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  document.getElementById("demo").innerHTML = "Cookie deleted!";
}

function readCookie() {
  document.getElementById("demo").innerHTML = "All cookies: " + document.cookie;
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-delete_cookie/index.html)

## Cookie Functions

Create a complete set of cookie functions for easier management:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Cookies</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Cookie Functions</h4>

<input type="text" id="nameInput" placeholder="Enter name" value="John">
<button onclick="saveName()">Save Name</button>
<br><br>
<button onclick="loadName()">Load Name</button>
<button onclick="deleteName()">Delete Name</button>
<p id="demo"></p>

<script>
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user !== "") {
    document.getElementById("demo").innerHTML = "Welcome back " + user;
  }
}

function saveName() {
  let name = document.getElementById("nameInput").value;
  setCookie("username", name, 365);
  document.getElementById("demo").innerHTML = "Name '" + name + "' saved in cookie!";
}

function loadName() {
  let user = getCookie("username");
  if (user !== "") {
    document.getElementById("demo").innerHTML = "Loaded: " + user;
  } else {
    document.getElementById("demo").innerHTML = "No cookie found!";
  }
}

function deleteName() {
  setCookie("username", "", -1);
  document.getElementById("demo").innerHTML = "Cookie deleted!";
}

checkCookie();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-cookie_functions/index.html)

## Document

Document in project

You can [Download PDF](js-cookies.pdf) file.

## Reference

- [W3Schools JavaScript Cookies](https://www.w3schools.com/js/js_cookies.asp)