import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-push',
  templateUrl: './push.component.html',
  styleUrls: ['../app.component.css']
})
export class PushComponent implements OnInit {
  public hideMessage: boolean;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizePush(){
    this.hideMessage = false;
    setTimeout(() => {
      this.showReset = true;
    }, 4500)
  }
  public reset(){
    window.location.reload();
  }
}
