import { Component } from '@angular/core';
import { MartialArtist } from '../domain/martial-artist';

@Component({
  selector: 'app-practitioner-file',
  standalone: true,
  imports: [],
  templateUrl: './practitioner-file.component.html',
  styleUrl: './practitioner-file.component.scss'
})
export class PractitionerFileComponent {

  practitioner: MartialArtist= MartialArtist();
}
