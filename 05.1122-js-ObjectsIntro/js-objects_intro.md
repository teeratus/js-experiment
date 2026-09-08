# JavaScript Object Introduction

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Object Introduction](#javascript-object-introduction)
  - [What Are Objects?](#what-are-objects)
    - [Example 1](#example-1)
  - [Object Properties](#object-properties)
    - [Example 2](#example-2)
  - [Adding and Deleting Properties](#adding-and-deleting-properties)
    - [Example 3](#example-3)
  - [Nested Objects](#nested-objects)
    - [Example 4](#example-4)
  - [Iterating Over Properties](#iterating-over-properties)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## What Are Objects?

JavaScript objects are containers for named values called properties.

Objects are variables too. But objects can contain many values.

This code assigns many values (firstName, lastName, age) to a variable named person:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Introduction</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What Are Objects?</h4>
<p id="demo"></p>

<script>
// Create an object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "blue"
};

// Display object properties
document.getElementById("demo").innerHTML =
  "Car: " + car.brand + " " + car.model + " (" + car.year + ")";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-what_are_objects/index.html)

## Object Properties

Properties are the most important part of JavaScript objects. Properties can be accessed, added, changed, and removed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Introduction</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object Properties</h4>
<p id="demo"></p>

<script>
const student = {
  name: "Alice",
  grade: "A",
  subject: "Mathematics"
};

// Access properties using different methods
let text = "Student: " + student.name + "<br>";
text += "Grade: " + student["grade"] + "<br>";
text += "Subject: " + student["subject"] + "<br><br>";

// List all properties
text += "All properties: " + Object.keys(student).join(", ") + "<br>";
text += "Total properties: " + Object.keys(student).length;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-object_properties/index.html)

## Adding and Deleting Properties

You can add new properties to an object and delete existing ones:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Introduction</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding and Deleting Properties</h4>
<p id="demo"></p>

<script>
const book = {
  title: "JavaScript Guide",
  author: "John Doe",
  pages: 500
};

let text = "Original properties:<br>";
for (let key in book) {
  text += key + ": " + book[key] + "<br>";
}

// Add a new property
book.publisher = "Tech Books Inc.";
book.year = 2024;

text += "<br>After adding properties:<br>";
for (let key in book) {
  text += key + ": " + book[key] + "<br>";
}

// Delete a property
delete book.pages;

text += "<br>After deleting 'pages':<br>";
for (let key in book) {
  text += key + ": " + book[key] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-add_delete_properties/index.html)

## Nested Objects

Property values can be other objects, creating nested objects:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Introduction</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Nested Objects</h4>
<p id="demo"></p>

<script>
const user = {
  id: 1001,
  name: "John Doe",
  contact: {
    email: "john@example.com",
    phone: "555-1234",
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001"
    }
  }
};

// Access nested properties
document.getElementById("demo").innerHTML =
  "Name: " + user.name + "<br>" +
  "Email: " + user.contact.email + "<br>" +
  "Phone: " + user.contact.phone + "<br>" +
  "City: " + user.contact.address.city + "<br>" +
  "ZIP: " + user.contact.address.zip;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-nested_objects/index.html)

## Iterating Over Properties

You can loop through all properties of an object using `for...in`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Introduction</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Iterating Over Properties</h4>
<p id="demo"></p>

<script>
const fruit = {
  name: "Apple",
  color: "Red",
  taste: "Sweet",
  origin: "China",
  price: 1.25
};

let text = "<ul>";
for (let key in fruit) {
  text += "<li>" + key + ": " + fruit[key] + "</li>";
}
text += "</ul>";

// Count properties
text += "Total properties: " + Object.keys(fruit).length;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-iterating_properties/index.html)

## Document

Document in project

You can [Download PDF](js-objects_intro.pdf) file.

## Reference

- [W3Schools JavaScript Object Introduction](https://www.w3schools.com/js/js_objects.asp)