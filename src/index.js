import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {BaseAngular2} from 'base-angular-2';

@Component({
  selector: 'main'
})

@View({
  directives: [BaseAngular2],
  template: `
    <base-angular-2></base-angular-2>
  `
})

class Main {

}

bootstrap(Main);
