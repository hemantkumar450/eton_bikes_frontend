import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Router change scroll to top
    this.scrollOnTop();
  }

  /**
   * Scroll to top on page change
   */
  scrollOnTop() {
    const navigationEndEvent = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    navigationEndEvent.subscribe(() => {
      // Scroll Top On Page Change
      window.scrollTo(0, 0);
    });
  }
}
