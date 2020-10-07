import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  constructor() {}
  name = "Angular";
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  products = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
    },
  ];

  exLineup = "tab1";

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}
}
