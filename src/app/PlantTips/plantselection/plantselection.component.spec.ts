import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantselectionComponent } from './plantselection.component';

describe('PlantselectionComponent', () => {
  let component: PlantselectionComponent;
  let fixture: ComponentFixture<PlantselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
