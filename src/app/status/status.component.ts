import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger, myTrigger2, ani3 } from '../animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-status',
  templateUrl: './status.component.html',
  styleUrls: ['../app.component.css', 'status.component.css'],
  animations: [ fade, myTrigger, myTrigger2, fade2, ani3 ]
})
export class StatusComponent implements OnInit {
  public hideMessage: boolean;
  public messages: Array<string>;
  public enableReload: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
    this.messages = [];
    this.enableReload = false;
  }

  push(message){
    this.messages.push(message);
  }

  visualizeStatus(){
    setTimeout(() => {
      this.push('Changes to be committed:')
    }, 200);
    setTimeout(() => {
      this.push('modified: index.html')
    }, 400);
    setTimeout(() => {
      this.push('Changes not staged for commit:')
    }, 800);
    setTimeout(() => {
      this.push('modified: index.js')
    }, 1000);
    setTimeout(() => {
      this.hideMessage = false;
    }, 2000);
    setTimeout(() => {
      this.enableReload = true;
    }, 3500)
  }

}
