import { Component, OnInit, Input } from "@angular/core";
import { KeyValueModel } from "src/app/core/model/product.model";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  @Input() data: Array<KeyValueModel>;
  // clicked = -1;
  faqClicked:object = {};
  constructor() {}

  ngOnInit(): void {
    // console.log(this.data, 'faq');
  }

  handleFaqClick(i) {
    const show = this.faqClicked[i] && this.faqClicked[i]['show'] ? false : true;
    this.faqClicked[i] = {};
    this.faqClicked[i]['show'] = show;
  }
}
