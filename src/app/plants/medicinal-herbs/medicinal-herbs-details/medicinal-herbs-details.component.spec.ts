import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinalHerbsDetailsComponent } from './medicinal-herbs-details.component';

describe('MedicinalHerbsDetailsComponent', () => {
  let component: MedicinalHerbsDetailsComponent;
  let fixture: ComponentFixture<MedicinalHerbsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinalHerbsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinalHerbsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
