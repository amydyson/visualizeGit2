import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['../app.component.css']
})
export class FetchComponent implements OnInit {
  public hideMessage: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
  }

  visualizeFetch(){
    this.hideMessage = false;
  }
}
