import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmIndoorComponent } from './palm-indoor.component';

describe('PalmIndoorComponent', () => {
  let component: PalmIndoorComponent;
  let fixture: ComponentFixture<PalmIndoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmIndoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmIndoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
