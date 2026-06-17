import { Component } from '@angular/core';
import { Sidebarv1Component } from "../sidebarv1/sidebarv1.component";
import { RouterModule } from "@angular/router";
import { Headerv1Component } from "../headerv1/headerv1.component";
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-main-layoutv1',
  standalone: true,
  imports: [Sidebarv1Component, RouterModule, Headerv1Component],
  templateUrl: './main-layoutv1.component.html',
  styleUrl: './main-layoutv1.component.scss'
})
export class MainLayoutv1Component {


  constructor(
    public sidebarService: SidebarService
  ) {}
}
