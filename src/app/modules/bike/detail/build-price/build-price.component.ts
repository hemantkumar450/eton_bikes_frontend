import { Component, OnInit, Input } from '@angular/core';
import { BuildSpecs, BuildPriceItem, KeyValueModel } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-build-price',
  templateUrl: './build-price.component.html',
  styleUrls: ['./build-price.component.scss']
})
export class BuildPriceComponent implements OnInit {
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
  @Input() builds:BuildSpecs[];
  selectedBuildPrice:string;
  specsClicked = 0;
  buildPriceSummmary:KeyValueModel[] = null;
  constructor() { }
  buildPriceItems:BuildPriceItem[] = [{ label: 'select', value: 'select'}];
  specsSidebar:string[];
  specsData = [];
  ngOnInit(): void {
    // this.builds[0]
    this.buildPriceItems = this.builds.map(ele => {
      // console.log(ele, 'ele')
      return {
        label: ele.name,
        value: ele.name
      }
    });
    this.createBuildPriceSummary(this.builds[0].name);
    this.generateBuildSpecs();
  }

  generateBuildSpecs() {
    this.specsSidebar = this.builds[0].build_specs.map(ele => {
      return ele.key;
    });
    this.builds.forEach(item => {
      const temp = [item.name];
      item.build_specs.forEach(ele => {
        temp.push(ele.value);
      })
      this.specsData.push(temp);
    });
    console.log(this.specsSidebar, this.specsData);
  }
  handleBuildPrice(e: Event) {
    console.log(this.selectedBuildPrice, 'selected');
    this.createBuildPriceSummary(this.selectedBuildPrice);
  }

  createBuildPriceSummary(name) {
    const item = this.builds.find(ele => ele.name == name);
    if (item) {
      this.buildPriceSummmary = item.build_specs;
    }
    // item && this.buildPriceSummmary.push();
  }

}
