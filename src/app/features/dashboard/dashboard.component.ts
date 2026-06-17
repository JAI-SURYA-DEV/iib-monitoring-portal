import { Component } from '@angular/core';
import { MaterialModule } from "../../shared/material.module";
import {
  NgApexchartsModule,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels,
  ApexAxisChartSeries, // changed from ApexSeries
  ApexLegend
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
// export class DashboardComponent {}

export class DashboardComponent {

  displayedColumns = [
    'date',
    'service',
    'source',
    'hits',
    'status'
  ];

  dataSource = [
    {
      date: '15-Jun-2026',
      service: 'Udayan',
      source: 'NeoCore',
      hits: 125,
      status: 'Success'
    }
  ];

  lineChartSeries: ApexAxisChartSeries = [
    {
      name: 'Hits',
      data: [120, 180, 150, 250, 210, 320, 280]
    }
  ];

  lineChart: ApexChart = {
    type: 'area',
    height: 320,
    toolbar: {
      show: false
    }
  };

  xaxis: ApexXAxis = {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul'
    ]
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

  dataLabels: ApexDataLabels = {
    enabled: false
  };

  donutSeries = [65, 35];

  donutChart: ApexChart = {
    type: 'donut',
    height: 320
  };

  donutLabels = [
    'Udayan',
    'Sudarshana'
  ];

  legend: ApexLegend = {
    position: 'bottom'
  };
}
