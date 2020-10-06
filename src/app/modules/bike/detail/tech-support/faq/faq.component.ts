import { Component, OnInit, Input } from "@angular/core";
import { KeyValueModel } from "src/app/auth/core/model/product.model";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  @Input() data: Array<KeyValueModel>;
  clicked = -1;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.data, 'faq');
  }
}
