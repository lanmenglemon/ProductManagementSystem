import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from '../products/products.component';
import { ProductsPipe } from '../products.pipe';
import { RatingComponent } from '../rating/rating.component';
import { DetailComponent } from '../detail/detail.component';
import { AuthGuard } from '../../auth/auth.guard';
import { AuthinterceptorService } from '../../auth/authinterceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: "", component: ProductsComponent, canActivate: [AuthGuard]},
      {path: "/:productCode", component: DetailComponent, canActivate: [AuthGuard]}
    ])
  ],
  declarations: [
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    DetailComponent
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorService,
    multi: true
  }]
})
export class ProductsModule { }
