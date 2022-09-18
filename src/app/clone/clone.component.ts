import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['../app.component.css', 'clone.component.css']
})
export class CloneComponent implements OnInit {
  public hideMessage: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeClone(){
    this.hideMessage = false;
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 2000);
  }

}
