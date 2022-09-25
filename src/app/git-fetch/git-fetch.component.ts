import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-git-fetch',
  templateUrl: './git-fetch.component.html',
  styleUrls: ['../app.component.css', './git-fetch.component.css']
})
export class GitFetchComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizeFetch(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 3000);
  }

}
