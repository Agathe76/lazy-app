import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondModuleComponent } from './components/second-module.component';
import { SharedModule } from '../shared/shared.module';
import { SecondModuleBisModule } from '../second-bis/second-module-bis.module';


@NgModule({
  declarations: [
    SecondModuleComponent
  ],
  imports: [
    CommonModule,
    SecondModuleRoutingModule,
    SharedModule,
  ]
})
export class SecondModuleModule { }
