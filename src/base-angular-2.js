import {Component, View} from 'angular2/core';

@Component({
  selector: 'base-angular-2'
})

@View({
  templateUrl: 'base-angular-2.html'
})

export class BaseAngular2 {

  constructor() {
    console.info('BaseAngular2 Component Mounted Successfully');
  }

}
