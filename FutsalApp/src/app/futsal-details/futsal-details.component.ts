import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FutsalDetail } from '../shared/futsal-detail';
import { FutsalDetailService } from '../shared/futsal-detail.service';
import { FutsalDetailFormComponent } from "../FutsalDetails/futsal-detail-form/futsal-detail-form.component";

@Component({
  selector: 'app-futsal-details',
  templateUrl: './futsal-details.component.html',
  standalone: true,
  imports: [CommonModule, FutsalDetailFormComponent],
})
export class FutsalDetailsComponent {

  futsalList: FutsalDetail[] = []; // List to store futsal details

  constructor(
    private futsalService: FutsalDetailService, // Service to handle futsal data
    private toastr: ToastrService // To display toast notifications
  ) {
    this.loadFutsalList(); // Load the list on component initialization
  }

  /**
   * Fetches the list of futsal details from the service.
   */
  private loadFutsalList(): void {
    this.futsalService.getFutsalDetails().subscribe({
      next: (res: FutsalDetail[]) => {
        this.futsalList = res;
        if (this.futsalList.length === 0) {
          this.toastr.info('No futsal details found.', 'Information');
        }
      },
      error: (err: any) => {
        console.error('Error loading futsal details:', err);
        this.toastr.error('Failed to load futsal details.', 'Error');
      },
    });
  }

  /**
   * Deletes a futsal detail by ID after confirmation.
   * @param id - ID of the futsal detail to delete
   */
  onDelete(id: number): void {
    const deleteConfirmation = confirm('Are you sure you want to delete this futsal detail? This action cannot be undone.');
    if (deleteConfirmation) {
      this.futsalService.deleteFutsalDetail(id).subscribe({
        next: () => {
          this.futsalList = this.futsalList.filter(f => f.futsalDetailId !== id);
          this.toastr.success('Futsal detail deleted successfully.', 'Delete');
        },
        error: (err: any) => {
          console.error('Error deleting futsal detail:', err);
          this.toastr.error('Failed to delete the futsal detail.', 'Delete Error');
        },
      });
    }
  }

  /**
   * Populates the form with futsal detail data for editing.
   * @param futsal - Futsal detail to populate in the form
   */
  populateForm(futsal: FutsalDetail): void {
    // For now, this will log the futsal data for editing, you can handle the form population elsewhere
    console.log('Populating form with futsal data:', futsal);
    // If the form component needs to be handled here, you can pass the futsal object
    // to it via an input or service.
  }
}
