import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { MainLayoutv1Component } from './layouts/main-layoutv1/main-layoutv1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iib-monitoring-portal';
}
