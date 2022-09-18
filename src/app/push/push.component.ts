import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-push',
  templateUrl: './push.component.html',
  styleUrls: ['../app.component.css', 'push.component.css']
})
export class PushComponent implements OnInit {
  public hideMessage: boolean;
  public isMac: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    navigator.userAgent.includes('Mac') ? this.isMac = true : this.isMac = false;
    this.hideMessage = true;
    this.hideMessage = true;
  }

  visualizePush(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 3000)
  }

}
