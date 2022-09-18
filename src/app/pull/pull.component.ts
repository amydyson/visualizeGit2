import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['../app.component.css', 'pull.component.css']
})
export class PullComponent implements OnInit {

  public hideMessage: boolean;
  public isMac: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    navigator.userAgent.includes('Mac') ? this.isMac = true : this.isMac = false;
    this.hideMessage = true;
  }

  visualizePull(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 3400);
  }

}
