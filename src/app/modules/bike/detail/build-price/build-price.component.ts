import { Component, OnInit, Input } from '@angular/core';
import { BuildSpecs, BuildPriceItem, KeyValueModel, DetailModel } from 'src/app/core/model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { environment } from 'src/environments/environment';
const defaultSliderData = 6;
@Component({
  selector: 'app-build-price',
  templateUrl: './build-price.component.html',
  styleUrls: ['./build-price.component.scss']
})
export class BuildPriceComponent implements OnInit {
  path = environment.filePath;
  defaultImage = environment.noImagePath;
  buildSpecsText = 'Show Full Specs';
  buildSpec = 'less';
  sliderCurr = 'prev';
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
  constructor(public dialog: MatDialog) { }
  buildPriceItems:BuildPriceItem[] = [{ label: 'select', value: 'select'}];
  specsSidebar:string[];
  specsData = [];
  mediaDetail:DetailModel = null;
  sliderValue = 0;
  rightSlider = 0;
  totalSlider = 0;
  ngOnInit(): void {
    // this.builds[0]
    
    this.buildPriceItems = this.builds.map(ele => {
      // console.log(ele, 'ele')
      return {
        label: ele.name,
        value: ele.name
      }
    });
    console.log(this.buildPriceItems, 'bu')
    this.createBuildPriceSummary(this.builds[0].name);
    this.generateBuildSpecs();
    this.sliderValue = this.sliderCurr === 'next' ? -87.5048 : 135;
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
    this.totalSlider = this.specsData.length > defaultSliderData ? this.specsData.length - defaultSliderData : 0;
    // console.log(this.specsData, 'specs DAta');
  }
  handleBuildPrice(e: Event) {
    this.createBuildPriceSummary(this.selectedBuildPrice);
  }

  createBuildPriceSummary(name) {
    console.log(name, 'selected');

    const item = this.builds.find(ele => ele.name == name);
    if (item) {
      this.buildPriceSummmary = item.build_specs;
      this.buildPriceSummmary = this.buildPriceSummmary.slice(0,3);
      this.mediaDetail = item.detail;
    }
    // item && this.buildPriceSummmary.push();
  }

  showPopupImage() {
    const curr = this.mediaDetail.media && this.mediaDetail.icon ? this.mediaDetail.media : (this.mediaDetail.media ? this.mediaDetail.media : this.mediaDetail.icon);
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '100%',
      height: '100%',
      disableClose: false,
      panelClass: 'my-full-screen-dialog',
      data: { curr, singleImage: true}
    });
  }
  
  shhowFullOrLess() {
    this.buildSpec = this.buildSpec === 'less' ? 'full' : 'less';
    this.buildSpecsText = this.buildSpec === 'less' ? 'Show Full Specs' : 'Show Less';
  }
  buildSpecSlide(curr: string) {
  }
  handleSliderLeftClick() {    
    this.rightSlider -= 1;
    if (this.rightSlider === 0) {
      this.sliderValue += 100;
    } else {
      this.sliderValue += 200
    }
    this.specsClicked -= 1;
    // console.log(this.rightSlider, this.specsClicked, 'left click')
  }
  handleSliderRightClick() {
    // console.log(this.rightSlider, 'right click')
    this.rightSlider += 1;
    if (this.rightSlider === this.totalSlider) {
      this.sliderValue -= 100;
    } else {
      this.sliderValue -= 200
    }
    this.specsClicked += 1;
  }
}
