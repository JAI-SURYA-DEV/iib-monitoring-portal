// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboardv1',
//   standalone: true,
//   imports: [],
//   templateUrl: './dashboardv1.component.html',
//   styleUrl: './dashboardv1.component.scss'
// })
// export class Dashboardv1Component {

// }

import { Component } from '@angular/core';
import {
  NgApexchartsModule,
  ApexChart,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexXAxis
} from 'ng-apexcharts';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-dashboardv1',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule],
  templateUrl: './dashboardv1.component.html',
  styleUrls: ['./dashboardv1.component.scss']
})
export class Dashboardv1Component {

  pieSeries: ApexNonAxisChartSeries = [118, 4, 3];

  pieLabels = [
    'Success',
    'Warning',
    'Failed'
  ];

  pieChart: ApexChart = {
    type: 'donut',
    height: 320
  };

  barSeries: ApexAxisChartSeries = [
    {
      name: 'Transactions',
      data: [120, 150, 140, 180, 190, 170, 210]
    }
  ];

  barChart: ApexChart = {
    type: 'bar',
    height: 320
  };

  xAxis: ApexXAxis = {
    categories: [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ]
  };

}
