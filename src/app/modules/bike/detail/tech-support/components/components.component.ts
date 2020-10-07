import { KeyValue } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";
import { KeyValueModel } from "src/app/core/model/product.model";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.scss"],
})
export class ComponentsComponent implements OnInit {
  @Input() data: KeyValueModel[];
  constructor() {}

  ngOnInit(): void {}
}
