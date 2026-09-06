# JavaScript Dynamic Import

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Dynamic Import](#javascript-dynamic-import)
  - [How Dynamic Import Works](#how-dynamic-import-works)
    - [Example 1](#example-1)
  - [Another Example](#another-example)
    - [Example 2](#example-2)
  - [Conditional Loading](#conditional-loading)
    - [Example 3](#example-3)
  - [Document](#document)
  - [Reference](#reference)


## JavaScript Dynamic Import

Dynamic import allows you to import modules on demand, at runtime, using the `import()` function.

Unlike static imports (`import ... from ...`), dynamic imports:
- Can be used inside regular scripts (not just `<script type="module">`)
- Can be called conditionally
- Return a Promise that resolves to the module namespace object
- Can improve performance by loading code only when needed

## How Dynamic Import Works

The `import()` function returns a Promise. The module is loaded when the `import()` call is executed:

**math.js** - Module file:

```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dynamic Import</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>How Dynamic Import Works</h4>
<button onclick="loadMath()">Load Math Module</button>
<p id="demo"></p>

<script>
function loadMath() {
  import('./math.js')
    .then(function(module) {
      document.getElementById("demo").innerHTML =
        "Module loaded dynamically!<br>" +
        "add(10, 5) = " + module.add(10, 5) + "<br>" +
        "subtract(10, 5) = " + module.subtract(10, 5) + "<br>" +
        "multiply(10, 5) = " + module.multiply(10, 5) + "<br>" +
        "divide(10, 5) = " + module.divide(10, 5);
    })
    .catch(function(err) {
      document.getElementById("demo").innerHTML = "Error: " + err.message;
    });
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-dynamic_import/index.html)

## Another Example

Dynamic import can load modules that contain data conversion functions:

**temperatures.js** - Module file:

```javascript
export const toCelsius = (f) => (f - 32) * 5 / 9;
export const toFahrenheit = (c) => (c * 9 / 5) + 32;
export const toKelvin = (c) => c + 273.15;
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dynamic Import</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Another Example</h4>
<button onclick="loadTemp()">Load Temperature Module</button>
<p id="demo"></p>

<script>
function loadTemp() {
  import('./temperatures.js')
    .then(function(module) {
      document.getElementById("demo").innerHTML =
        "Temperature conversions:<br>" +
        "32°F = " + module.toCelsius(32).toFixed(1) + "°C<br>" +
        "100°F = " + module.toCelsius(100).toFixed(1) + "°C<br>" +
        "0°C = " + module.toFahrenheit(0).toFixed(1) + "°F<br>" +
        "100°C = " + module.toKelvin(100).toFixed(1) + "K";
    })
    .catch(function(err) {
      document.getElementById("demo").innerHTML = "Error: " + err.message;
    });
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-another_example/index.html)

## Conditional Loading

Dynamic import is useful for conditionally loading modules based on user interaction or other runtime conditions:

**greetings.js** - Module file:

```javascript
export const sayHello = (name) => "Hello, " + name + "!";
export const sayGoodbye = (name) => "Goodbye, " + name + "!";
export const sayThanks = (name) => "Thank you, " + name + "!";
```

**Main HTML file:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Dynamic Import</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Conditional Loading</h4>
<p>Select a greeting:</p>
<select id="greetingSelect">
  <option value="hello">Hello</option>
  <option value="goodbye">Goodbye</option>
  <option value="thanks">Thanks</option>
</select>
<br><br>
<label>Name: <input type="text" id="nameInput" value="John"></label>
<br><br>
<button onclick="showGreeting()">Show Greeting</button>
<p id="demo"></p>

<script>
function showGreeting() {
  const type = document.getElementById("greetingSelect").value;
  const name = document.getElementById("nameInput").value || "Guest";

  import('./greetings.js')
    .then(function(module) {
      let message = "";
      if (type === "hello") {
        message = module.sayHello(name);
      } else if (type === "goodbye") {
        message = module.sayGoodbye(name);
      } else if (type === "thanks") {
        message = module.sayThanks(name);
      }
      document.getElementById("demo").innerHTML = message;
    })
    .catch(function(err) {
      document.getElementById("demo").innerHTML = "Error: " + err.message;
    });
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-conditional_loading/index.html)

## Document

Document in project

You can [Download PDF](js-dynamic_import.pdf) file.

## Reference

- [W3Schools JavaScript Dynamic Import](https://www.w3schools.com/js/js_modules_dynamic.asp)