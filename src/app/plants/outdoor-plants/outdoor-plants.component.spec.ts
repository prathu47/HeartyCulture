import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorPlantsComponent } from './outdoor-plants.component';

describe('OutdoorPlantsComponent', () => {
  let component: OutdoorPlantsComponent;
  let fixture: ComponentFixture<OutdoorPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdoorPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
