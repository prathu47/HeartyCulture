import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandalwoodComponent } from './sandalwood.component';

describe('SandalwoodComponent', () => {
  let component: SandalwoodComponent;
  let fixture: ComponentFixture<SandalwoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandalwoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandalwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
