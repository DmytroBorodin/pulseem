let labelsBlock = document.querySelector('.labels__block__inner');
let chartLegend = document.querySelector('.chart__legend');
let pieChart1 = am4core.create("pie__chart__1", am4charts.PieChart);
let series = pieChart1.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "type";

pieChart1.data = [{
  "type": "Active",
  "value": 8
}, {
  "type": "Error",
  "value": 5
},{
  "type": "Removed",
  "value": 23
}];


pieChart1.innerRadius = am4core.percent(55.55);
pieChart1.radius = am4core.percent(100);

series.ticks.template.disabled = true;
series.alignLabels = false;
series.labels.template.text = "{type}{value}";
series.labels.template.radius = am4core.percent(-20);
series.labels.template.fill = am4core.color("#00000");
series.labels.template.fontSize = '2rem';
series.labels.template.contentAlign = 'center';
series.labels.template.pixelWidth = '60';
series.labels.template.pixelHeight = '60';
console.log(series.labels.template);


/*let setElement = (elName, elClass, elCont) => {
	let newElement = document.createElement(elName);
	newElement.classList.add(elClass);
	newElement.innerText = elCont;
	return newElement;
}

let coordinatesArr = [];

let total = 0;

for (let i = 0; i < pieChart1.data.length; i ++) {
	let chartLabel = setElement('div', 'chart__label', '');
	labelsBlock.append(chartLabel);
	total += pieChart1.data[i].value;
}


let minSector = 360/total;
let chartRadius = labelsBlock.offsetWidth/2;

let labelsArr = [...document.querySelectorAll('.chart__label ')];
let sum = 0;

for (let i = 0; i < pieChart1.data.length; i++) {
	sum += pieChart1.data[i].value;
	let angel;
	if (sum <= 120) {
		angel = (-sum-40)*Math.PI/180;
	}
	console.log(angel);
	let x = Math.cos(angel);
	let y = Math.sin(angel);
	let coordinates = {};
	coordinates.x = x*chartRadius + chartRadius;
	coordinates.y = y*chartRadius + chartRadius;
	coordinatesArr.push(coordinates);
}

console.log(coordinatesArr);

labelsArr.forEach(item => {
	let index = labelsArr.indexOf(item);
	item.style.top = `${coordinatesArr[index].y}px`;
	item.style.left = `${coordinatesArr[index].x}px`;
})*/

var pieChart2 = am4core.create("pie__chart__2", am4charts.PieChart);

// Add data
pieChart2.data = [{
  "type": "Active",
  "value": 10
}, {
  "type": "Active",
  "value": 10
}, {
  "type": "Active",
  "value": 10
}];

// Add and configure Series
var series2 = pieChart2.series.push(new am4charts.PieSeries());
series2.dataFields.value = "value";
series2.dataFields.category = "type";
pieChart2.innerRadius = am4core.percent(55.55);
pieChart2.radius = am4core.percent(100);


let pieChart3 = am4core.create("pie__chart__3", am4charts.PieChart);
let series3 = pieChart3.series.push(new am4charts.PieSeries());
series3.dataFields.value = "value";

let val1 = 60;
let val2 = 100 - val1;

pieChart3.data = [{
  "value": val1
},{
  "value": val2
}];

pieChart3.innerRadius = am4core.percent(90);
pieChart3.radius = am4core.percent(100);


let xyChart1 = am4core.create("xy__chart__1", am4charts.XYChart);
xyChart1.paddingBottom = -10;

xyChart1.data = [
	{
		"action": "Opens",
		"value": 90
	},
	{
		"action": "Clicks",
		"value": 48
	},
	{
		"action": "Errors",
		"value": 12
	},
	{
		"action": "Removed",
		"value": 39
	},
]

let categoryAxis = xyChart1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "action";
let valueAxis = xyChart1.yAxes.push(new am4charts.ValueAxis());
let xySeries = xyChart1.series.push(new am4charts.ColumnSeries());
categoryAxis.renderer.labels.template.fontSize = 18;
valueAxis.renderer.labels.template.fontSize = 16;
categoryAxis.renderer.grid.template.strokeWidth = 0;
categoryAxis.renderer.minGridDistance = 50;

valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.labels.template.disabled = true;
function createGrid(value) {
  let range = valueAxis.axisRanges.create();
  range.value = value;
  range.label.text = "{value}%";
}

xySeries.dataFields.valueY = "value";
xySeries.dataFields.categoryX = "action";
xySeries.columns.template.width = am4core.percent(10);

createGrid(0);
createGrid(25);
createGrid(50);
createGrid(75);
createGrid(100);



let xyChart2 = am4core.create("xy__chart__2", am4charts.XYChart);
xyChart2.paddingBottom = -10;

xyChart2.data = [
	{
		"action": "Sent",
		"value": 90
	},
	{
		"action": "Clicks",
		"value": 48
	},
	{
		"action": "Errors",
		"value": 12
	},
	{
		"action": "DLR",
		"value": 39
	},
]

let categoryAxis2 = xyChart2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis2.dataFields.category = "action";
let valueAxis2 = xyChart2.yAxes.push(new am4charts.ValueAxis());
let xySeries2 = xyChart2.series.push(new am4charts.ColumnSeries());
categoryAxis2.renderer.labels.template.fontSize = 18;
valueAxis2.renderer.labels.template.fontSize = 16;
categoryAxis2.renderer.grid.template.strokeWidth = 0;
categoryAxis2.renderer.minGridDistance = 50;

valueAxis2.renderer.grid.template.disabled = true;
valueAxis2.renderer.labels.template.disabled = true;
function createGrid2(value) {
  let range = valueAxis2.axisRanges.create();
  range.value = value;
  range.label.text = "{value}%";
}

xySeries2.dataFields.valueY = "value";
xySeries2.dataFields.categoryX = "action";
xySeries2.columns.template.width = am4core.percent(10);

createGrid2(0);
createGrid2(25);
createGrid2(50);
createGrid2(75);
createGrid2(100);
