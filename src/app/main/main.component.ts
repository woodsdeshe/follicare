import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
  isLandingPage: boolean = false;


  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setPageTitle();
        this.checkIfLandingPage();
      }
    });
  }

  /**
   * Toggles the sidebar collapse state.
   */
  toggleSidebar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
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

  setPageTitle(): void {
    const currentRoute = this.router.routerState.snapshot.url;
    switch (currentRoute) {
      case '/main':
        this.pageTitle = 'Main Page';
        break;
      case '/main/specialists':
        this.pageTitle = 'Specialists';
        break;
      case '/main/resources':
        this.pageTitle = 'Resources';
        break;
      default:
        this.pageTitle = '';
        break;
    }
  }

  checkIfLandingPage(): void {
    const currentRoute = this.router.routerState.snapshot.url;
    this.isLandingPage = currentRoute === '/main';
  }
}
