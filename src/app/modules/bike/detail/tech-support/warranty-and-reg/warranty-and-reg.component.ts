import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warranty-and-reg',
  templateUrl: './warranty-and-reg.component.html',
  styleUrls: ['./warranty-and-reg.component.scss']
})
export class WarrantyAndRegComponent implements OnInit {
  @Input() data:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data, 'warrant')

  }

}
