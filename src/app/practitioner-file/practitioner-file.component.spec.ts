import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerFileComponent } from './practitioner-file.component';

describe('PractitionerFileComponent', () => {
  let component: PractitionerFileComponent;
  let fixture: ComponentFixture<PractitionerFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PractitionerFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
