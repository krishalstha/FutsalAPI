import { bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { BookingDetailFormComponent } from './booking-detail-form/booking-detail-form.component';
// Import Components
import { AppComponent } from './app.component';
import { FutsalDetailsComponent } from './futsal-details/futsal-details.component';
import { FutsalDetailFormComponent } from './FutsalDetails/futsal-detail-form/futsal-detail-form.component';
import { HomeComponent } from './home/home.component';
import { FutsalComponent } from './futsal/futsal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


// Import Routes
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  
  imports: [
    AppComponent,
    FutsalDetailsComponent,
    FutsalDetailFormComponent,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    MatDialogModule,
    AppRoutingModule,
    CommonModule,
    HomeComponent,
    FutsalComponent,
    ContactusComponent,
    AboutusComponent,
    RegisterComponent,
    LoginComponent,
    BookingDetailFormComponent,
    
  ],
  
})
export class AppModule {}
bootstrapApplication(AppComponent);