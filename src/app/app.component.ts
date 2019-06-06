import { Component } from '@angular/core';
import { CarouselDataClass } from 'carousel/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-carousel';

  currentIndex: number = 2;

  /* A object holding all the URLS provided */
  carouselData: CarouselDataClass = {
    img_urls:
      [
        "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg",
        "https://riverinawaste.ramjo.nsw.gov.au/wp-content/uploads/2017/07/cybersecurity-background.jpg",
        "https://hdwallpaperfx.com/wp-content/uploads/2018/04/Digital-Background-Wallpaper.jpg",
        "https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629__340.jpg"
      ]
  };

  /* WHETHER OR NOT SHOW PREV/NEXT BUTTONS */
  showPrevNextButtons: boolean = true;

  /* WHETHER OR NOT SHOW BOTTOM CIRCLE BUTTONS */
  showBottomButtons: boolean = true;

}
