import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FutsalDetailsComponent } from "./futsal-details/futsal-details.component";

@Component({
  selector: 'app-root',
  imports: [FutsalDetailsComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'FutsalApp';
}
