import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropProductsComponent } from './drag-drop-products.component';

describe('DragDropProductsComponent', () => {
  let component: DragDropProductsComponent;
  let fixture: ComponentFixture<DragDropProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
