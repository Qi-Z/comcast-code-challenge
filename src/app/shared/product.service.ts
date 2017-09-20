import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {Product} from '../product';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  /**
   * 
   * Retrive product list 
   * 
   * @returns {Observable<Product[]>} 
   * @memberof ProductService
   */
  getProducts() : Observable<Product[]> {
    return this.http.get('data/data.json').map((res: Response)=> {return res.json();});
  }
}
