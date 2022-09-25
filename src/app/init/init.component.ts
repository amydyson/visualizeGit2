import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-init',
  templateUrl: './init.component.html',
  styleUrls: ['../app.component.css']
})
export class InitComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;

  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizeInit(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 1800);
  }

}
