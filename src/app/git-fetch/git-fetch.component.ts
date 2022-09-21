import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-git-fetch',
  templateUrl: './git-fetch.component.html',
  styleUrls: ['../app.component.css', './git-fetch.component.css']
})
export class GitFetchComponent implements OnInit {

  public hideMessage: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeFetch(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 3500);
  }

}
