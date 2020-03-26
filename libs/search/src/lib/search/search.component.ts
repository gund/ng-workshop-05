import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-workspace05-nx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isGlobalSearch = false;

  constructor() {}

  ngOnInit() {}

  toggleCheckbox(){
    this.isGlobalSearch = !this.isGlobalSearch;
  }
}
