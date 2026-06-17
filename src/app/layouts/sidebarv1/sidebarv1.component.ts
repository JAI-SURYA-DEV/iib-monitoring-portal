import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '../../core/services/sidebar.service';
@Component({
  selector: 'app-sidebarv1',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebarv1.component.html',
  styleUrl: './sidebarv1.component.scss'
})
export class Sidebarv1Component {


  constructor(
    public sidebarService: SidebarService
  ) {}
}
