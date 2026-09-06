# JavaScript Object Properties

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Object Properties](#javascript-object-properties)
  - [Accessing Properties](#accessing-properties)
    - [Example 1](#example-1)
  - [Adding New Properties](#adding-new-properties)
    - [Example 2](#example-2)
  - [Deleting Properties](#deleting-properties)
    - [Example 3](#example-3)
  - [Nested Properties](#nested-properties)
    - [Example 4](#example-4)
  - [Using Variables as Property Names](#using-variables-as-property-names)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Accessing Properties

JavaScript object properties can be accessed in three ways:

- `object.property` (dot notation)
- `object["property"]` (bracket notation)
- `object[expression]` (using a variable)

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Properties</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Accessing Properties</h4>
<p id="demo"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  "home town": "New York"
};

let text = "Dot notation: " + person.firstName + "<br>";
text += "Bracket notation: " + person["lastName"] + "<br>";
text += "Property with space: " + person["home town"] + "<br>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-access_properties/index.html)

## Adding New Properties

You can add new properties to an existing object by simply giving it a value:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Properties</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Adding New Properties</h4>
<p id="demo"></p>

<script>
const person = { firstName: "John", lastName: "Doe" };

// Add new properties
person.age = 30;
person["eyeColor"] = "blue";
person["favorite color"] = "green";

let text = "Person properties:<br>";
for (let key in person) {
  text += key + ": " + person[key] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-adding_properties/index.html)

## Deleting Properties

The `delete` keyword deletes a property from an object:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Properties</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Deleting Properties</h4>
<p id="demo"></p>

<script>
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "blue",
  price: 25000
};

let text = "Before delete:<br>";
for (let key in car) {
  text += key + ": " + car[key] + "<br>";
}

// Delete the price property
delete car.price;
// Delete using bracket notation
delete car["color"];

text += "<br>After delete (price, color):<br>";
for (let key in car) {
  text += key + ": " + car[key] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-deleting_properties/index.html)

## Nested Properties

Properties can contain other objects, creating nested structures:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Properties</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Nested Properties</h4>
<p id="demo"></p>

<script>
const company = {
  name: "Tech Corp",
  address: {
    street: "456 Oak Ave",
    city: "San Francisco",
    state: "CA"
  },
  employees: {
    manager: { name: "Alice", salary: 80000 },
    developer: { name: "Bob", salary: 65000 }
  }
};

// Access nested properties
let text = "Company: " + company.name + "<br>";
text += "City: " + company.address.city + "<br>";
text += "Manager: " + company.employees.manager.name + "<br>";
text += "Developer salary: $" + company.employees.developer.salary;

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-nested_properties/index.html)

## Using Variables as Property Names

You can use variables to access object properties dynamically:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Properties</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Using Variables as Property Names</h4>
<p id="demo"></p>

<script>
const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA"
};

const keys = ["name", "age", "city", "country"];

let text = "Dynamic property access:<br><br>";
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  text += key + ": " + person[key] + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-variable_property/index.html)

## Document

Document in project

You can [Download PDF](js-object_properties.pdf) file.

## Reference

- [W3Schools JavaScript Object Properties](https://www.w3schools.com/js/js_objects.asp)