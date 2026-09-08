# JavaScript Object Management

[Back to JS page](../index.html)

Table of Contents
- [JavaScript Object Management](#javascript-object-management)
  - [Adding a New Property](#adding-a-new-property)
    - [Example 1](#example-1)
  - [Changing a Property Value](#changing-a-property-value)
    - [Example 2](#example-2)
  - [Property Attributes](#property-attributes)
  - [List All Object Properties](#list-all-object-properties)
    - [Example 3](#example-3)
  - [Adding Getters and Setters](#adding-getters-and-setters)
    - [Example 4](#example-4)
  - [A Counter Example](#a-counter-example)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Adding a New Property

You can add new properties to an existing object using `Object.defineProperty()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Management</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding a New Property</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Add a new property
Object.defineProperty(person, "fullName", {
  value: "John Doe",
  writable: true
});

document.getElementById("demo").innerHTML = person.fullName;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-add_property/index.html)

## Changing a Property Value

You can change a property value using `Object.defineProperty()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Management</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Changing a Property Value</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Change the age property
Object.defineProperty(person, "age", {
  value: 35
});

document.getElementById("demo").innerHTML = "Age: " + person.age;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-change_value/index.html)

## Property Attributes

Property attributes control how properties behave:

- **`writable`** - If `true`, the value can be changed
- **`enumerable`** - If `true`, the property shows up in enumeration (`for...in`)
- **`configurable`** - If `true`, the property can be deleted or changed

## List All Object Properties

`Object.getOwnPropertyNames()` returns all properties (including non-enumerable):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Management</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>List All Object Properties</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  eyeColor: "blue"
};

// Get all property names
const properties = Object.getOwnPropertyNames(person);
let text = "";
for (let prop of properties) {
  text += prop + ": " + person[prop] + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-list_properties/index.html)

## Adding Getters and Setters

`Object.defineProperty()` can also add getters and setters:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Management</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding Getters and Setters</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe"
};

Object.defineProperty(person, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  },
  set: function(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
  enumerable: true
});

document.getElementById("demo").innerHTML = "Before: " + person.fullName + "<br>";
person.fullName = "Jane Smith";
document.getElementById("demo").innerHTML += "After: " + person.fullName;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-add_getter_setter/index.html)

## A Counter Example

Using `Object.defineProperty()` to create a counter with controlled access:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Management</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>A Counter Example</h4>
<p id="demo"></p>

<script>
const obj = { counter: 0 };

Object.defineProperty(obj, "increment", {
  get: function() {
    this.counter++;
    return this.counter;
  }
});

Object.defineProperty(obj, "decrement", {
  get: function() {
    this.counter--;
    return this.counter;
  }
});

Object.defineProperty(obj, "reset", {
  get: function() {
    this.counter = 0;
    return this.counter;
  }
});

document.getElementById("demo").innerHTML =
  "Initial: " + obj.reset + "<br>" +
  "After increment: " + obj.increment + "<br>" +
  "After increment: " + obj.increment + "<br>" +
  "After decrement: " + obj.decrement + "<br>" +
  "After reset: " + obj.reset;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-counter/index.html)

## Document

Document in project

You can [Download PDF](js-object_management.pdf) file.

## Reference

- [W3Schools JavaScript Object Management](https://www.w3schools.com/js/js_object_management.asp)