import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger2, ani3 } from '../animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-log',
  templateUrl: './log.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger2, fade2, ani3 ]
})
export class LogComponent implements OnInit {
  public hideMessage: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeLog(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 3500);
  }

}
