import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-init',
  templateUrl: './init.component.html',
  styleUrls: ['../app.component.css']
})
export class InitComponent implements OnInit {
  hideMessage: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeInit(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 2500);
  }

}
