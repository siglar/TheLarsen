import { Component } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheLarsen';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../assets/Hardergrat.jpg',
        medium: '../assets/Hardergrat.jpg',
        big: '../assets/Hardergrat.jpg'
      },
      {
        small: '../assets/omnatind.jpg',
        medium: '../assets/omnatind.jpg',
        big: '../assets/omnatind.jpg'
      },
      {
        small: '../assets/road.jpg',
        medium: '../assets/road.jpg',
        big: '../assets/road.jpg'
      },
      {
        small: '../assets/eiger.jpg',
        medium: '../assets/eiger.jpg',
        big: '../assets/eiger.jpg'
      }
    ];
  }
}
