import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient, private _router : Router) { }

  getProducts() {
    return this._http.get('http://localhost:3000/getproducts');
  }

  getProductDetail(query : any) {
    return this._http.post('http://localhost:3000/getproductdetail', query);
  }

  addProduct(product : any) {
    this._http.post('http://localhost:3000/addproduct', product).subscribe((data : any) => {
      if (data.flg) {
        this._router.navigate(['/products']);
      }
    });
  }
}
