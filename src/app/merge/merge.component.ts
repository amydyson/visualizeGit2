import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['../app.component.css', 'merge.component.css']
})
export class MergeComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

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
