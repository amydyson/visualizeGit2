import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['../app.component.css', 'merge.component.css']
})
export class MergeComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizeMerge(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 3100);
  }

}
