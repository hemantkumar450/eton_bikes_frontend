import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '../../models/product.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() data:Array<KeyValue>;
  clicked = -1;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.data, 'faq');
  }

}
