import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PractitionerFileComponent } from './practitioner-file/practitioner-file.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'boyka-front';
}
