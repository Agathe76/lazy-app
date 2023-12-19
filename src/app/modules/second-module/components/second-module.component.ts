import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-second-module',
  templateUrl: './second-module.component.html',
  styleUrls: ['./second-module.component.css']
})
export class SecondModuleComponent {
  
  constructor(private sharedService: SharedService) {}

  print(): void {
    this.sharedService.print('from compo second module');
  }

}
