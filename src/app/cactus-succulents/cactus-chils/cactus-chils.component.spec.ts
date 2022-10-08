import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactusChilsComponent } from './cactus-chils.component';

describe('CactusChilsComponent', () => {
  let component: CactusChilsComponent;
  let fixture: ComponentFixture<CactusChilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CactusChilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CactusChilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
