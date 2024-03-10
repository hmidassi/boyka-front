import { Component } from '@angular/core';
import { MartialArtist } from '../domain/martial-artist';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-practitioner-file',

  templateUrl: './practitioner-file.component.html',
  styleUrl: './practitioner-file.component.scss'
})
export class PractitionerFileComponent {

  practitioner: MartialArtist={
    first_name: 'Hedy',
    last_name: 'Midassi',
    date_of_birth: new Date(1990,1,1),
    id: 0,
    experiences: [{
      club_name: 'Gant d\'or de Houilles',
      starting_date:new Date(2017,2,1),
      end_date:new Date(2023,10,31),
      martial_arts: [{
        martialart_name: "Boxe Française",
        punches:40,
        kicks: 60
      },
      {
        martialart_name: "Boxe anglaise",
        punches:100
      },
      {
        martialart_name: "Canne de combat",
        weapon_defense:20,
        weapon_manipulation: 80
      }]
    }]
  }
}
