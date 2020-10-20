import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-geometry-image',
  templateUrl: './geometry-image.component.html',
  styleUrls: ['./geometry-image.component.scss']
})
export class GeometryImageComponent implements OnInit, OnChanges {
  @Input() overValue;
  constructor() { 
    
  }

  ngOnInit(): void {
    // console.log(this.overValue, 'over value')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('value changed', this.overValue);
  }

}
