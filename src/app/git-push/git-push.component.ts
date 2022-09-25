import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-git-push',
  templateUrl: './git-push.component.html',
  styleUrls: ['../app.component.css','./git-push.component.css']
})
export class GitPushComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizePush(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 2700);
  }

}

