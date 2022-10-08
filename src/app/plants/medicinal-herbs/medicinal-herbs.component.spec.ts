import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinalHerbsComponent } from './medicinal-herbs.component';

describe('MedicinalHerbsComponent', () => {
  let component: MedicinalHerbsComponent;
  let fixture: ComponentFixture<MedicinalHerbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinalHerbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinalHerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
