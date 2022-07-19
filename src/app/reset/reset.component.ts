import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['../app.component.css']
})
export class ResetComponent implements OnInit {
  public hideMessage: boolean;
  public chosen: boolean;
  
  public commands = [
    {name: 'hard'},
    {name: 'mixed'},
    {name: 'soft'},
    {name: 'no parameter'}
  ];
  public commits = [
    {name: 'HEAD'},
    {name: 'HEAD~1'},
    {name: 'HEAD~2'},
    {name: 'HEAD~3'},
    {name: 'no parameter'}
  ];
  public chosenCommand: string;
  public chosenCommit: string;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.chosenCommand = '';
    this.chosenCommit = '';
    this.chosen = false;
  }

  visualizeReset(){
    this.hideMessage = false;
    this.chosen = false;
  }

  selectCommand(command){
    this.chosenCommand = command;
  }
  selectCommit(commit){
    this.chosenCommit = commit;
    this.chosen = true;
  }
}
