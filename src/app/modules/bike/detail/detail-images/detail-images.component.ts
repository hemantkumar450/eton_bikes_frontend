import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail-images",
  templateUrl: "./detail-images.component.html",
  styleUrls: ["./detail-images.component.scss"],
})
export class DetailImagesComponent implements OnInit {
  images = [
    "/assets/img/files/toptube_bs.jpg",
    "/assets/img/files/chainstay_detail.jpg",
    "/assets/img/files/flipchip_29.jpg",
    "/assets/img/files/tire_clearance_grey.jpg",
    "/assets/img/files/dhx2_coil_bs.jpg",
    "/assets/img/files/downtube_protector.jpg",
    "/assets/img/files/matte_headtube.jpg",
    "/assets/img/detail/chain_slapper.jpg",
    "/assets/img/files/internal_routing.jpg",
    "/assets/img/files/vpp_1.jpg",
    "/assets/img/files/my21_v10mx_details_001.jpg",
    "/assets/img/files/my21_v10mx_details_004.jpg",
    "/assets/img/files/my21_v10mx_details_005.jpg",
  ];

  constructor() {}

  ngOnInit(): void {}
}
