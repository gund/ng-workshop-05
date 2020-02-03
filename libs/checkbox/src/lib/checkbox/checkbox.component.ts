import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ng-workspace05-nx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() isDisabled = false;
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
