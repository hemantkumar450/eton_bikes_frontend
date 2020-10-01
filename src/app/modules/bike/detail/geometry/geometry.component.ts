import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.scss']
})
export class GeometryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewMode = 'tab1';
  viewModeInner1 = 'tab1';
  viewModeInner2 = 'tab3';
  viewModeInner3 = 'tab5';

}
