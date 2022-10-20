import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamantalDetailsComponent } from './ornamantal-details.component';

describe('OrnamantalDetailsComponent', () => {
  let component: OrnamantalDetailsComponent;
  let fixture: ComponentFixture<OrnamantalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrnamantalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamantalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
