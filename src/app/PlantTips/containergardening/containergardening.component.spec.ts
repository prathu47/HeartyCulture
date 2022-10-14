import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainergardeningComponent } from './containergardening.component';

describe('ContainergardeningComponent', () => {
  let component: ContainergardeningComponent;
  let fixture: ComponentFixture<ContainergardeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainergardeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainergardeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
