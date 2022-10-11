import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationplantComponent } from './foundationplant.component';

describe('FoundationplantComponent', () => {
  let component: FoundationplantComponent;
  let fixture: ComponentFixture<FoundationplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationplantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
