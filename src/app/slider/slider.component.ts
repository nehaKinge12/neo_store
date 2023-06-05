import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }
  activeSlideIndex: number = 0;
  ngOnInit(): void {

  }
  onSwiper(swiper: swiper) {
    console.log(swiper);

  }
  onSlideChange(event: any) {
    console.log('slide change');
    this.activeSlideIndex = event.activeIndex;
  }
  shopNow() {
    this.router.navigate(['../products'], { relativeTo: this.route });
  }

}
