import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-log',
  templateUrl: './log.component.html',
  styleUrls: ['../app.component.css', 'log.component.css'],
  animations: [ fade, myTrigger2, fade2, ani3 ]
})
export class LogComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizeLog(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 3300);
  }

}
