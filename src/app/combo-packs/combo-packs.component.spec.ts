import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPacksComponent } from './combo-packs.component';

describe('ComboPacksComponent', () => {
  let component: ComboPacksComponent;
  let fixture: ComponentFixture<ComboPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
