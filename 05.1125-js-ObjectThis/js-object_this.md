# JavaScript Object this

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Object this](#javascript-object-this)
  - [this in Objects](#this-in-objects)
    - [Example 1](#example-1)
  - [this in an Object Method](#this-in-an-object-method)
    - [Example 2](#example-2)
  - [Why Use this?](#why-use-this)
    - [Example 3](#example-3)
  - [this Alone](#this-alone)
    - [Example 4](#example-4)
  - [this in a Function](#this-in-a-function)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## this in Objects

In JavaScript, the `this` keyword refers to an **object**.

Which object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

- In an object method, `this` refers to the **object**
- Alone, `this` refers to the **global object**
- In a function, `this` refers to the **global object**
- In a function (strict mode), `this` is `undefined`
- In an event, `this` refers to the **element** that received the event

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object this</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>this in Objects</h4>
<p id="demo"></p>

<script>
// Create an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Using 'this' would refer to the global object here
// But when used in a method, 'this' refers to the object

document.getElementById("demo").innerHTML =
  "person.firstName: " + person.firstName + "<br>" +
  "person.lastName: " + person.lastName;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-this_in_objects/index.html)

## this in an Object Method

When used in an object method, `this` refers to the object itself:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object this</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>this in an Object Method</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  birthYear: function() {
    const year = new Date().getFullYear();
    return year - this.age;
  }
};

document.getElementById("demo").innerHTML =
  "Full name: " + person.fullName() + "<br>" +
  "Born in: " + person.birthYear();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-this_in_method/index.html)

## Why Use this?

The `this` keyword allows you to reuse methods across different objects without rewriting the code:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object this</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Why Use this?</h4>
<p id="demo"></p>

<script>
// A method that uses 'this' can work with any object
function introduce() {
  return "Hi, I'm " + this.firstName + " " + this.lastName;
}

const person1 = {
  firstName: "John",
  lastName: "Doe",
  introduce: introduce
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith",
  introduce: introduce
};

document.getElementById("demo").innerHTML =
  person1.introduce() + "<br>" +
  person2.introduce();
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-why_use_this/index.html)

## this Alone

When used alone, `this` refers to the global object (window in a browser):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object this</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>this Alone</h4>
<p id="demo"></p>

<script>
// In a browser, 'this' alone refers to the window object
let text = "this (global): " + this + "<br>";
text += "this === window: " + (this === window) + "<br>";
text += "this.document === document: " + (this.document === document);

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-this_alone/index.html)

## this in a Function

In a regular function, `this` refers to the global object (window in a browser):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object this</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>this in a Function</h4>
<p id="demo"></p>

<script>
function myFunction() {
  return this;
}

document.getElementById("demo").innerHTML =
  "Function returns: " + myFunction() + "<br>" +
  "It's the window object: " + (myFunction() === window);
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-this_in_function/index.html)

## Document

Document in project

You can [Download PDF](js-object_this.pdf) file.

## Reference

- [W3Schools JavaScript Object this](https://www.w3schools.com/js/js_object_this.asp)