import { Component } from '@angular/core';
import { FutsalDetailFormComponent } from '../FutsalDetails/futsal-detail-form/futsal-detail-form.component';


@Component({
  selector: 'app-futsal-details',
  templateUrl: './futsal-details.component.html',
  standalone: true,  // If the component is standalone, set this to true (Angular 14+)
  imports: [FutsalDetailFormComponent]  // Add the form component here
})
export class FutsalDetailsComponent {
  // Your component logic here
}
