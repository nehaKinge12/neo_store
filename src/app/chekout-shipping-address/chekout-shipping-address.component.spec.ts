import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekoutShippingAddressComponent } from './chekout-shipping-address.component';

describe('ChekoutShippingAddressComponent', () => {
  let component: ChekoutShippingAddressComponent;
  let fixture: ComponentFixture<ChekoutShippingAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChekoutShippingAddressComponent]
    });
    fixture = TestBed.createComponent(ChekoutShippingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
