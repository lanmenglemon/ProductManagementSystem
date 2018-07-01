import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';
import { RatingComponent } from './products/rating/rating.component';
import { NavigationComponent } from './auth/navigation/navigation.component';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthinterceptorService } from './auth/authinterceptor.service';
import { DetailComponent } from './products/detail/detail.component';
import { AddComponent } from './products/add/add.component';
import { ReauthGuard } from './auth/reauth.guard';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: "products", component: ProductsComponent, canActivate: [AuthGuard]},
      {path: "products/:productCode", component: DetailComponent, canActivate: [AuthGuard]},
      {path: "signup", component: SignupComponent, canActivate: [ReauthGuard]},
      {path: "login", component: LoginComponent, canActivate: [ReauthGuard]},
      {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
      {path: "add", component: AddComponent, canActivate: [AuthGuard]},
      {path:"", redirectTo: "home", pathMatch: "full"},
      {path: "**", redirectTo: "home"}
    ])
  ],
  providers: [AuthService, CookieService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
