import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FutsalDetail } from '../../shared/futsal-detail';
import { FutsalDetailService } from '../../shared/futsal-detail.service';

@Component({
  selector: 'app-futsal-detail-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Already correctly added CommonModule and FormsModule
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
      operatingHours:'',
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
}
