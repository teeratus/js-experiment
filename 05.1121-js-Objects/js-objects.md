# JavaScript Objects

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Objects](#javascript-objects)
  - [Object Literals](#object-literals)
    - [Example 1](#example-1)
  - [Accessing Properties](#accessing-properties)
    - [Example 2](#example-2)
  - [Object Methods](#object-methods)
    - [Example 3](#example-3)
  - [The this Keyword](#the-this-keyword)
    - [Example 4](#example-4)
  - [Objects are Mutable](#objects-are-mutable)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Object Literals

A JavaScript object is a collection of properties. Properties are defined as name:value pairs.

Objects can be created using **object literals**:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object Literals</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  eyeColor: "blue"
};

document.getElementById("demo").innerHTML =
  person.firstName + " " + person.lastName + ", age " + person.age + ", " + person.eyeColor + " eyes";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-object_literals/index.html)

## Accessing Properties

You can access object properties in two ways:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Accessing Properties</h4>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Dot notation
document.getElementById("demo1").innerHTML =
  "Dot notation: " + person.firstName + " " + person.lastName;

// Bracket notation
document.getElementById("demo2").innerHTML =
  "Bracket notation: " + person["firstName"] + " " + person["lastName"];

// Using a variable
const key = "age";
document.getElementById("demo3").innerHTML =
  "Using variable: " + person[key];
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-access_properties/index.html)

## Object Methods

Objects can also have methods. A method is a function stored as a property:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object Methods</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("demo").innerHTML =
  "Full name: " + person.fullName();
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-object_methods/index.html)

## The this Keyword

In an object method, `this` refers to the object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The this Keyword</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  getAge: function() {
    return this.age;
  }
};

document.getElementById("demo").innerHTML =
  person.fullName() + " is " + person.getAge() + " years old.";
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-this_keyword/index.html)

## Objects are Mutable

Objects are mutable: they are accessed by reference, not by value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Objects</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Objects are Mutable</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = { firstName: "John", lastName: "Doe" };

// Copy by reference
const employee = person;
employee.firstName = "Jane";

document.getElementById("demo1").innerHTML =
  "person.firstName: " + person.firstName;

document.getElementById("demo2").innerHTML =
  "employee.firstName: " + employee.firstName + "<br>" +
  "(Both changed because they reference the same object)";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-objects_mutable/index.html)

## Document

Document in project

You can [Download PDF](js-objects.pdf) file.

## Reference

- [W3Schools JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)