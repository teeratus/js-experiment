# JavaScript this Keyword

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript this Keyword](#javascript-this-keyword)
  - [this in an Object Method](#this-in-an-object-method)
    - [Example 1](#example-1)
  - [Object Method Binding](#object-method-binding)
    - [Example 2](#example-2)
  - [Explicit Function Binding](#explicit-function-binding)
    - [Example 3](#example-3)
  - [Function Borrowing](#function-borrowing)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## What is this?

In JavaScript, the `this` keyword refers to an **object**.

The `this` keyword refers to different objects depending on how it is used:

- In an object method, `this` refers to the **object**
- Alone, `this` refers to the **global object**
- In a function, `this` refers to the **global object**
- In a function (strict mode), `this` is `undefined`
- In an event, `this` refers to the **element** that received the event
- Methods like `call()`, `apply()`, and `bind()` can refer `this` to **any object**

## this in an Object Method

When used in an object method, `this` refers to the object itself:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript this Keyword</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>this in an Object Method</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("demo").innerHTML = person.fullName();
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-object_method/index.html)

## Object Method Binding

Object method binding refers to how `this` is bound when calling a method on an object. 

When a function is called as a method of an object, `this` is bound to that object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript this Keyword</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object Method Binding</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Method called on the object - "this" refers to person
document.getElementById("demo1").innerHTML = person.fullName();

// When method is extracted, "this" is lost
const myMethod = person.fullName;
document.getElementById("demo2").innerHTML = "Lost this: " + myMethod();
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-method_binding/index.html)

## Explicit Function Binding

The `call()`, `apply()`, and `bind()` methods can explicitly set what `this` refers to:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript this Keyword</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Explicit Function Binding</h4>
<p id="demo"></p>

<script>
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith"
};

const person3 = {
  firstName: "Bob",
  lastName: "Johnson"
};

// Using call() to explicitly set "this"
document.getElementById("demo").innerHTML =
  "call() person2: " + person1.fullName.call(person2) + "<br>" +
  "call() person3: " + person1.fullName.call(person3);
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-explicit_binding/index.html)

## Function Borrowing

Function borrowing allows an object to use a method from another object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript this Keyword</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Function Borrowing</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Jane",
  lastName: "Smith"
};

const member2 = {
  firstName: "Bob",
  lastName: "Johnson"
};

// Borrow the fullName method from person using bind()
const memberFullName = person.fullName.bind(member);
const member2FullName = person.fullName.bind(member2);

document.getElementById("demo").innerHTML =
  "Member 1: " + memberFullName() + "<br>" +
  "Member 2: " + member2FullName();
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-function_borrowing/index.html)

## Document

Document in project

You can [Download PDF](js-this_keyword.pdf) file.

## Reference

- [W3Schools JavaScript this Keyword](https://www.w3schools.com/js/js_this.asp)