import { Component } from '@angular/core';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss']
})
export class SpecialOfferComponent {
  specialOffer = [
    {
      name: 'White Wooden Chair',
      imgLink: 'assets/Special offer/Rectangle 211 (1).png',
      price: '₹1200.00',
      Available: 289
    },
    {
      name: 'White Wooden Chair',
      imgLink: 'assets/Special offer/Rectangle 211 (2).png',
      price: '₹1200.00',
      Available: 289
    },
    {
      name: 'White Wooden Chair',
      imgLink: 'assets/Special offer/white wooden chair.png',
      price: '₹1200.00',
      Available: 289
    }
  ]
}
