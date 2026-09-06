# JavaScript Object Definitions

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Object Definitions](#javascript-object-definitions)
  - [Using an Object Literal](#using-an-object-literal)
    - [Example 1](#example-1)
  - [Using the new Keyword](#using-the-new-keyword)
    - [Example 2](#example-2)
  - [JavaScript Object.create()](#javascript-objectcreate)
    - [Example 3](#example-3)
  - [JavaScript Object.assign()](#javascript-objectassign)
    - [Example 4](#example-4)
  - [JavaScript Objects are Mutable](#javascript-objects-are-mutable)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Using an Object Literal

The easiest way to create a JavaScript object is using an **object literal**:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Definitions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using an Object Literal</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  eyeColor: "blue"
};

document.getElementById("demo").innerHTML =
  person.firstName + " " + person.lastName + ", age " + person.age;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-object_literal/index.html)

## Using the new Keyword

You can create an object using the `new Object()` constructor:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Definitions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using the new Keyword</h4>
<p id="demo"></p>

<script>
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

document.getElementById("demo").innerHTML =
  person.firstName + " " + person.lastName + ", age " + person.age;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-new_keyword/index.html)

## JavaScript Object.create()

The `Object.create()` method creates a new object using an existing object as a prototype:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Definitions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Object.create()</h4>
<p id="demo"></p>

<script>
// Define prototype object
const personProto = {
  greet: function() {
    return "Hello, I'm " + this.firstName;
  }
};

// Create new object based on prototype
const person = Object.create(personProto);
person.firstName = "John";
person.lastName = "Doe";

document.getElementById("demo").innerHTML = person.greet();
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-object_create/index.html)

## JavaScript Object.assign()

The `Object.assign()` method copies properties from one or more source objects to a target object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Definitions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Object.assign()</h4>
<p id="demo"></p>

<script>
const person = { firstName: "John", lastName: "Doe" };
const address = { city: "New York", country: "USA" };
const contact = { email: "john@example.com" };

// Merge objects into a new object
const merged = Object.assign({}, person, address, contact);

document.getElementById("demo").innerHTML =
  merged.firstName + " " + merged.lastName +
  ", " + merged.city + ", " + merged.country +
  "<br>Email: " + merged.email;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-object_assign/index.html)

## JavaScript Objects are Mutable

Objects are mutable: they are accessed by reference, not by value.

If you change a property of a copied object, the original object is also changed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Definitions</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>JavaScript Objects are Mutable</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person = { firstName: "John", lastName: "Doe" };

// Copy by reference (not by value)
const employee = person;
employee.firstName = "Jane";

document.getElementById("demo1").innerHTML = "person: " + person.firstName;
document.getElementById("demo2").innerHTML = "employee: " + employee.firstName;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-objects_mutable/index.html)

## Document

Document in project

You can [Download PDF](js-object_definitions.pdf) file.

## Reference

- [W3Schools JavaScript Object Definitions](https://www.w3schools.com/js/js_object_definition.asp)
