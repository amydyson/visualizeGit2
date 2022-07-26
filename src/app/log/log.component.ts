import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-log',
  templateUrl: './log.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger2, fade2, ani3 ]
})
export class LogComponent implements OnInit {
  public hideMessage: boolean;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizeLog(){
    this.hideMessage = false;
    setTimeout(() => {
      this.showReset = true;
    }, 3300)
  }

  public reset(){
    window.location.reload();
  }

}
