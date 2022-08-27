import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['../app.component.css', 'branch.component.css'],
  animations: [ fade, myTrigger, myTrigger2, fade2, ani3 ]
})
export class BranchComponent implements OnInit {
  public hideMessage: boolean;
  public branches: Array<string>;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.branches = [];
  }

  push(message){
    this.branches.push(message);
  }

  visualizeBranch(){
    setTimeout(() => {
      this.push('bug/25282')
    }, 200);
    setTimeout(() => {
      this.push('*main')
    }, 400);
    setTimeout(() => {
      this.push('navigation1')
    }, 600);
    setTimeout(() => {
      this.push('pbi/2539')
    }, 800);
    setTimeout(() => {
      this.hideMessage = false;
    }, 1500);
    setTimeout(() => {
      this.showReset = true;
    }, 2000)
  }

  public reset(){
    window.location.reload();
  }

}
