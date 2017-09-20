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

  }

}
