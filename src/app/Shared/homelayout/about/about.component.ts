import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

 aboutcarddata =[
  {
    "title": "Great Experience",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "image" : "../../../../assets/images/greatteam.png",
  },
  {
    "title": "Referece for Result",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "image" : "../../../../assets/images/refer.png"
  },
  {
    "title": "Experience Team",
    "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "image" : "../../../../assets/images/experience.png"
  },
];

cardData= this.aboutcarddata;

}
