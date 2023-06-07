import { Component, OnInit } from '@angular/core';

import { ResourcesComponent } from '../resources/resources.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  content?: string;
  isSideBarCollapsed: boolean = true;


  toggleSidebar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }
  
}

