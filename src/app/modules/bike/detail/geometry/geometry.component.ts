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
  hoverValue = '';
  // geometryInnerHeader
  constructor() {}

  ngOnInit(): void {
    // console.log(this.data, "Geometry");
  }
  setActiveClass(ele:any) {
    this.hoverValue = ele.order;
    // console.log(ele, 'elemn')
  }

  getMainActiveClass(i: number) {
    // this.viewModeInner1 = 'high';
    return this.viewMode === i ? "js-tabs__option--active" : "";
  }
  getFrameSizeStyle(f:Frame) {
    const style = {};
    if ( f.key == 'small') {
      style['width'] = '46.153846153846%';
      style['margin-left'] = '0%';
    } else if( f.key == 'medium') {
      style['width'] = '38.461538461538%';
      style['margin-left'] = '38.461538461538%';
    } else if (f.key == 'large') {
      style['width'] = '38.461538461538%';
      style['margin-left'] = '61.538461538462%';
    } else if (f.key == 'xl') {
      style['width'] = '45.454545454545%';
      style['margin-left'] = '54.545454545455%';
    }
    return style;
  }
}
