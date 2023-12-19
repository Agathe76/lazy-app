import { Injectable } from "@angular/core";

@Injectable()
export class SharedService {

  public constructor () {
    console.log('service shared existe');
  }

  public print(print: string): void {
    console.log('print ! '.concat(print));
  }
}
