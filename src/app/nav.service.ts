import {EventEmitter, Injectable } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  
  public drawerFlag: boolean;
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.drawerFlag = false;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.drawerFlag = !this.drawerFlag;
    if(this.drawerFlag)
      this.appDrawer.open();
    else
      this.appDrawer.close();
  }
}
