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

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeLog(){
    this.hideMessage = false;
  }
  
  public reset(){
    window.location.reload();
  }

}
