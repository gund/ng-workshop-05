import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ng-workspace05-nx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() isDisabled = false;
  @Input() isChecked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  ngOnInit() {}

  toggleCheck() {
    this.checkedChange.emit();
  }

}
