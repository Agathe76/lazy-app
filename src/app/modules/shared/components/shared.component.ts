import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.less']
})
export class SharedComponent {

  constructor(private sharedService: SharedService) {}

  print(): void {
    this.sharedService.print('from compo shared module');
  }
}
