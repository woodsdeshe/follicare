import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { AuthService } from '../services/register.service';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  content?: string;
  isSideBarCollapsed: boolean = true;
  pageTitle: string = '';
  ;


  constructor(private router: Router, private authService: AuthService, private activatdRoute: ActivatedRoute) {}


  toggleSidebar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatdRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        map((route) => route.snapshot.data['title'])
      )
      .subscribe((title) => {
        this.pageTitle = title;
      });
  }
  
}

