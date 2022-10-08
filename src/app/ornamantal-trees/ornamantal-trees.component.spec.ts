import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamantalTreesComponent } from './ornamantal-trees.component';

describe('OrnamantalTreesComponent', () => {
  let component: OrnamantalTreesComponent;
  let fixture: ComponentFixture<OrnamantalTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrnamantalTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamantalTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
