import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoStoreFurnitureComponent } from './neo-store-furniture.component';

describe('NeoStoreFurnitureComponent', () => {
  let component: NeoStoreFurnitureComponent;
  let fixture: ComponentFixture<NeoStoreFurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeoStoreFurnitureComponent]
    });
    fixture = TestBed.createComponent(NeoStoreFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
