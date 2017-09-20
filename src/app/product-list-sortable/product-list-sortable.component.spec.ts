import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSortableComponent } from './product-list-sortable.component';

describe('ProductListSortableComponent', () => {
  let component: ProductListSortableComponent;
  let fixture: ComponentFixture<ProductListSortableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListSortableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
