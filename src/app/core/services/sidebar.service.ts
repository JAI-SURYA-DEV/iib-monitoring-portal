import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  collapsed = signal(false);

  constructor() { }

  toggleSidebar() {
    this.collapsed.update(value => !value);
  }
}
