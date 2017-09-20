import { Product } from './../product';
import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-sortable',
  templateUrl: './product-list-sortable.component.html',
  styleUrls: ['./product-list-sortable.component.css'],
  providers: [ProductService]
})
export class ProductListSortableComponent implements OnInit {
  products: Product[];
  isDesc: boolean = true;
  column: string;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[])=>{this.products = products});
  }

  sort(property){
    console.log("called");
    this.isDesc = !this.isDesc;
    this.column = property; // which column
  }

}
