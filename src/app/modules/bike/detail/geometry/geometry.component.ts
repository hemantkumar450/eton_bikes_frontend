import { Component, OnInit, Input } from "@angular/core";
import { Geometry } from "src/app/auth/core/model/product.model";

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
    return this.viewMode === i ? "js-tabs__option--active" : "";
  }
}
