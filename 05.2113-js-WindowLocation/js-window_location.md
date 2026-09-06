# JavaScript Window Location

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Window Location](#javascript-window-location)
  - [Window Location Href](#window-location-href)
    - [Example 1](#example-1)
  - [Window Location Hostname](#window-location-hostname)
    - [Example 2](#example-2)
  - [Window Location Pathname](#window-location-pathname)
    - [Example 3](#example-3)
  - [Window Location Protocol](#window-location-protocol)
    - [Example 4](#example-4)
  - [Window Location Assign](#window-location-assign)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Window Location Href

The `window.location.href` property returns the URL of the current page:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Location</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Location Href</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Page URL (href): " + window.location.href;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-location_href/index.html)

## Window Location Hostname

The `window.location.hostname` property returns the domain name of the web host:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Location</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Location Hostname</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Page hostname: " + window.location.hostname;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-location_hostname/index.html)

## Window Location Pathname

The `window.location.pathname` property returns the pathname of the current page:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Location</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Location Pathname</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Page pathname: " + window.location.pathname;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-location_pathname/index.html)

## Window Location Protocol

The `window.location.protocol` property returns the web protocol of the page (http: or https:):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Location</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Location Protocol</h4>
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
  "Page protocol: " + window.location.protocol;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-location_protocol/index.html)

## Window Location Assign

The `window.location.assign()` method loads a new document (navigates to a new URL):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Window Location</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Window Location Assign</h4>
<p id="demo"></p>

<button onclick="showAllProperties()">Show All Location Properties</button>
<p id="demo2"></p>

<script>
function showAllProperties() {
  const loc = window.location;
  document.getElementById("demo2").innerHTML =
    "href: " + loc.href + "<br>" +
    "hostname: " + loc.hostname + "<br>" +
    "pathname: " + loc.pathname + "<br>" +
    "protocol: " + loc.protocol + "<br>" +
    "port: " + loc.port + "<br>" +
    "host: " + loc.host + "<br>" +
    "origin: " + loc.origin;
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-location_properties/index.html)

## Document

Document in project

You can [Download PDF](js-window_location.pdf) file.

## Reference

- [W3Schools JavaScript Window Location](https://www.w3schools.com/js/js_window_location.asp)