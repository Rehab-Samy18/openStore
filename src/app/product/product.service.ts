import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>('https://captello.firebaseio.com/products.json');
  }
  getProductById(id:number){
    return this.http.get<Product>('https://captello.firebaseio.com/products/'+id+'.json');
  }
}
