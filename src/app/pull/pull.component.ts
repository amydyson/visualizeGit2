import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['../app.component.css']
})
export class PullComponent implements OnInit {

  public hideMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizePull(){
    this.hideMessage = false;
  }
}
