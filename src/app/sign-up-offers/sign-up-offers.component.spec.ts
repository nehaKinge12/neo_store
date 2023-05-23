import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpOffersComponent } from './sign-up-offers.component';

describe('SignUpOffersComponent', () => {
  let component: SignUpOffersComponent;
  let fixture: ComponentFixture<SignUpOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpOffersComponent]
    });
    fixture = TestBed.createComponent(SignUpOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
