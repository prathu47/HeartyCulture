import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiracleleafComponent } from './miracleleaf.component';

describe('MiracleleafComponent', () => {
  let component: MiracleleafComponent;
  let fixture: ComponentFixture<MiracleleafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiracleleafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiracleleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
