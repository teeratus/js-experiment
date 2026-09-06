# JavaScript Google Chart Graphics

[Back to JS page](../acp-js.php)

Table of Contents
- [JavaScript Google Chart Graphics](#javascript-google-chart-graphics)
  - [Bar Charts](#bar-charts)
    - [Example 1](#example-1)
  - [Pie Charts](#pie-charts)
    - [Example 2](#example-2)
  - [3D Pie](#3d-pie)
    - [Example 3](#example-3)
  - [Line Graph](#line-graph)
    - [Example 4](#example-4)
  - [Scatter Plots](#scatter-plots)
    - [Example 5](#example-5)
  - [Document](#document)
  - [Reference](#reference)


## Bar Charts

Google Bar Chart displays data with rectangular bars:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Google Chart Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Bar Charts</h4>

<div id="barChart"></div>
<p id="demo1"></p>

<script src="https://www.gstatic.com/charts/loader.js"></script>

<script>
google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["Product", "Sales"],
    ["Product A", 25],
    ["Product B", 40],
    ["Product C", 30],
    ["Product D", 55],
    ["Product E", 20]
  ]);

  const options = {
    title: "Product Sales (Bar Chart)",
    hAxis: {title: "Product"},
    vAxis: {title: "Sales ($)", minValue: 0},
    legend: "none"
  };

  const chart = new google.visualization.ColumnChart(document.getElementById("barChart"));
  chart.draw(data, options);
  document.getElementById("demo1").innerHTML = "Google Bar Chart created!";
}
</script>

</body>
</html>
```

![](images/p1.png)

### Example 1

**Result** [View Example](ex1-bar_chart/index.html)

## Pie Charts

Google Pie Chart shows data as slices of a circle:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Google Chart Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Pie Charts</h4>

<div id="pieChart"></div>
<p id="demo2"></p>

<script src="https://www.gstatic.com/charts/loader.js"></script>

<script>
google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawPieChart);

function drawPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["Browser", "Share"],
    ["Chrome", 55],
    ["Firefox", 20],
    ["Safari", 15],
    ["Edge", 8],
    ["Other", 2]
  ]);

  const options = {
    title: "Browser Market Share (Pie Chart)",
    colors: ["#4CAF50", "#2196F3", "#FF9800", "#F44336", "#9C27B0"]
  };

  const chart = new google.visualization.PieChart(document.getElementById("pieChart"));
  chart.draw(data, options);
  document.getElementById("demo2").innerHTML = "Google Pie Chart created!";
}
</script>

</body>
</html>
```

![](images/p2.png)

### Example 2

**Result** [View Example](ex2-pie_chart/index.html)

## 3D Pie

Google 3D Pie Chart adds a three-dimensional effect:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Google Chart Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>3D Pie</h4>

<div id="pie3dChart"></div>
<p id="demo3"></p>

<script src="https://www.gstatic.com/charts/loader.js"></script>

<script>
google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(draw3DPieChart);

function draw3DPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["Category", "Value"],
    ["North", 35],
    ["South", 25],
    ["East", 20],
    ["West", 20]
  ]);

  const options = {
    title: "Regional Sales (3D Pie Chart)",
    is3D: true,
    colors: ["#4CAF50", "#2196F3", "#FF9800", "#F44336"]
  };

  const chart = new google.visualization.PieChart(document.getElementById("pie3dChart"));
  chart.draw(data, options);
  document.getElementById("demo3").innerHTML = "Google 3D Pie Chart created!";
}
</script>

</body>
</html>
```

![](images/p3.png)

### Example 3

**Result** [View Example](ex3-3d_pie/index.html)

## Line Graph

A line graph displays information as a series of data points connected by straight line segments:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Google Chart Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Line Graph</h4>

<div id="lineChart"></div>
<p id="demo4"></p>

<script src="https://www.gstatic.com/charts/loader.js"></script>

<script>
google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawLineChart);

function drawLineChart() {
  const data = google.visualization.arrayToDataTable([
    ["Time", "Series 1", "Series 2"],
    [1, 10, 5],
    [2, 15, 8],
    [3, 13, 7],
    [4, 17, 11],
    [5, 14, 9],
    [6, 20, 13],
    [7, 18, 12],
    [8, 22, 16]
  ]);

  const options = {
    title: "Line Graph",
    hAxis: {title: "Time"},
    vAxis: {title: "Values", minValue: 0},
    colors: ["#4CAF50", "#F44336"],
    curveType: "function"
  };

  const chart = new google.visualization.LineChart(document.getElementById("lineChart"));
  chart.draw(data, options);
  document.getElementById("demo4").innerHTML = "Google Line Chart created!";
}
</script>

</body>
</html>
```

![](images/p4.png)

### Example 4

**Result** [View Example](ex4-line_graph/index.html)

## Scatter Plots

A scatter plot displays values for two variables using dots:

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Google Chart Graphics</h2>
<p>From w3schools.com, Experiment by Teeratus_R</p>

<h4>Scatter Plots</h4>

<div id="scatterChart"></div>
<p id="demo5"></p>

<script src="https://www.gstatic.com/charts/loader.js"></script>

<script>
google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawScatterChart);

function drawScatterChart() {
  const data = google.visualization.arrayToDataTable([
    ["X", "Y"],
    [1, 2], [3, 5], [4, 4], [6, 8], [7, 7],
    [9, 10], [2, 3], [4, 6], [5, 5], [7, 9],
    [8, 8], [10, 11]
  ]);

  const options = {
    title: "Scatter Plot",
    hAxis: {title: "X Values", minValue: 0, maxValue: 11},
    vAxis: {title: "Y Values", minValue: 0, maxValue: 12},
    legend: "none",
    pointSize: 8,
    colors: ["#4CAF50"]
  };

  const chart = new google.visualization.ScatterChart(document.getElementById("scatterChart"));
  chart.draw(data, options);
  document.getElementById("demo5").innerHTML = "Google Scatter Chart created!";
}
</script>

</body>
</html>
```

![](images/p5.png)

### Example 5

**Result** [View Example](ex5-scatter_plot/index.html)

## Document

Document in project

You can [Download PDF](js-google_chart_graphics.pdf) file.

## Reference

- [W3Schools JavaScript Google Chart Graphics](https://www.w3schools.com/js/js_graphics_google_chart.asp)