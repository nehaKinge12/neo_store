import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import swiper from 'swiper';
// import SwiperCore, { Autoplay, Zoom } from 'swiper';
import SwiperCore, { Autoplay, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Zoom]);




@Component({
  selector: 'app-neo-store-furniture',
  templateUrl: './neo-store-furniture.component.html',
  styleUrls: ['./neo-store-furniture.component.scss']
})
export class NeoStoreFurnitureComponent implements OnInit {
  swiper: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  images: string[] = [
    '../../assets/neoStoreFurniture/Rectangle 226.png',
    '../../assets/neoStoreFurniture/Rectangle 228.png',
    '../../assets/neoStoreFurniture/Rectangle 229.png',
    '../../assets/neoStoreFurniture/Rectangle 226.png',
    '../../assets/neoStoreFurniture/Rectangle 226.png',
    '../../assets/neoStoreFurniture/Rectangle 228.png',
    '../../assets/neoStoreFurniture/Rectangle 226.png',
    '../../assets/neoStoreFurniture/Rectangle 229.png',
  ];
  isZoomed = false;

  onSwiper(swiper: any) {
    // Store the Swiper instance
    this.swiper = swiper;
  }

  toggleZoom(event: Event) {
    if (this.isZoomed) {
      this.swiper.zoom.out();
    } else {
      this.swiper.zoom.in(event.target);
    }
    this.isZoomed = !this.isZoomed;
  }
}
