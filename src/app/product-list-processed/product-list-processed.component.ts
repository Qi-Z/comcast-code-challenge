import { ProductService } from './../shared/product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-processed',
  templateUrl: './product-list-processed.component.html',
  styleUrls: ['./product-list-processed.component.css'],
  providers: [ProductService]
})
export class ProductListProcessedComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) { }
  categories: Set<string> = new Set();
  productNames: Set<string> = new Set();

  enhancedProducts: Map<string, Map<string, number>> = new Map();
  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;

      this.products.forEach(product => {
        this.categories.add(product.category);
        this.productNames.add(product.name);
        if (!this.enhancedProducts.has(product.name)) {
          this.enhancedProducts.set(product.name, new Map());
        }
        let amounts = this.enhancedProducts.get(product.name);
        let originalAmount = 0;
        if (amounts.has(product.category)) originalAmount = amounts.get(product.category);
        amounts.set(product.category, originalAmount + product.amount);
      });

    });



  }

}
