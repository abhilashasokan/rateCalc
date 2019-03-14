import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-search-result',
  templateUrl: './rate-search-result.component.html',
  styleUrls: ['./rate-search-result.component.css']
})
export class RateSearchResultComponent implements OnInit {
  @Input() hero;
  constructor() { }

  ngOnInit() {
  }

}
