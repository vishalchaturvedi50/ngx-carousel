import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICarouselData } from './carousel';

@Component({
  selector: 'ngx-carousel',
  templateUrl: 'carousel.html',
  styleUrls: ['carousel.scss']
})
export class CarouselComponent implements OnInit, OnChanges {


  /* Automatic changeValue */
  @Input() automaticScrollAllowed: boolean = true;

  /* Automatic scroll duration */
  @Input() automaticScrollDurationinMs: number = 1000;

  /* A variable to hold the current index of the carousel */
  @Input() currentIndex: number = 0;

  /* A object holding all the URLS provided */
  @Input() carouselData: ICarouselData = {
    img_urls: []
  };

  /* WHETHER OR NOT SHOW PREV/NEXT BUTTONS */
  @Input() showPrevNextButtons: boolean = true;

  /* WHETHER OR NOT SHOW BOTTOM CIRCLE BUTTONS */
  @Input() showBottomButtons: boolean = true;

  private autoScrollPropFn: any;

  constructor() {

  }

  ngOnInit() {
    this.autoScrollFn();
  }

  /* Implementation for ng on changes */
  ngOnChanges(changes: SimpleChanges): void {
    //If either of these variables get changes
    if (changes.automaticScrollAllowed || changes.automaticScrollDurationinMs) {
      this.autoScrollFn();
    }
  }

  /* Function to enable disable automatic scroll */
  autoScrollFn() {
    if (this.autoScrollPropFn != undefined)
      clearInterval(this.autoScrollPropFn);

    if (this.automaticScrollAllowed) {
      this.autoScrollPropFn = setInterval(() => {
        this.btnClickFn(1);
      }, this.automaticScrollDurationinMs);
    };
  }

  /* Function which get's called as we do a button click */
  btnClickFn(selectN: number) {
    let length = this.carouselData.img_urls.length;
    let idx = this.currentIndex + selectN;
    if (idx < 0)
      idx = length - 1;
    else if (idx > length - 1)
      idx = 0;

    this.currentIndex = idx;
  }

  /* Function to handle click event for circles  */
  circBtnClickFn(ev: Event) {
    let allAttr = (<HTMLElement>ev.target).attributes;
    this.currentIndex = allAttr["loopindex"].value;
  }


}
