import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-workspace05-nx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    this.checkedChange.emit(this.checked);
  }

  onChange(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
