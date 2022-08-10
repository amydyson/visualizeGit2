import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-push',
  templateUrl: './push.component.html',
  styleUrls: ['../app.component.css', 'push.component.css']
})
export class PushComponent implements OnInit {
  public hideMessage: boolean;
  public showReset: boolean;
  public isMac: boolean;

  constructor() { }

  ngOnInit() {
    navigator.userAgent.includes('Mac') ? this.isMac = true : this.isMac = false;
    this.hideMessage = true;
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizePush(){
    this.hideMessage = false;
    this.showReset = true;
  }
  public reset(){
    window.location.reload();
  }
}
