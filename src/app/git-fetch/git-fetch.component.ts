import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-git-fetch',
  templateUrl: './git-fetch.component.html',
  styleUrls: ['../app.component.css', './git-fetch.component.css']
})
export class GitFetchComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  constructor(private sharedService: SharedService) { }

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
