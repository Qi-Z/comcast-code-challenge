import { Product } from './../product';
import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  
  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[])=> {this.products = products;});
    // let product1 = new Product();
    // product1.amount = 5;
    // product1.category = "fruit";
    // product1.name = "apple"
    // let product2 = new Product();
    // product2.amount = 10;
    // product2.category = "fruit";
    // product2.name = "banan";
    // this.products.push(product1);
    // this.products.push(product2);
  }

}
