import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-git-pull',
  templateUrl: './git-pull.component.html',
  styleUrls: ['../app.component.css','./git-pull.component.css']
})
export class GitPullComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizePull(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 2700);
  }

}
