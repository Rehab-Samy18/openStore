import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetcomplexproductComponent } from './product/getcomplexproduct/getcomplexproduct.component';
import { GetsimpleproductsComponent } from './product/getsimpleproducts/getsimpleproducts.component';
import { ProductComponent } from './product/product/product.component';
import { SyncproductComponent } from './product/syncproduct/syncproduct.component';

const routes: Routes = [
  {path:"",component:ProductComponent},
  {path:"all",component:ProductComponent},
  {path:"simple",component:GetsimpleproductsComponent},
  {path:"complex",component:GetcomplexproductComponent},
  {path:"syncAll",component:ProductComponent},
  {path:"syncProduct/:_id",component:SyncproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
