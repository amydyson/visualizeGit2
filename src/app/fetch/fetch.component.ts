import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['../app.component.css']
})
export class FetchComponent implements OnInit {
  public hideMessage: boolean;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizeFetch(){
    this.hideMessage = false;
    setTimeout(() => {
      this.showReset = true;
    }, 2200)
  }
  public reset(){
    window.location.reload();
  }
}
