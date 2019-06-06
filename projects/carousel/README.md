# ngx-img-carousel

  
This library is an implementation for a carousel with basic CSS and a bit of JavaScript. Feel free to use it for your Angular project implementations and to raise any issues or feature request with help of github [repository](https://github.com/vishalchaturvedi50/ngx-carousel/issues).

## How to use ?

 1. Install the package from npm.

		npm install ngx-img-carousel --save

  2. Import the Module into you application. 

		    @NgModule({
				declarations: [],
				imports: [CarouselModule],
				providers: [],
				bootstrap: []
			})
3. Get going!. Use it in your application.  Don't forget to provide a max-height and max-width parameter for better use. 
 
		 <ngx-carousel style="max-height: 50vh;max-width:100%">
		 [carouselData]="carouselData"
		 [currentIndex]="currentIndex" 
		 [showBottomButtons]="showBottomButtons" 
		 [showPrevNextButtons]="showPrevNextButtons"
		 </ngx-carousel>
		
		
|Available @Input Parameters| Description |
|--|--|
| carouselData | It takes image URL's in { img_urls:[] } format. The Module also exposes interface **ICarouselData** for the same purpose. |
| currentIndex <optional> | An optional parameter to specify start index for carousel. Default : 0 |
|showBottomButtons| The carousel has circular buttons at the bottom middle section for easy navigation. You can turn them off/on by passing boolean value for this parameter. Default : true |
|showPrevNextButtons|The carousel also has previous next buttons at the left and right mid for navigation. You can turn them off/on by passing boolean value for this parameter. Default : true |

		
## What's next ? 

This package is still in it's initial phase and the developer has planned to work on below mentioned items on priority : 

 - Providing CSS flexibility to change various aspects.
 - Provide various animation classes to choose from. 
 - Make it work with mobile devices.
 - Listen to the community and build what's relevant.

## License
Don't even ask as it is MIT Licensed.  
