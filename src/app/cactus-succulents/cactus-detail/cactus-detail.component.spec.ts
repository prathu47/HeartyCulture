import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactusDetailComponent } from './cactus-detail.component';

describe('CactusDetailComponent', () => {
  let component: CactusDetailComponent;
  let fixture: ComponentFixture<CactusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CactusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CactusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
