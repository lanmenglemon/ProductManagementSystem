import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ProductsService]
})
export class AddComponent implements OnInit {

  productForm : FormGroup;

  constructor(private _formBuilder : FormBuilder, private _productService : ProductsService) { }

  ngOnInit() {

    this.productForm = this._formBuilder.group({
      productId: ['', Validators.required],
      productName : ['', Validators.required],
      productCode: ['', Validators.required],
      releaseDate: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      starRating: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  addProduct() {
    this._productService.addProduct(this.productForm.value);
  }
}
