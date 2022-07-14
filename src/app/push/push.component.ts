import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-push',
  templateUrl: './push.component.html',
  styleUrls: ['../app.component.css']
})
export class PushComponent implements OnInit {
  public hideMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizePush(){
    this.hideMessage = false;
  }

}
