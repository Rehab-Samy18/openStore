import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-getcomplexproduct',
  templateUrl: './getcomplexproduct.component.html',
  styleUrls: ['./getcomplexproduct.component.css']
})
export class GetcomplexproductComponent implements OnInit {

  constructor(private api:ProductService) { }
  productsData:any = [];
  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
    this.productsData = data;
    })
  }

}
