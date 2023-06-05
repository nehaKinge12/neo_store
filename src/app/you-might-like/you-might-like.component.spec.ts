import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouMightLikeComponent } from './you-might-like.component';

describe('YouMightLikeComponent', () => {
  let component: YouMightLikeComponent;
  let fixture: ComponentFixture<YouMightLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouMightLikeComponent]
    });
    fixture = TestBed.createComponent(YouMightLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
