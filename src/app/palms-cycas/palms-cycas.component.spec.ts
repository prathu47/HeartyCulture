import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmsCycasComponent } from './palms-cycas.component';

describe('PalmsCycasComponent', () => {
  let component: PalmsCycasComponent;
  let fixture: ComponentFixture<PalmsCycasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmsCycasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmsCycasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
