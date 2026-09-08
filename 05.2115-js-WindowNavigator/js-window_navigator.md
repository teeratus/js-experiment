# JavaScript Window Navigator

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Window Navigator](#javascript-window-navigator)
  - [Browser Cookies](#browser-cookies)
    - [Example 1](#example-1)
  - [The Browser Language](#the-browser-language)
    - [Example 2](#example-2)
  - [Is The Browser Online?](#is-the-browser-online)
    - [Example 3](#example-3)
  - [The Browser Agent](#the-browser-agent)
    - [Example 4](#example-4)
  - [The Browser Platform](#the-browser-platform)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## The Navigator Object

The `window.navigator` object contains information about the visitor's browser. It can be used to detect browser properties like cookies enabled, language, platform, and user agent.

## Browser Cookies

The `navigator.cookieEnabled` property returns true if cookies are enabled in the browser:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Navigator</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Browser Cookies</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "navigator.cookieEnabled: " + navigator.cookieEnabled;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-cookie_enabled/index.html)

## The Browser Language

The `navigator.language` property returns the browser's language:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Navigator</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Browser Language</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "navigator.language: " + navigator.language;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-browser_language/index.html)

## Is The Browser Online?

The `navigator.onLine` property returns true if the browser is online:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Navigator</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Is The Browser Online?</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "navigator.onLine: " + navigator.onLine;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-online/index.html)

## The Browser Agent

The `navigator.userAgent` property returns the user-agent string sent by the browser:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Navigator</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Browser Agent</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "navigator.userAgent: " + navigator.userAgent;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-user_agent/index.html)

## The Browser Platform

The `navigator.platform` property returns the browser platform (operating system):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Navigator</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The Browser Platform</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "navigator.platform: " + navigator.platform + "<br><br>" +
  "All navigator properties:<br>" +
  "cookieEnabled: " + navigator.cookieEnabled + "<br>" +
  "language: " + navigator.language + "<br>" +
  "onLine: " + navigator.onLine + "<br>" +
  "platform: " + navigator.platform + "<br>" +
  "appName: " + navigator.appName + "<br>" +
  "appVersion: " + navigator.appVersion + "<br>" +
  "userAgent: " + navigator.userAgent + "<br>" +
  "product: " + navigator.product + "<br>" +
  "appCodeName: " + navigator.appCodeName + "<br>" +
  "javaEnabled: " + navigator.javaEnabled();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-all_properties/index.html)

## Document

Document in project

You can [Download PDF](js-window_navigator.pdf) file.

## Reference

- [W3Schools JavaScript Window Navigator](https://www.w3schools.com/js/js_window_navigator.asp)