import { Component } from '@angular/core';
import { FormsModule, NgForm, Validators } from '@angular/forms'; // Add Validators import
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FutsalDetail } from '../../shared/futsal-detail';
import { FutsalDetailService } from '../../shared/futsal-detail.service';

@Component({
  selector: 'app-futsal-detail-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // Already correctly added CommonModule and FormsModule
  templateUrl: './futsal-detail-form.component.html',
  styles: [],
})
export class FutsalDetailFormComponent {
  formSubmitted: boolean = false;
  formData: FutsalDetail = this.initializeFormData();

  constructor(
    private futsalService: FutsalDetailService,
    private toastr: ToastrService
  ) {}

  // Initialize default form data
  private initializeFormData(): FutsalDetail {
    return {
      futsalDetailId: null,
      futsalName: '',
      location: '',
      contactNumber: '',
      email: '',
      description: '',
      pricing: '',
      operatingHours: '',
    };
  }

  // Handle form submission
  onSubmit(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      this.formData.futsalDetailId == null
        ? this.insertRecord(form)
        : this.updateRecord(form);
    } else {
      this.toastr.error('Please fill all the required fields.', 'Form Error');
    }
  }

  // Insert new record
  private insertRecord(form: NgForm) {
    this.futsalService.postFutsalDetail(this.formData).subscribe({
      next: () => {
        this.toastr.success('Record inserted successfully!', 'Futsal Detail');
        this.resetForm(form);
      },
      error: (err) => {
        console.error('Insert Error:', err);
        this.toastr.error('Failed to insert the record.', 'Insert Error');
      },
    });
  }

  // Update existing record
  private updateRecord(form: NgForm) {
    this.futsalService.putFutsalDetail(this.formData).subscribe({
      next: () => {
        this.toastr.info('Record updated successfully!', 'Futsal Detail');
        this.resetForm(form);
      },
      error: (err) => {
        console.error('Update Error:', err);
        this.toastr.error('Failed to update the record.', 'Update Error');
      },
    });
  }

  // Reset the form and clear data
  private resetForm(form: NgForm) {
    form.resetForm(); // Reset Angular form
    this.formData = this.initializeFormData(); // Reset formData
    this.formSubmitted = false;
  }

  // Restrict contact number input to numeric only and update the model
  onNumberInput(event: any): void {
    let input = event.target.value;
  
    // Allow only numeric characters and update the input
    input = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    
    // Restrict to 10 digits
    if (input.length > 10) {
      input = input.slice(0, 10); // Truncate to 10 digits
    }
  
    // Update the model
    event.target.value = input;
    this.formData.contactNumber = input;
  }

  // Validate the contact number (ensure it contains only digits and is exactly 10 characters long)
  validateContactNumber(contactNumber: any): void {
    if (contactNumber.control) {
      contactNumber.control.setValidators([
        Validators.required,
        Validators.pattern('^[0-9]{10}$'), // Only numeric and exactly 10 digits
      ]);
      contactNumber.control.updateValueAndValidity();
    }
  }
}
