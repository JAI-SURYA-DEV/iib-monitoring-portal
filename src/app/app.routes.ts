import { Routes } from '@angular/router';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { AuditComponent } from './features/audit/audit.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MonitoringComponent } from './features/monitoring/monitoring.component';
import { ReportsComponent } from './features/reports/reports.component';
import { ValidationComponent } from './features/validation/validation.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// export const routes: Routes = [];

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      },
      {
        path: 'monitoring',
        component: MonitoringComponent
      },
      {
        path: 'validation',
        component: ValidationComponent
      },
      {
        path: 'audit',
        component: AuditComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
