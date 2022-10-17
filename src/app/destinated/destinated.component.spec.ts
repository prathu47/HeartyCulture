import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatedComponent } from './destinated.component';

describe('DestinatedComponent', () => {
  let component: DestinatedComponent;
  let fixture: ComponentFixture<DestinatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
