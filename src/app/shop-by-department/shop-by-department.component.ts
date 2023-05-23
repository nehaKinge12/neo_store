import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-department',
  templateUrl: './shop-by-department.component.html',
  styleUrls: ['./shop-by-department.component.scss']
})
export class ShopByDepartmentComponent {

  departMentList = [
    {
      name: 'Popular',
      imgLink: 'assets/popular.png'
    },
    {
      name: 'Chair',
      imgLink: 'assets/chair.png'
    },
    {
      name: 'Table',
      imgLink: '/assets/table.png'
    },
    {
      name: 'Sofa',
      imgLink: 'assets/sofa.png'
    },
    {
      name: 'Cupboard',
      imgLink: 'assets/cupboard.png'
    },
    {
      name: 'Lamp',
      imgLink: 'assets/Lamp.png'
    }
  ]

  selectedItem = {
    name: 'Table',
    imgLink: '/assets/table.png'
  };

}
