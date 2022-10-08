import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactusSucculentsComponent } from './cactus-succulents.component';

describe('CactusSucculentsComponent', () => {
  let component: CactusSucculentsComponent;
  let fixture: ComponentFixture<CactusSucculentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CactusSucculentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CactusSucculentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
