import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineSeedsComponent } from './medicine-seeds.component';

describe('MedicineSeedsComponent', () => {
  let component: MedicineSeedsComponent;
  let fixture: ComponentFixture<MedicineSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
