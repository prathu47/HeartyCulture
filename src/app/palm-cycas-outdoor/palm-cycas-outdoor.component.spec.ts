import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmCycasOutdoorComponent } from './palm-cycas-outdoor.component';

describe('PalmCycasOutdoorComponent', () => {
  let component: PalmCycasOutdoorComponent;
  let fixture: ComponentFixture<PalmCycasOutdoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmCycasOutdoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmCycasOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
