import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureForEveryBudgetComponent } from './furniture-for-every-budget.component';

describe('FurnitureForEveryBudgetComponent', () => {
  let component: FurnitureForEveryBudgetComponent;
  let fixture: ComponentFixture<FurnitureForEveryBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FurnitureForEveryBudgetComponent]
    });
    fixture = TestBed.createComponent(FurnitureForEveryBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
