import { Component, OnInit, Input } from '@angular/core';
import { BuildSpecs, BuildPriceItem, KeyValueModel } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-build-price',
  templateUrl: './build-price.component.html',
  styleUrls: ['./build-price.component.scss']
})
export class BuildPriceComponent implements OnInit {
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
