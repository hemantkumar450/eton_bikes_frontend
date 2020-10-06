import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '../../models/product.model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  @Input() data:Array<KeyValue>;
  constructor() { }

  ngOnInit(): void {
  }

}
