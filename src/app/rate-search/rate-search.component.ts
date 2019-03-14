import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-search',
  templateUrl: './rate-search.component.html',
  styleUrls: ['./rate-search.component.css']
})
export class RateSearchComponent implements OnInit {
  hero = 'James Bond';
  telephone: '';
  constructor() { }

  ngOnInit() {
  }

  cheapestCallCost() {
    console.log(this.telephone);
  }

}
