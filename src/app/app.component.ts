import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import {filter} from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
    .pipe(filter((event:Event)=> event instanceof NavigationStart))
    .subscribe((event: Event) => { console.log(event);
    });
  }
}
