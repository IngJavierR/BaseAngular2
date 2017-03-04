import {Component, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';

@Component({
  selector: 'fountain-app',
  moduleId: __moduleName,
  templateUrl: 'hello.html'
})
export class HelloComponent {
  @ViewChild('myname') input: ElementRef;
  @ViewChild('video') video: ElementRef;

  @ViewChildren('div1,div2,div3') divs: QueryList<ElementRef>;

  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }

  ngAfterViewInit() {
    var cameras = [];
    var video = this.video;
    navigator.mediaDevices.enumerateDevices()
    .then(function(devices: any[]) {
      cameras = devices.filter(d => d.kind === 'videoinput');
      var currentSource = 0;
      var videosources = [];
      var lastStream;
      let _video = video.nativeElement;
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: {deviceId: cameras[1].deviceId }, audio: false })
                              .then(stream => {
                                _video.src = window.URL.createObjectURL(stream);
                                _video.play();
                              });
      }
    })
    .catch(function(err: string) {
      console.log(err.name + ': ' + err.message);
    });

  }

}
