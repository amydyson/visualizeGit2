import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['../app.component.css']
})
export class CloneComponent implements OnInit {
  public hideMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeClone(){
    this.hideMessage = false;
  }

}
