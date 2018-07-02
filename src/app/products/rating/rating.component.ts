import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating : number;

  rating_arr : any = [];

  constructor() { }

  ngOnInit() {
    this.rating_arr = Array(Math.ceil(this.rating));
    for (let i = 0; i < this.rating_arr.length; i++) {
      if (i == this.rating_arr.length - 1) {
        this.rating_arr[i] = this.rating;
        break;
      }
      this.rating_arr[i] = i;
    }
    console.log(this.rating_arr);
  }

}
