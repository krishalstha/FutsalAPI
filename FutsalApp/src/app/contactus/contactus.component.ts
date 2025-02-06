import { Component } from '@angular/core';
import { FutsalComponent } from "../futsal/futsal.component";
import { AboutusComponent } from "../aboutus/aboutus.component";

@Component({
  selector: 'app-contactus',
  imports: [ AboutusComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.css'
})
export class ContactusComponent {

}
