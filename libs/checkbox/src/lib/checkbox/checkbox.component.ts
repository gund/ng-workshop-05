import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-workspace05-nx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() checked = false;
  @Input() disabled: boolean = false;

  @Output() checkedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
