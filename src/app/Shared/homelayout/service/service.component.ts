import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  servicecarddata =[
    {
      "title": "Web",
       "substitle":"Development",
      "img": "../../../../assets/images/webdevelopment.png",
    },
    {
      "title": "User ",
      "substitle":"Interface Design",
      "img": "../../../../assets/images/userinterfacedesign.png",
   
    },
    {
      "title": "User Experience ",
      "substitle":"Design",
      "img": "../../../../assets/images/user-experience.png"
    },
    {
      "title": "Digital ",
      "substitle":"Marketing",
      "img":"../../../../assets/images/social-media.png"
    }
  ];
  
  cardData= this.servicecarddata;
  
}
