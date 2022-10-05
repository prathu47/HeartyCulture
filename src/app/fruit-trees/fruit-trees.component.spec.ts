import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTreesComponent } from './fruit-trees.component';

describe('FruitTreesComponent', () => {
  let component: FruitTreesComponent;
  let fixture: ComponentFixture<FruitTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
