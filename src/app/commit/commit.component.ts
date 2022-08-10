import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['../app.component.css']
})
export class CommitComponent implements OnInit {
  hideMessage: boolean;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }
  visualizeCommit(){
    this.showReset = true;
    this.hideMessage = false;
  }

  public reset(){
    window.location.reload();
  }

}
