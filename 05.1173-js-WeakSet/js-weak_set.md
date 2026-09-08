# JavaScript WeakSet

[Back to JS page](../index.html)

Table of Contents
- [JavaScript WeakSet](#javascript-weakset)
  - [Creating a WeakSet](#creating-a-weakset)
    - [Example 1](#example-1)
  - [WeakSet Methods](#weakset-methods)
    - [Example 2](#example-2)
  - [WeakSet vs Set](#weakset-vs-set)
    - [Example 3](#example-3)
  - [Weak References](#weak-references)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Creating a WeakSet

A `WeakSet` is a collection of objects. Unlike a Set, a WeakSet can only contain **objects** (not primitive values like strings or numbers):

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript WeakSet</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Creating a WeakSet</h4>
<p id="demo"></p>

<script>
// Create a WeakSet with objects
const obj1 = { name: "John" };
const obj2 = { name: "Jane" };
const obj3 = { name: "Bob" };

const weakSet = new WeakSet([obj1, obj2, obj3]);

// Add another object
const obj4 = { name: "Alice" };
weakSet.add(obj4);

document.getElementById("demo").innerHTML =
  "WeakSet created with objects<br>" +
  "has(obj1): " + weakSet.has(obj1) + "<br>" +
  "has(obj4): " + weakSet.has(obj4) + "<br><br>" +
  "Note: WeakSet can only hold objects,<br>" +
  "not strings, numbers, or other primitives";
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-create_weakset/index.html)

## WeakSet Methods

A WeakSet supports only three methods: `add()`, `delete()`, and `has()`:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript WeakSet</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>WeakSet Methods</h4>
<p id="demo"></p>

<script>
const weakSet = new WeakSet();

const obj1 = { id: 1 };
const obj2 = { id: 2 };

// add() - add an object
weakSet.add(obj1);
weakSet.add(obj2);

let text = "After adding 2 objects:<br>";
text += "has(obj1): " + weakSet.has(obj1) + "<br>";
text += "has(obj2): " + weakSet.has(obj2) + "<br><br>";

// delete() - remove an object
weakSet.delete(obj1);
text += "After delete(obj1):<br>";
text += "has(obj1): " + weakSet.has(obj1) + "<br><br>";

text += "<b>Methods available:</b><br>";
text += "add(obj) - add an object<br>";
text += "delete(obj) - remove an object<br>";
text += "has(obj) - check if object exists<br><br>";

text += "WeakSet has NO size property and NO iteration methods";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-methods/index.html)

## WeakSet vs Set

The main differences between WeakSet and Set:

| Feature | Set | WeakSet |
|---------|-----|---------|
| Values | Any type (objects + primitives) | Objects only |
| `size` property | Yes | No |
| Iteration | Yes (forEach, values, etc.) | No |
| Weak references | No | Yes |
| Garbage collection | Not automatic | Automatic |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript WeakSet</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>WeakSet vs Set</h4>
<p id="demo"></p>

<script>
// Set can hold any type
const set = new Set(["string", 42, true, {obj: true}]);

// WeakSet can only hold objects
const obj = {name: "John"};
const weakSet = new WeakSet([obj]);

let text = "<b>Set can hold:</b><br>";
text += "- Strings: ✓<br>";
text += "- Numbers: ✓<br>";
text += "- Booleans: ✓<br>";
text += "- Objects: ✓<br><br>";

text += "<b>WeakSet can only hold:</b><br>";
text += "- Objects: ✓ (only types allowed)<br><br>";

text += "<b>Set has:</b> size, forEach(), values(), keys()<br>";
text += "<b>WeakSet has:</b> add(), delete(), has() only<br><br>";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-weakset_vs_set/index.html)

## Weak References

WeakSet holds objects by **weak references**. When an object is no longer referenced elsewhere, it can be garbage collected:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript WeakSet</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Weak References</h4>
<p id="demo"></p>

<script>
const weakSet = new WeakSet();

let john = { name: "John" };
weakSet.add(john);

let text = "Object added to WeakSet<br><br>";

// Display object
text += "Object in WeakSet: " + (weakSet.has(john)) + "<br><br>";

// Remove all references to john
john = null;

text += "After setting john = null:<br>";
text += "The object can now be garbage collected<br>";
text += "It will be automatically removed from the WeakSet<br><br>";
text += "This is why WeakSet is useful for<br>";
text += "managing memory efficiently";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-weak_references/index.html)

## Document

Document in project

You can [Download PDF](js-weak_set.pdf) file.

## Reference

- [W3Schools JavaScript WeakSet](https://www.w3schools.com/js/js_sets.asp)