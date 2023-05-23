import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  // slideIndex = 1;

  images = [
    {
      url: '../../assets/Banner.png',
      title: 'Image 1',
      description: 'Furniture <br> 2022',
      newArrival: "NEW ARRIVALS",
      springCollection: 'SPRING <br> COLLECTION'
    },
    {
      url: '../../assets/banner2.png',
      title: 'Image 2',
      description: 'Furniture <br> 2022',
      newArrival: "NEW ARRIVALS",
      springCollection: 'SPRING <br> COLLECTION'
    },
    {
      url: '../../assets/banner3.png',
      title: 'Image 2',
      description: 'Furniture <br> 2022',
      newArrival: "NEW ARRIVALS",
      springCollection: 'SPRING <br> COLLECTION'
    },

  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }


  ngOnInit(): void {
    //   this.showSlides(this.slideIndex);
  }

  // plusSlides(n: number) {
  //   this.showSlides(this.slideIndex += n);
  // }

  // currentSlide(n: number) {
  //   this.showSlides(this.slideIndex = n);
  // }

  // showSlides(n: number) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) { this.slideIndex = 1 }
  //   if (n < 1) { this.slideIndex = slides.length }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[this.slideIndex - 1].style.display = "block";
  //   dots[this.slideIndex - 1].className += " active";
  // }

}
