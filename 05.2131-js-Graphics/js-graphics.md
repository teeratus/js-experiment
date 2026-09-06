# JavaScript Graphics

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Graphics](#javascript-graphics)
  - [Graphic Libraries](#graphic-libraries)
    - [Example 1](#example-1)
  - [Plotly.js](#plotlyjs)
    - [Example 2](#example-2)
  - [Chart.js](#chartjs)
    - [Example 3](#example-3)
  - [Google Chart](#google-chart)
    - [Example 4](#example-4)
  - [Document](#document)
  - [Reference](#reference)


## Graphic Libraries

There are many JavaScript graphic libraries available for creating charts, graphs, and visualizations on web pages:

| Library | Description | Type |
|---------|-------------|------|
| **Plotly.js** | High-level charting library (scatter, bar, pie, 3D charts) | Open source |
| **Chart.js** | Simple yet flexible charting (responsive, canvas-based) | Open source |
| **Google Chart** | Google's charting library (wide variety of chart types) | Free |
| **D3.js** | Data-driven documents (low-level, highly customizable) | Open source |
| **Highcharts** | Feature-rich charting library | Commercial |
| **Three.js** | 3D graphics and animations | Open source |

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Graphic Libraries</h4>
<p id="demo"></p>

<script>
let text = "JavaScript Graphics Libraries:<br><br>";

text += "1. <b>Plotly.js</b> - Interactive charts (scatter, bar, 3D)<br>";
text += "2. <b>Chart.js</b> - Simple, responsive canvas charts<br>";
text += "3. <b>Google Chart</b> - Google's charting service<br>";
text += "4. <b>D3.js</b> - Data-driven document manipulation<br>";
text += "5. <b>Three.js</b> - 3D graphics in the browser<br>";
text += "6. <b>Canvas API</b> - Built-in 2D drawing<br>";
text += "7. <b>SVG</b> - Scalable Vector Graphics<br><br>";

text += "To use a library, include its CDN link:";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-graphic_libraries/index.html)

## Plotly.js

Plotly.js is a high-level, declarative charting library. It supports over 40 chart types including scatter plots, bar charts, pie charts, and 3D charts:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Plotly.js</h4>

<div id="plotlyChart"></div>
<p id="demo2"></p>

<!-- Plotly.js CDN -->
<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>

<script>
// Sample data
const xValues = [1, 2, 3, 4, 5, 6, 7];
const yValues = [10, 15, 13, 17, 14, 20, 18];

// Create a bar chart
const data = [{
  x: xValues,
  y: yValues,
  type: "bar",
  marker: {
    color: "#4CAF50"
  }
}];

const layout = {
  title: "Weekly Sales (Plotly.js)",
  xaxis: {title: "Day"},
  yaxis: {title: "Sales"}
};

Plotly.newPlot("plotlyChart", data, layout);
document.getElementById("demo2").innerHTML = "Plotly.js bar chart created!";
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-plotly/index.html)

## Chart.js

Chart.js is a simple yet flexible JavaScript charting library for designers and developers. It creates responsive, canvas-based charts:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Chart.js</h4>

<canvas id="chartjsChart" style="width:100%;max-width:600px;"></canvas>
<p id="demo3"></p>

<!-- Chart.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

<script>
const xValues2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const yValues2 = [55, 49, 80, 70, 65, 90];
const barColors = ["red", "green", "blue", "orange", "brown", "purple"];

new Chart("chartjsChart", {
  type: "bar",
  data: {
    labels: xValues2,
    datasets: [{
      backgroundColor: barColors,
      data: yValues2
    }]
  },
  options: {
    title: {
      display: true,
      text: "Monthly Revenue (Chart.js)"
    },
    legend: {display: false}
  }
});

document.getElementById("demo3").innerHTML = "Chart.js bar chart created!";
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-chartjs/index.html)

## Google Chart

Google Chart provides a wide variety of chart types powered by Google. Charts are rendered using HTML5/SVG technology:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Google Chart</h4>

<div id="googleChart"></div>
<p id="demo4"></p>

<!-- Google Chart CDN -->
<script src="https://www.gstatic.com/charts/loader.js"></script>

<script>
google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["Category", "Value"],
    ["Product A", 45],
    ["Product B", 25],
    ["Product C", 15],
    ["Product D", 10],
    ["Product E", 5]
  ]);

  const options = {
    title: "Market Share (Google Chart)",
    is3D: true,
    pieHole: 0.4
  };

  const chart = new google.visualization.PieChart(document.getElementById("googleChart"));
  chart.draw(data, options);
  
  document.getElementById("demo4").innerHTML = "Google Chart pie chart created!";
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-google_chart/index.html)

## Document

Document in project

You can [Download PDF](js-graphics.pdf) file.

## Reference

- [W3Schools JavaScript Graphics](https://www.w3schools.com/js/js_graphics.asp)