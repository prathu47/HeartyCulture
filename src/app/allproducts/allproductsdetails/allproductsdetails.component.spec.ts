import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductsdetailsComponent } from './allproductsdetails.component';

describe('AllproductsdetailsComponent', () => {
  let component: AllproductsdetailsComponent;
  let fixture: ComponentFixture<AllproductsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproductsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
