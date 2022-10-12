import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationplantsComponent } from './foundationplants.component';

describe('FoundationplantsComponent', () => {
  let component: FoundationplantsComponent;
  let fixture: ComponentFixture<FoundationplantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationplantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationplantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
