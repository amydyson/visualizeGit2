import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['../app.component.css']
})
export class MergeComponent implements OnInit {
  public hideMessage: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeMerge(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 3400);
  }

}
