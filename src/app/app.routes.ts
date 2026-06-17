import { Routes } from '@angular/router';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { AuditComponent } from './features/audit/audit.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MonitoringComponent } from './features/monitoring/monitoring.component';
import { ReportsComponent } from './features/reports/reports.component';
import { ValidationComponent } from './features/validation/validation.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { Dashboardv1Component } from './features/dashboardv1/dashboardv1.component';
import { MainLayoutv1Component } from './layouts/main-layoutv1/main-layoutv1.component';

// export const routes: Routes = [];

export const routes: Routes = [
  {
    path: '',
    // component: MainLayoutComponent,
    component: MainLayoutv1Component,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'dashboardv1',
        component: Dashboardv1Component
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
  },
    {
    path: '**',
    redirectTo: 'dashboard'
  }
];
