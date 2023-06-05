import { Component } from '@angular/core';

@Component({
  selector: 'app-from-our-blog',
  templateUrl: './from-our-blog.component.html',
  styleUrls: ['./from-our-blog.component.scss']
})
export class FromOurBlogComponent {
  blog = [
    {
      title1: 'BEDROOM CHAIR',
      title2: 'Perfect Bedroom Corner Chair ',
      details: 'An accent chair is a great focal point, adds contrast, and complements the room’s decor. ',
      img: "assets/from our blog/image 1194 (1).png",
      readMore: "READ MORE"
    },
    {
      title1: 'FURNITURE',
      title2: 'A Beautiful Sunday Morning',
      details: 'Color sets the tone for any space and dramatically impacts the room’s atmosphere.',
      img: "assets/from our blog/image 1194 (2).png",
      readMore: "READ MORE"
    },
    {

      title1: 'DINING CHAIR',
      title2: 'Maximalism Design Style',
      details: 'A maximalist space is interesting to look at. Contrast and color are everything. ',
      img: "assets/from our blog/image 1194.png",
      readMore: "READ MORE"

    }
  ]
}
