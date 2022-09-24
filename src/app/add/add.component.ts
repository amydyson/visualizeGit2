import { Component, OnInit, Input } from '@angular/core';
import { fade, fade2, myTrigger2, ani3 } from '../animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-add',
  templateUrl: './add.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger2, fade2, ani3 ]
})
export class AddComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizeAdd(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 2000)
  }


}
