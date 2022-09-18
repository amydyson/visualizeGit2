import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['../app.component.css']
})
export class CommitComponent implements OnInit {
  hideMessage: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
  }
  visualizeCommit(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 2000);
  }

}
