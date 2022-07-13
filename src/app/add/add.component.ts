import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-add',
  templateUrl: './add.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger2, fade2, ani3 ]
})
export class AddComponent implements OnInit {
  state: string;
  items: any;
  hideIndexHtml2: boolean;
  text: string;

  constructor() { }

  ngOnInit() {
    this.state = 'small';
    this.items = [];
    this.hideIndexHtml2 = true;
    this.text = 'copy!'
 
  }

  visualizeAdd(){
    this.hideIndexHtml2 = false;
  }

}
