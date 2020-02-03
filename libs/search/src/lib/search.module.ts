import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@ng-workspace05-nx/button';
import { InputModule } from '@ng-workspace05-nx/input';
import { CheckboxModule } from '@ng-workspace05-nx/checkbox';

import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [CommonModule, ButtonModule, InputModule, CheckboxModule],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class SearchModule {}
