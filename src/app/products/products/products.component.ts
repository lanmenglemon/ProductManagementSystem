import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products : any = [];
  pageTitle: string = "Product - List";
  filterBy : string;

  showHideImage : boolean = true;

  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
    this._productsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  toggleImage() {
    this.showHideImage = !this.showHideImage;
  }

}
