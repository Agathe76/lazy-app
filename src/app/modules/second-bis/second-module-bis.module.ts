import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondModuleBisRoutingModule } from './second-module-bis-routing.module';
import { SecondBisComponent } from './components/second-bis.component';

@NgModule({
  declarations: [
    SecondBisComponent
  ],
  imports: [
    CommonModule,
    SecondModuleBisRoutingModule,
  ],
  exports: [
    SecondBisComponent
  ]
})
export class SecondModuleBisModule { }
