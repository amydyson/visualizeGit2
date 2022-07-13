import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['../app.component.css']
})
export class CommitComponent implements OnInit {
  hideMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }
  visualizeCommit(){
    this.hideMessage = false;
  }

}
