import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProjectsComponent } from './projects/projects.component';
import { PricingComponent } from './pricing/pricing.component';

@Component({
  selector: 'app-homelayout',
  standalone: true,
  imports: [AboutComponent, ServiceComponent, FeedbackComponent, ProjectsComponent,PricingComponent],
  templateUrl: './homelayout.component.html',
  styleUrl: './homelayout.component.css'
})
export class HomelayoutComponent {

}
