import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-syncproduct',
  templateUrl: './syncproduct.component.html',
  styleUrls: ['./syncproduct.component.css']
})
export class SyncproductComponent implements OnInit,OnDestroy {

  product:any=new Product("",Number(),"","",Number());
  constructor(public ac:ActivatedRoute,public prodSer:ProductService) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    console.log("destroyed")
  }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  ngOnInit(): void {
    this.sub = this.ac.params.subscribe(a=>{
      this.sub2 = this.prodSer.getProductById(a['_id']).subscribe(d=>{
         this.product = d
         console.log(a);
       })
    })
  }

}
