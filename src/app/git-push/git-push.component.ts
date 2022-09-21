import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-git-push',
  templateUrl: './git-push.component.html',
  styleUrls: ['../app.component.css','./git-push.component.css']
})
export class GitPushComponent implements OnInit {

  public hideMessage: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizePull(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 3400);
  }

}
