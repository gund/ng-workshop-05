import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@ng-workspace05-nx/button';
import { InputModule } from '@ng-workspace05-nx/input';
import { SearchModule } from '@ng-workspace05-nx/search';
import { CheckboxModule } from '@ng-workspace05-nx/checkbox';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, ButtonModule, InputModule, SearchModule, CheckboxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
