import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorplantsdetailsComponent } from './indoorplantsdetails.component';

describe('IndoorplantsdetailsComponent', () => {
  let component: IndoorplantsdetailsComponent;
  let fixture: ComponentFixture<IndoorplantsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoorplantsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorplantsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
