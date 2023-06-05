import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  products = [
    {
      name: 'Ultricies condimentum imperdiet',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35.png'
    },
    {
      name: 'Vitae suspendisse sed',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (1).png'
    },
    {
      name: 'Sed at fermentum',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (2).png'
    },
    {
      name: 'Ultricies condimentum imperdiet',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (3).png'
    },
    {
      name: 'Vitae suspendisse sed',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (4).png'
    },
    {
      name: 'Sed at fermentum',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (5).png'
    },
    {
      name: 'Ultricies condimentum imperdiet',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (6).png'
    },
    {
      name: 'Vitae suspendisse sed',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (7).png'
    },
    {
      name: 'Sed at fermentum',
      discountedPrice: '₹26.00 ',
      originalPrice: '₹42.00',
      imgLink: '/assets/product/Rectangle 35 (8).png'
    }
  ];
  nextpage() {
    this.router.navigate(['../product-details'], { relativeTo: this.route });
  }

  page = 3;
}




