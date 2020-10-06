import { Component, OnInit, Input } from '@angular/core';
import { TechSupports } from '../models/product.model';
@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.scss']
})
export class TechSupportComponent implements OnInit {
  techSupp = 'faq';
  @Input() data: TechSupports;
  // techSupport: TechSupports;
  faq:Array<object>;
  comp: Array<object>;
  warrantAndReg: Array<object>;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.data, 'Tech suports');
    // this.techSupport = this.data;
    this.faq = this.data.faqs;
    this.comp = this.data.components;
    this.warrantAndReg = this.data.warranty_and_registration;
  }
}
