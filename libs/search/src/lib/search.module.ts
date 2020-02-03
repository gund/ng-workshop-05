import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@ng-workspace05-nx/button';
import { InputModule } from '@ng-workspace05-nx/input';

import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, InputModule],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class SearchModule {}
