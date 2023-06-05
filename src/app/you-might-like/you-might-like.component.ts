import { Component } from '@angular/core';

@Component({
  selector: 'app-you-might-like',
  templateUrl: './you-might-like.component.html',
  styleUrls: ['./you-might-like.component.scss']
})
export class YouMightLikeComponent {
  trendingList = [
    {
      name: 'White Wooden Chair',
      imgLink: 'assets/Trending/White Wooden Chair.png',
      price: '₹1200.00'
    },
    {
      name: 'Modern Sofa Couch with Wood',
      imgLink: 'assets/Trending/Modern Sofa Couch with Wood.png',
      price: '₹1200.00'
    },
    {
      name: 'Armen Living Jaguar Chair',
      imgLink: 'assets/Trending/Armen Living Jaguar Chair.png',
      price: '₹1200.00'
    },
    {
      name: 'Modern clock',
      imgLink: 'assets/Trending/Modern clock.png',
      price: '₹1200.00'
    },
    {
      name: 'Globe Desk Lamp',
      imgLink: 'assets/Trending/Globe Desk Lamp.png',
      price: '₹1200.00'
    }
  ]
}
