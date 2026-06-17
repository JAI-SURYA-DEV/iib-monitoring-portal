import { Component } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-headerv1',
  standalone: true,
  imports: [],
  templateUrl: './headerv1.component.html',
  styleUrl: './headerv1.component.scss'
})
export class Headerv1Component {


  constructor(public sidebarService: SidebarService) {}

   toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
