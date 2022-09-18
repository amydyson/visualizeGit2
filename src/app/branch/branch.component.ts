import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger, myTrigger2, ani3 } from '../animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['../app.component.css', 'branch.component.css'],
  animations: [ fade, myTrigger, myTrigger2, fade2, ani3 ]
})
export class BranchComponent implements OnInit {
  public hideMessage: boolean;
  public branches: Array<string>;

  constructor(private sharedService: SharedService) { }

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
      this.sharedService.showSnackbar();
    }, 3000)
  }

  public reset(){
    window.location.reload();
  }

}
