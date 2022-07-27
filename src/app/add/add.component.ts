import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-add',
  templateUrl: './add.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger2, fade2, ani3 ]
})
export class AddComponent implements OnInit {
  hideMessage: boolean;
  showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizeAdd(){
    this.hideMessage = false;
    setTimeout(() => {
      this.showReset = true;
    }, 1500)
  }

  public reset(){
    window.location.reload();
  }

}
