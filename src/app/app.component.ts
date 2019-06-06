import { Component } from '@angular/core';
import { ICarouselData } from 'carousel/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-carousel';

  currentIndex: number = 2;

  automaticScrollAllowed: boolean = true;

  automaticScrollDurationinMs: number = 1000;

  /* A object holding all the URLS provided */
  carouselData: ICarouselData = {
    img_urls:
      [
        "https://cdn.pixabay.com/photo/2019/06/05/14/27/fantasy-4253765_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/06/03/17/33/desert-4249373_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/06/02/15/02/buzzard-4246613_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/05/30/16/27/landscape-4240168_960_720.jpg"
      ]
  };


  carouselImgString = this.carouselData.img_urls.toString();

  /* WHETHER OR NOT SHOW PREV/NEXT BUTTONS */
  showPrevNextButtons: boolean = true;

  /* WHETHER OR NOT SHOW BOTTOM CIRCLE BUTTONS */
  showBottomButtons: boolean = true;

  onModelChangeFn() {
    this.carouselData.img_urls = this.carouselImgString.split(",")
  }
}
