import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-learning-management';
  sidebarExpanded = true;
  showSidebar = true;
  constructor(private router: Router) {
    router.events.filter(e => e instanceof NavigationEnd)
    .subscribe((e: NavigationEnd) => {
      if(e.url === '/login'){
        this.showSidebar = false;
        this.sidebarExpanded = false;
      }
      else{
        this.showSidebar = true;
        this.sidebarExpanded = true;
      }
    });
  }
 
}
