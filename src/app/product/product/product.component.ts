import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private api:ProductService) { }
  productsData:any = [];
  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
    this.productsData = data;
    })
  }
}
