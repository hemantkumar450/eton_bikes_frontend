import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  images = [
    "/assets/img/files/ftwilliam19_h1d6041_1.jpg",
    "/assets/img/files/ftwilliam19a63i0632_1.jpg",
    "/assets/img/files/ftwilliam19bb019807_0.jpg",
    "/assets/img/files/ftwilliam19_h1d7631_0.jpg",
    "/assets/img/files/ftwilliam19_m1_0797_2.jpg",
  ];

  constructor() {}

  ngOnInit(): void {}
}
