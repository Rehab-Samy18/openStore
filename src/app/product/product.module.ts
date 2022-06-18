import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { GetsimpleproductsComponent } from './getsimpleproducts/getsimpleproducts.component';
import { GetcomplexproductComponent } from './getcomplexproduct/getcomplexproduct.component';
import { RouterModule } from '@angular/router';
import { SyncproductComponent } from './syncproduct/syncproduct.component';



@NgModule({
  declarations: [
    ProductComponent,
    GetsimpleproductsComponent,
    GetcomplexproductComponent,
    SyncproductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
