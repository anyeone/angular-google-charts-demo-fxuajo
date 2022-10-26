import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'withivy';
  show = true;

  options111 = {
    title: 'GDP of selected countries, in US $millions',
    width: 500,
    height: 300,
    legend: 'none',
    bar: { groupWidth: '95%' },
    vAxis: { gridlines: { count: 4 } },
  };
  data11 = [
    ['Year', 'value', { role: 'style' }, { role: 'annotation' }],
    ['other', 6, 'color: rgb(143, 27, 0)', 6],
    ['Architect', 3, 'color: rgb(143, 27, 0)', 3],
    ['Business Analyst', 2, 'color: rgb(143, 27, 0);opacity: 0.2', 10],
    [
      'Project Manager',
      5,
      'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF',
      5,
    ],
    [
      'developer',
      9,
      'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2',
      9,
    ],
  ];
  columnNames11 = ['Employee'];
  options11 = {
    title: '',
    height: 200,
    tooltip: { isHtml: true, trigger: 'focus', ignoreBounds: false },
    labels: 'none',
    pieSliceText: 'none',
    pieSliceTextStyle: { color: 'red', fontSize: 9, display: 'none' },
    slices: [
      { color: '3eafe0' },
      { color: 'bd6a67' },
      { color: 'b9b262' },
      { color: '6abf7e' },
      { color: '6c95b7' },
    ],
    chartArea: { top: 10, left: -20, width: '70%', height: '75%' },
    is3D: false /*sliceVisibilityThreshold: 0,*/,
    fontSize: 9,
    legend: 'dsd',
  };

  chartTitle = '';
  type2 = 'PieChart';
  piedata = [
    ['Unassigned', 6, '6 unassigned metrics'],
    ['Assigned', 3, '3 assigned metrics'],
    ['Confirmed', 7, '7 confirmed metrics'],
    ['Collecting', 11, '11 metrics partially collected'],
    ['Collected', 17, '17 metrics fully collected'],
    ['Reviewed', 8, '8 metrics reviewed (completed)'],
    ['', 17, ''],
  ];

  overlay = '19%';

  pieColumns = [
    { type: 'string', role: 'Status' },
    { type: 'number', role: 'Metric Count' },
    { type: 'string', role: 'tooltip' },
  ];

  chartColumns = [
    { type: 'number', role: 'latitude' },
    { type: 'number', role: 'longitude' },
    { type: 'number', role: 'markerColor' },
    { type: 'number', role: 'markerSize' },
  ];

  tooltipoptions = {
    trigger: 'selection',
  };

  pieOptions = {
    title: 'Google Pie',
    titleTextStyle: {
      align: 'center',
    },
    pieHole: 0.6,
    pieStartAngle: 225,
    pieSliceText: 'none',
    slices: [
      { color: '3eafe0' },
      { color: 'bd6a67' },
      { color: 'b9b262' },
      { color: '6abf7e' },
      { color: '6c95b7' },
      { color: '000000' },
      { color: 'transparent' },
    ],
    tooltip: {
      trigger: 'selection',
    },
    //enableInteractivity: 'none',
  };

  mlgauge_unassigned = 42;

  mllabel = function (value: number): string {
    return `${value} unassigned`;
  };

  columnNamespie = ['Employee', { role: 'style' }, { role: 'annotation' }];
  columnNames = ['Employee'];

  width = 550;
  height = 400;
  onSelect(event) {
    // const { row, column } = event[0];
    console.log(event);
    // const year = this.Bardata[row][0];
    // let selectedItem;
    // if (column === 1) {
    //   selectedItem = "current";
    // }
    // if (column === 2) {
    //   selectedItem = "target";
    // }
    // console.log("year", year, "SelectedItem", selectedItem, this.Bardata[row][column]);
  }
  // column chart
  type1 = 'ColumnChart';

  data1 = [
    ['other', 16, 'color: rgb(143, 27, 0)', '$6'],
    ['Architect', 3, 'color: rgb(143, 27, 0)', 3],
    ['Business', 2, 'color: rgb(143, 27, 0)', 2],
    ['Project', 5, 'color: rgb(143, 27, 0)', 4],
    ['developer', 9, 'color: rgb(143, 27, 0)', 4],
  ];
  columnNames1 = ['Year', 'value', { role: 'style' }, { role: 'annotation' }];
  options = {
    title: '',
    /*'width':400,*/ height: 200,
    tooltip: {
      // isHtml: false,
      // trigger: "focus",
      textStyle: { color: 'blue', fontName: 'Tahoma', fontSize: '15' },
    },
    //                        slices: [{color: '0cac64'}, {color: 'e9ad2f'}, {color: '1f6882'},  {color: 'ff4d4d'}, {color: '9e70ff'}],
    labels: 'none',
    pieSliceText: 'none',
    pieSliceTextStyle: { color: 'red', fontSize: 9, display: 'none' },
    slices: [
      { color: '3eafe0' },
      { color: 'bd6a67' },
      { color: 'b9b262' },
      { color: '6abf7e' },
      { color: '6c95b7' },
    ],
    // chartArea: { top: 10, left: 20, width: "70%", height: "75%" },
    is3D: false /*sliceVisibilityThreshold: 0,*/,
    fontSize: 9,
    legend: 'dsd',
  };

  // new configuation
  options2 = {
    tooltip: { isHtml: true },
    legend: 'none',
  };
  columnNames21 = [
    'Year',
    'value',
    { role: 'style' },
    { role: 'annotation' },
    { type: 'string', role: 'tooltip', p: { html: true } },
  ];
  data21 = [
    ['other', 6, 'color: rgb(143, 27, 0)', '$6', 'Other <br/> $ 6'],
    ['Architect', 3, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
    ['Business', 3, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
    ['Project', 3, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
    ['developer', 3, 'color: rgb(143, 27, 0)', '$6', '1221212 <br/> $ 6'],
  ];
  columnNames2 = [
    'Year',
    'Sales',
    { type: 'string', role: 'tooltip', p: { html: true } },
  ];
  data2 = [
    ['other', 6, '<b>other</b> <br/> $ 6'],
    ['Architect', 3, '1221212 <br/> $ 6'],
    ['Business', 2, 2],
    ['Project', 5, 4],
    ['developer', 9, 4],
  ];

  options3 = {
    tooltip: { isHtml: true },
    legend: 'none',
  };
  columnNames3 = [
    'Year',
    'Sales',
    { type: 'string', role: 'annotation' },
    { type: 'string', role: 'annotationText', p: { html: true } },
  ];
  data3 = [
    ['other', 6, 'other <br/> $ 6', 'opopo'],
    ['Architect', 3, 3, 'opopo'],
    ['Business', 2, 2, 'opopo'],
    ['Project', 5, 4, 'opopo'],
    ['developer', 9, 4, 'opopo'],
  ];

  columnNames221 = ['Year', 'value', { role: 'style' }, { role: 'annotation' }];
  data221 = [
    ['other', { v: 2, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['Architect', { v: 6, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['Business', { v: 3, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['Project', { v: 8, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
    ['developer', { v: 9, f: '$12,345' }, 'color: rgb(143, 27, 0)', '$6'],
  ];
  /*
  chartistpie = new PieChart(
    '#chartistpie',
    {
      series: [20, 10, 30, 40],
    },
    {
      donut: true,
      donutWidth: 60,
      startAngle: 270,
      total: 200,
      showLabel: false,
    }
  );
  
  public chartistconfig: Configuration = {
    type: 'Pie',
    data: {
      labels: ['A', 'B'],
      series: [10, 15],
    },
    options: {},
  };
  */
}
