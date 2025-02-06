import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookingscreen-detail-form',
  imports: [],
  templateUrl: './bookingscreen-detail-form.component.html',
  styleUrl: "./bookingscreen-detail-form.css"
})
export class BookingScreenDetailFormComponent implements OnInit {
  futsalName: string = '';
  location: string = '';
  contactNumber: string = '';
  pricing: string = '';
  operationHours: string = '';
  email: string = '';
  description: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.futsalName = this.route.snapshot.paramMap.get('futsalName')!;
    console.log('Futsal Name:', this.futsalName);
  
    this.location = this.route.snapshot.queryParamMap.get('location')!;
    this.contactNumber = this.route.snapshot.queryParamMap.get('contactNumber')!;
    this.pricing = this.route.snapshot.queryParamMap.get('pricing')!;
    this.operationHours = this.route.snapshot.queryParamMap.get('operationHours')!;
    this.email = this.route.snapshot.queryParamMap.get('email')!;
    this.description = this.route.snapshot.queryParamMap.get('description')!;
  
    console.log('Location:', this.location);
    console.log('Contact Number:', this.contactNumber);
  }
  
}
