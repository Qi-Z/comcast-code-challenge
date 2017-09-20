import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListProcessedComponent } from './product-list-processed.component';

describe('ProductListProcessedComponent', () => {
  let component: ProductListProcessedComponent;
  let fixture: ComponentFixture<ProductListProcessedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListProcessedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
