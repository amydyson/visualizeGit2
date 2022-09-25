import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-clone',
  templateUrl: './clone.component.html',
  styleUrls: ['../app.component.css', 'clone.component.css']
})
export class CloneComponent implements OnInit {
  public hideMessage: boolean;
  public enableReload: boolean;


  ngOnInit() {
    this.hideMessage = true;
    this.enableReload = false;
  }

  visualizeClone(){
    this.hideMessage = false;
    setTimeout(() => {
      this.enableReload = true;
    }, 2000);
  }

}
