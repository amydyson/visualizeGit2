import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-init',
  templateUrl: './init.component.html',
  styleUrls: ['../app.component.css']
})
export class InitComponent implements OnInit {
  hideMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeInit(){
    this.hideMessage = false;
  }
  public reset(){
    window.location.reload();
  }

}
