import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['../app.component.css']
})
export class CommitComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }
  visualizeCommit(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 2000);
  }

}
