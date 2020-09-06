import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  enddate: string;
  private _diff: number;
  private _days: number;
  private _hours: number;
  private _minutes: number;
  private _seconds: number;

  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(
        map(x => {
          this._diff =
            Date.parse('2020-09-30') - Date.parse(new Date().toString());
        })
      )
      .subscribe(x => {
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
      });
  }

  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }
}
