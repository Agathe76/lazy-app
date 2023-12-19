import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { SharedComponent } from "./components/shared.component";
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from "./services/shared.service";
import { SecondModuleBisModule } from "../second-bis/second-module-bis.module";

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    SecondModuleBisModule
  ],
  exports: [
    SharedComponent,
    MatButtonModule,
    SecondModuleBisModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        SharedService
      ]
    }
  }

}
