import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-status',
  templateUrl: './status.component.html',
  styleUrls: ['../app.component.css']
})
export class StatusComponent implements OnInit {
  public hideMessage: boolean;

  constructor() { }

  ngOnInit() {
  this.hideMessage = true;
  }

  visualizeStatus(){
    this.hideMessage = false;
  }
}
