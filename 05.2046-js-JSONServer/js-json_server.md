# JavaScript JSON Server

[Back to JS page](../index.html)

Table of Contents
- [JavaScript JSON Server](#javascript-json-server)
  - [Loading JSON from a Server](#loading-json-from-a-server)
    - [Example 1](#example-1)
  - [Loading a JSON Array](#loading-a-json-array)
    - [Example 2](#example-2)
  - [Handling Errors](#handling-errors)
    - [Example 3](#example-3)
  - [Sending JSON](#sending-json)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## The fetch() Method

The `fetch()` method is used to send and receive data from a server.

It returns a Promise that resolves to a Response object.

The `response.json()` method parses the response body as JSON.

## Loading JSON from a Server

Use `fetch()` to load a JSON file from a server, then use `response.json()` to parse it:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Server</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Loading JSON from a Server</h4>
<p id="demo"></p>

<script>
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
    document.getElementById("demo").innerHTML =
      "Name: " + data.name + "<br>" +
      "Email: " + data.email + "<br>" +
      "City: " + data.address.city;
  })
  .catch(error => {
    document.getElementById("demo").innerHTML = "Error: " + error.message;
  });
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-load_json/index.html)

## Loading a JSON Array

You can also load a JSON array from a server:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Server</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Loading a JSON Array</h4>
<p id="demo"></p>

<script>
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let text = "<ul>";
    for (let user of data) {
      text += "<li>" + user.name + " - " + user.email + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;
  })
  .catch(error => {
    document.getElementById("demo").innerHTML = "Error: " + error.message;
  });
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-load_array/index.html)

## Handling Errors

Always handle errors when loading JSON from a server. Check the response status:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Server</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Handling Errors</h4>
<p id="demo"></p>

<script>
fetch('https://jsonplaceholder.typicode.com/users/nonexistent')
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("demo").innerHTML = "Name: " + data.name;
  })
  .catch(error => {
    document.getElementById("demo").innerHTML = "Error: " + error.message;
  });
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-error_handling/index.html)

## Sending JSON

You can use `fetch()` with the `POST` method to send JSON data to a server:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript JSON Server</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Sending JSON</h4>
<p id="demo"></p>

<script>
const userData = {
  name: "John Doe",
  email: "john@example.com",
  username: "johndoe"
};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
})
  .then(response => response.json())
  .then(data => {
    document.getElementById("demo").innerHTML =
      "User created!<br>" +
      "ID: " + data.id + "<br>" +
      "Name: " + data.name + "<br>" +
      "Email: " + data.email;
  })
  .catch(error => {
    document.getElementById("demo").innerHTML = "Error: " + error.message;
  });
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-send_json/index.html)

## Document

Document in project

You can [Download PDF](js-json_server.pdf) file.

## Reference

- [W3Schools JavaScript JSON Server](https://www.w3schools.com/js/js_json_server.asp)