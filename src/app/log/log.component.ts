import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-log',
  templateUrl: './log.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger2, fade2, ani3 ]
})
export class LogComponent implements OnInit {
  public hideMessage: boolean;
  public commits: Array<string>;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.commits = [
      'da91bc1a add reset button',
      '37bce8f6 all colors working',
      '1dd25ea0 mixed overwrite working',
      'fdc843f4 use a function to simplify',
      '332a4af1 progress',
      '90daa496 update',
      '4f0d06ab add reset component',
      'b3eb1ec0 add pull',
      '47c2f80e delete unused image'
    ]
  }

  visualizeLog(){
    this.hideMessage = false;


  }

}
