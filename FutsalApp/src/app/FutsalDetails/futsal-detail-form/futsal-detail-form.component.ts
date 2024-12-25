import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-futsal-detail-form',
  // imports: [],
  templateUrl: './futsal-detail-form.component.html',
  styles: ``
})
export class FutsalDetailFormComponent {
  formSubmitted: boolean = false; // Simulating the service property for form submission state
  formData: { futsalDetailId: string | null } = { futsalDetailId: null }; // Simulating the service form data

  onSubmit(form: NgForm) {
    this.formSubmitted = true; // Set the submitted flag
    console.log('Form submitted:', form.value); // Log form values
  }
}
