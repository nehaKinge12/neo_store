import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],

})
export class SignUpComponent implements OnInit {
  signUp: FormGroup | any;

  constructor(private _route: ActivatedRoute, private router: Router) { }

  images = [
    {
      url: 'assets/Banner.png',
      title: 'Image 1',
      description: 'Furniture 2022',
      newArrival: "NEW ARRIVALS",
      springCollection: 'SPRING <br> COLLECTION'
    },
    {
      url: 'assets/banner2.png',
      title: 'Image 2',
      description: 'Furniture <br> 2022',
      newArrival: "NEW ARRIVALS",
      springCollection: 'SPRING <br> COLLECTION'
    },
    {
      url: 'assets/banner3.png',
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

  }



}
