import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['../app.component.css']
})
export class PullComponent implements OnInit {

  public hideMessage: boolean;
  public showReset: boolean;
  public isMac: boolean;

  constructor() { }

  ngOnInit() {
    navigator.userAgent.includes('Mac') ? this.isMac = true : this.isMac = false;
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizePull(){
    this.hideMessage = false;
    setTimeout(() => {
      this.showReset = true;
    }, 4500)
  }
  public reset(){
    window.location.reload();
  }
}
