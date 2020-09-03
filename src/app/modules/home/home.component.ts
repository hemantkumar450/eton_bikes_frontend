import { Component } from '@angular/core';

export interface Testimonial {
  text: string;
  name: string;
  designation: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {}
}
