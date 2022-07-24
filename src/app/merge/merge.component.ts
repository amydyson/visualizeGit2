import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['../app.component.css']
})
export class MergeComponent implements OnInit {
  public hideMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeMerge(){
    this.hideMessage = false;
  }
}
