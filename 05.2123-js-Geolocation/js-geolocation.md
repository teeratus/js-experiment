# JavaScript Geolocation API

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Geolocation API](#javascript-geolocation-api)
  - [Locate the User's Position](#locate-the-users-position)
    - [Example 1](#example-1)
  - [Handling Errors and Rejections](#handling-errors-and-rejections)
    - [Example 2](#example-2)
  - [Geolocation Object - Return Data](#geolocation-object---return-data)
    - [Example 3](#example-3)
  - [Watch Position](#watch-position)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Locate the User's Position

The `geolocation.getCurrentPosition()` method is used to get the user's current position:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Geolocation API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Locate the User's Position</h4>
<button onclick="getLocation()">Get My Position</button>
<p id="demo"></p>

<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-get_position/index.html)

## Handling Errors and Rejections

The second parameter of `getCurrentPosition()` is a callback function that handles errors:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Geolocation API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Handling Errors and Rejections</h4>
<button onclick="getLocation()">Get My Position</button>
<p id="demo"></p>

<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported.";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;
}

function showError(error) {
  let msg = "";
  switch(error.code) {
    case error.PERMISSION_DENIED:
      msg = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      msg = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      msg = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      msg = "An unknown error occurred.";
      break;
  }
  document.getElementById("demo").innerHTML = "Error: " + msg;
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-error_handling/index.html)

## Geolocation Object - Return Data

The `getCurrentPosition()` method returns an object with various properties:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Geolocation API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Geolocation Object - Return Data</h4>
<button onclick="getLocation()">Get My Full Position</button>
<p id="demo"></p>

<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported.";
  }
}

function showPosition(position) {
  const coords = position.coords;
  let text = "Position Object:<br><br>";
  text += "latitude: " + coords.latitude + "<br>";
  text += "longitude: " + coords.longitude + "<br>";
  text += "accuracy: " + coords.accuracy + " meters<br>";
  text += "altitude: " + coords.altitude + "<br>";
  text += "altitudeAccuracy: " + coords.altitudeAccuracy + " meters<br>";
  text += "heading: " + coords.heading + " degrees<br>";
  text += "speed: " + coords.speed + " m/s<br><br>";
  text += "Timestamp: " + new Date(position.timestamp).toLocaleString();
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-position_data/index.html)

## Watch Position

The `watchPosition()` method continuously monitors the user's position and calls a callback each time the position changes:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Geolocation API</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Watch Position</h4>
<button onclick="startWatch()">Start Watching</button>
<button onclick="stopWatch()">Stop Watching</button>
<p id="demo"></p>
<p id="watchStatus"></p>

<script>
let watchId = null;

function startWatch() {
  if (navigator.geolocation) {
    document.getElementById("watchStatus").innerHTML = "Watching position...";
    watchId = navigator.geolocation.watchPosition(showPosition, showError);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported.";
  }
}

function stopWatch() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    document.getElementById("watchStatus").innerHTML = "Watching stopped.";
  }
}

function showPosition(position) {
  document.getElementById("demo").innerHTML =
    "Updated position:<br>" +
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude + "<br>" +
    "Accuracy: " + position.coords.accuracy + " meters<br>" +
    "Time: " + new Date(position.timestamp).toLocaleTimeString();
}

function showError(error) {
  document.getElementById("demo").innerHTML = "Error: " + error.message;
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-watch_position/index.html)

## Document

Document in project

You can [Download PDF](js-geolocation.pdf) file.

## Reference

- [W3Schools JavaScript Geolocation API](https://www.w3schools.com/js/js_api_geolocation.asp)