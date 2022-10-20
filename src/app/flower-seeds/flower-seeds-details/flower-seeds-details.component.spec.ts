import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerSeedsDetailsComponent } from './flower-seeds-details.component';

describe('FlowerSeedsDetailsComponent', () => {
  let component: FlowerSeedsDetailsComponent;
  let fixture: ComponentFixture<FlowerSeedsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerSeedsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerSeedsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
