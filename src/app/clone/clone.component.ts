import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['../app.component.css']
})
export class CloneComponent implements OnInit {
  public hideMessage: boolean;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizeClone(){
    this.hideMessage = false;
    setTimeout(() => {
      this.showReset = true;
    }, 2000)
  }

  public reset(){
    window.location.reload();
  }


}
