import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, BrowserModule],
  exports: [CarouselComponent]
})
export class CarouselModule { }
