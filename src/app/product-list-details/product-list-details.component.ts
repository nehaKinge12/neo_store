import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import swiper from 'swiper';

import SwiperCore, { Autoplay, Zoom, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Zoom, Pagination]);




@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.component.html',
  styleUrls: ['./product-list-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListDetailsComponent {
  activeTab: string = 'description';
  count = 0;




  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  increase() {
    this.count++
  }
  decrease() {
    if (this.count > 0) {
      this.count--;
    }
  }
  @ViewChild('myModal') myModal!: ElementRef<HTMLDivElement>;

  openModal() {
    this.myModal.nativeElement.classList.add('show');
    this.myModal.nativeElement.style.display = 'block';
  }
  closeModal() {
    this.myModal.nativeElement.classList.remove('show');
    this.myModal.nativeElement.style.display = 'none';
  }

  onSwiper(swiper: swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
