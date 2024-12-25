import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Import Standalone Components
import { AppComponent } from './app.component';
import { FutsalDetailsComponent } from './futsal-details/futsal-details.component';
import { FutsalDetailFormComponent } from './FutsalDetails/futsal-detail-form/futsal-detail-form.component';

// AppModule definition
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added for notifications
    // Import Standalone Components
    FutsalDetailsComponent,  // Standalone component
    FutsalDetailFormComponent, // Standalone component
  ],
  providers: [],
})
export class AppModule { }

// Bootstrapping the Standalone AppComponent
import { bootstrapApplication } from '@angular/platform-browser';

// Bootstrapping AppComponent for Standalone
bootstrapApplication(AppComponent, {
  providers: [
    // Any required providers can be added here
  ]
});
