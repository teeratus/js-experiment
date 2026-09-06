# JavaScript Object Protection

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Object Protection](#javascript-object-protection)
  - [JavaScript Object.preventExtensions()](#javascript-object-preventextensions)
    - [Example 1](#example-1)
  - [JavaScript Object.isExtensible()](#javascript-object-isextensible)
    - [Example 2](#example-2)
  - [JavaScript Object.seal()](#javascript-objectseal)
    - [Example 3](#example-3)
  - [JavaScript Object.isSealed()](#javascript-objectissealed)
    - [Example 4](#example-4)
  - [JavaScript Object.freeze()](#javascript-objectfreeze)
    - [Example 5](#example-5)
  - [JavaScript Object.isFrozen()](#javascript-objectisfrozen)
    - [Example 6](#example-6)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Object.preventExtensions()

`Object.preventExtensions()` prevents new properties from being added to an object. Existing properties can still be changed or deleted:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Protection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.preventExtensions()</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Prevent adding new properties
Object.preventExtensions(person);

// Try to add a new property
person.nationality = "American";

document.getElementById("demo").innerHTML =
  "firstName: " + person.firstName + "<br>" +
  "nationality: " + person.nationality + " (undefined - cannot add)";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-prevent_extensions/index.html)

## JavaScript Object.isExtensible()

`Object.isExtensible()` checks if new properties can be added to an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Protection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.isExtensible()</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person1 = { firstName: "John" };
const person2 = { firstName: "Jane" };

Object.preventExtensions(person2);

document.getElementById("demo1").innerHTML =
  "person1 is extensible: " + Object.isExtensible(person1);
document.getElementById("demo2").innerHTML =
  "person2 is extensible: " + Object.isExtensible(person2);
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-is_extensible/index.html)

## JavaScript Object.seal()

`Object.seal()` prevents adding or deleting properties. Existing properties can still be changed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Protection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.seal()</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Seal the object
Object.seal(person);

// Try to add a new property (will be ignored in non-strict mode)
person.nationality = "American";

// Try to delete a property (will be ignored in non-strict mode)
delete person.age;

// Change existing property (allowed)
person.firstName = "Jane";

document.getElementById("demo").innerHTML =
  "firstName: " + person.firstName + "<br>" +
  "age: " + person.age + " (still exists, cannot delete)" + "<br>" +
  "nationality: " + person.nationality + " (cannot add)";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-seal/index.html)

## JavaScript Object.isSealed()

`Object.isSealed()` checks if an object is sealed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Protection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.isSealed()</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person1 = { firstName: "John" };
const person2 = { firstName: "Jane" };

Object.seal(person2);

document.getElementById("demo1").innerHTML =
  "person1 is sealed: " + Object.isSealed(person1);
document.getElementById("demo2").innerHTML =
  "person2 is sealed: " + Object.isSealed(person2);
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-is_sealed/index.html)

## JavaScript Object.freeze()

`Object.freeze()` prevents any changes to an object. No properties can be added, deleted, or changed:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Protection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.freeze()</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Freeze the object
Object.freeze(person);

// Try to change a property (will be ignored in non-strict mode)
person.firstName = "Jane";

// Try to add a new property
person.nationality = "American";

// Try to delete a property
delete person.age;

document.getElementById("demo").innerHTML =
  "firstName: " + person.firstName + " (cannot change)" + "<br>" +
  "age: " + person.age + " (cannot delete)" + "<br>" +
  "nationality: " + person.nationality + " (cannot add)";
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-freeze/index.html)

## JavaScript Object.isFrozen()

`Object.isFrozen()` checks if an object is frozen:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Protection</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Object.isFrozen()</h4>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const person1 = { firstName: "John" };
const person2 = { firstName: "Jane" };

Object.freeze(person2);

document.getElementById("demo1").innerHTML =
  "person1 is frozen: " + Object.isFrozen(person1);
document.getElementById("demo2").innerHTML =
  "person2 is frozen: " + Object.isFrozen(person2);
</script>

</body>
</html>
```

![](images/p6.png)

### Example 6

**Result** [View Example](ex6-is_frozen/index.html)

## Document

Document in project

You can [Download PDF](js-object_protection.pdf) file.

## Reference

- [W3Schools JavaScript Object Protection](https://www.w3schools.com/js/js_object_protection.asp)