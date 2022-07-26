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
    this.hideMessage = false;
    setTimeout(() => {
      this.showReset = true;
    }, 2200)
  }

  public reset(){
    window.location.reload();
  }

}
