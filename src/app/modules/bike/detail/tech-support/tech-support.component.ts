import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.scss']
})
export class TechSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  techSupp = 'tab1';

}
