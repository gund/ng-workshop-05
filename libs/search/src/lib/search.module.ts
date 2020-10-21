import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@ng-workspace05-nx/button';
import { InputModule } from '@ng-workspace05-nx/input';
import { CheckboxModule } from '@ng-workspace05-nx/checkbox';

import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, InputModule, CheckboxModule],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class SearchModule {}
