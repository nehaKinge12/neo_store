import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.scss']
})
export class HeadingsComponent {
  @Input() heading: string = '';
  @Input() subHeading: string = '';
}
