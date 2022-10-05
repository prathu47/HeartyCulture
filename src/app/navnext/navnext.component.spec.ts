import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavnextComponent } from './navnext.component';

describe('NavnextComponent', () => {
  let component: NavnextComponent;
  let fixture: ComponentFixture<NavnextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavnextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
