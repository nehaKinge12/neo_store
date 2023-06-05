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
      imgLink: 'assets/shop-by-department/star.svg',
      imgLinkWhite: 'assets/shop-by-department/star-white.svg'
    },
    {
      name: 'Chair',
      imgLink: 'assets/shop-by-department/chair.svg',
      imgLinkWhite: 'assets/shop-by-department/chair-white.svg'

    },
    {
      name: 'Table',
      imgLink: 'assets/shop-by-department/table.svg',
      imgLinkWhite: 'assets/shop-by-department/table-white.svg'
    },
    {
      name: 'Sofa',
      imgLink: 'assets/shop-by-department/sofa.svg',
      imgLinkWhite: 'assets/shop-by-department/sofa-white.svg'
    },
    {
      name: 'Cupboard',
      imgLink: 'assets/shop-by-department/cupboard.svg',
      imgLinkWhite: 'assets/shop-by-department/cupboard-white.svg'
    },
    {
      name: 'Lamp',
      imgLink: 'assets/shop-by-department/lamp.svg',
      imgLinkWhite: 'assets/shop-by-department/lamp-white.svg'
    }
  ]

  selectedItem = {
    name: 'Table',
    imgLink: '/assets/table.png'
  };

}
