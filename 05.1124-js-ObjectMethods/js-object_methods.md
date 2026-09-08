# JavaScript Object Methods

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Object Methods](#javascript-object-methods)
  - [What are Object Methods?](#what-are-object-methods)
    - [Example 1](#example-1)
  - [The this Keyword](#the-this-keyword)
    - [Example 2](#example-2)
  - [Accessing Object Methods](#accessing-object-methods)
    - [Example 3](#example-3)
  - [Adding a Method to an Object](#adding-a-method-to-an-object)
    - [Example 4](#example-4)
  - [Using Methods for Calculations](#using-methods-for-calculations)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## What are Object Methods?

Methods are actions that can be performed on objects. A method is a function stored as a property of an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>What are Object Methods?</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("demo").innerHTML =
  "Method result: " + person.fullName();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-what_are_methods/index.html)

## The this Keyword

In object methods, `this` refers to the owner object. Without `this`, a function cannot access object properties:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>The this Keyword</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  introduce: function() {
    return "Hi, I'm " + this.firstName + " " + this.lastName;
  },
  getAge: function() {
    return "I am " + this.age + " years old.";
  }
};

document.getElementById("demo1").innerHTML = person.introduce();
document.getElementById("demo2").innerHTML = person.getAge();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-this_keyword/index.html)

## Accessing Object Methods

Object methods can be accessed with or without parentheses. Without parentheses, you get the function definition:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Accessing Object Methods</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Access method WITH parentheses
document.getElementById("demo1").innerHTML =
  "With parentheses: " + person.fullName();

// Access method WITHOUT parentheses (returns function)
document.getElementById("demo2").innerHTML =
  "Without parentheses: " + person.fullName;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-accessing_methods/index.html)

## Adding a Method to an Object

You can add methods to an existing object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding a Method to an Object</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Add a method
person.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// Add another method
person.greet = function(name) {
  return "Hello " + name + ", I'm " + this.firstName;
};

document.getElementById("demo").innerHTML =
  person.fullName() + "<br>" +
  person.greet("Jane");
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-adding_methods/index.html)

## Using Methods for Calculations

Object methods can perform calculations using object properties:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Methods</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Methods for Calculations</h4>
<p id="demo"></p>

<script>
const rectangle = {
  width: 10,
  height: 5,
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
  isSquare: function() {
    return this.width === this.height;
  }
};

document.getElementById("demo").innerHTML =
  "Width: " + rectangle.width + "<br>" +
  "Height: " + rectangle.height + "<br>" +
  "Area: " + rectangle.area() + "<br>" +
  "Perimeter: " + rectangle.perimeter() + "<br>" +
  "Is square? " + rectangle.isSquare();
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-method_calculations/index.html)

## Document

Document in project

You can [Download PDF](js-object_methods.pdf) file.

## Reference

- [W3Schools JavaScript Object Methods](https://www.w3schools.com/js/js_object_methods.asp)