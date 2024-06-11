import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [AboutComponent, ServiceComponent, FeedbackComponent],
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.css'
})
export class HomelayoutComponent {

}
