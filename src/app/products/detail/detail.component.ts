import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductsService]
})
export class DetailComponent implements OnInit {

  product : any = {};
  constructor(private _activatedRoute : ActivatedRoute, private _router : Router, 
              private _productsService : ProductsService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data) => {
      this._productsService.getProductDetail(data).subscribe((prd) => {
        this.product = prd[0];
      });
    })
  }

  backtolist() {
    this._router.navigate(['/products']);
  }
}
