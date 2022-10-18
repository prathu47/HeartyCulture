import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoordetailsComponent } from './indoordetails.component';

describe('IndoordetailsComponent', () => {
  let component: IndoordetailsComponent;
  let fixture: ComponentFixture<IndoordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
