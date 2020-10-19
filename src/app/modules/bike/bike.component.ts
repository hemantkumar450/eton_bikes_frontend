import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss'],
})
export class BikeComponent {
  @Input() popupDisplay = false;
  constructor(private cdr: ChangeDetectorRef) {}
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  carouselItems = [1, 2, 3];

  exLineup = 'tab1';
  @Output() handleToggleCondition = new EventEmitter<boolean>();

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  closeBikes() {
    this.popupDisplay = false;
    this.handleToggleCondition.emit(false);
  }
  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  handleItemClick() {
    this.popupDisplay = false;
    this.handleToggleCondition.emit(false);
  }
}
