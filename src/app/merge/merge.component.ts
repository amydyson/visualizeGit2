import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['../app.component.css']
})
export class MergeComponent implements OnInit {
  public hideMessage: boolean;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizeMerge(){
    this.hideMessage = false;
    this.showReset = true;
  }
  public reset(){
    window.location.reload();
  }
}
