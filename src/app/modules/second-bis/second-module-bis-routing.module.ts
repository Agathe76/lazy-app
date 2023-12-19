import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondBisComponent } from './components/second-bis.component';

const routes: Routes = [{ path: 'second-bis', component: SecondBisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondModuleBisRoutingModule { }
