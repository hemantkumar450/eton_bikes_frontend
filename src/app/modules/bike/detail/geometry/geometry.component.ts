import { Component, OnInit, Input } from "@angular/core";
import { Geometry, Frame } from "src/app/core/model/product.model";

@Component({
  selector: "app-geometry",
  templateUrl: "./geometry.component.html",
  styleUrls: ["./geometry.component.scss"],
})
export class GeometryComponent implements OnInit {
  @Input() data: Geometry;
  viewMode = 0;
  viewModeInner1 = "high";
  // geometryInnerHeader
  constructor() {}

  ngOnInit(): void {
    console.log(this.data, "Geometry");
  }

  getMainActiveClass(i: number) {
    // this.viewModeInner1 = 'high';
    return this.viewMode === i ? "js-tabs__option--active" : "";
  }
  getFrameSizeStyle(f:Frame) {
    const style = {};
    if ( f.key == 'S') {
      style['width'] = '46.153846153846%';
      style['margin-left'] = '0%';
    } else if( f.key == 'M') {
      style['width'] = '38.461538461538%';
      style['margin-left'] = '38.461538461538%';
    } else if (f.key == 'L') {
      style['width'] = '38.461538461538%';
      style['margin-left'] = '61.538461538462%';
    } else if (f.key == 'XL') {
      style['width'] = '45.454545454545%';
      style['margin-left'] = '54.545454545455%';
    }
    return style;
  }
}
