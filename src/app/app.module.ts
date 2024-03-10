import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PractitionerFileComponent } from './practitioner-file/practitioner-file.component';

@NgModule({
  declarations: [
    AppComponent,
    PractitionerFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [PractitionerFileComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }