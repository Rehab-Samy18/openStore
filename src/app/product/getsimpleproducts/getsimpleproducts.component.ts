import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-getsimpleproducts',
  templateUrl: './getsimpleproducts.component.html',
  styleUrls: ['./getsimpleproducts.component.css']
})
export class GetsimpleproductsComponent implements OnInit {

  constructor(private api:ProductService) { }
  productsData:any = [];
  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
    this.productsData = data;
    })
  }

}
