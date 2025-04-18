import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPopUpComponent } from './product-pop-up.component';

describe('ProductPopUpComponent', () => {
  let component: ProductPopUpComponent;
  let fixture: ComponentFixture<ProductPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
