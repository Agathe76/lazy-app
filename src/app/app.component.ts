import { Component } from '@angular/core';
import { SharedService } from './modules/shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-modules-demo';

  constructor(private sharedService: SharedService) {}

  print(): void {
    this.sharedService.print('from compo app module');
  }
}
