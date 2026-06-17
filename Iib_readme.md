IIB Mornitoring portal Dependencies

npm install -g @angular/cli
ng version

ng new iib-monitoring-portal
✔ Routing? Yes

✔ Stylesheet? SCSS
cd iib-monitoring-portal
ng serve -o
http://localhost:4200

ng add @angular/material

Theme:
Azure Blue

Typography:
Yes

Animations:
Yes

npm install @fortawesome/fontawesome-free

npm install apexcharts ng-apexcharts

npm install apexcharts
npm install ng-apexcharts@1.15.0

For Your Angular 18 Dashboard Project Use:
-----------------------------------------
npm uninstall apexcharts
npm install apexcharts@3.54.0
npm install ng-apexcharts@1.8.0

Then verify:
-----------
npm list apexcharts
npm list ng-apexcharts

npm install xlsx file-saver

Create Enterprise Folder Structure
----------------------------------
src/app
mkdir core  -guard,interceptors,services
mkdir shared - components,models,pipes
mkdir layouts - main-layout,sidebar,header
mkdir features -dashboard,reports,analytics

ng g c layouts/main-layout
ng g c layouts/main-layoutv1

Generate pages:
--------------
ng g c features/dashboard
ng g c features/reports
ng g c features/analytics
ng g c features/monitoring
ng g c features/validation
ng g c features/audit


ng g c layouts/main-layoutv1
ng g c features/dashboardv1
ng g c layouts/sidebarv1 --standalone
ng g c layouts/headerv1 --standalone

ng generate component layout/main-layout --standalone
ng generate component layout/sidebar --standalone
ng generate component layout/header --standalone
ng generate component pages/dashboard --standalone

src/app/shared/material.module.ts

Install Date Range Picker
-------------------------
npm install moment
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

ng generate service core/services/sidebar


ng g c shared/components/breadcrumb --standalone