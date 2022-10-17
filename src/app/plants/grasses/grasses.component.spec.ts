import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassesComponent } from './grasses.component';

describe('GrassesComponent', () => {
  let component: GrassesComponent;
  let fixture: ComponentFixture<GrassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
