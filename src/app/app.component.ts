import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'visualize-git';
  public commands = [
    {name: 'add'},
    {name: 'clone'},
    {name: 'init'}
  ];
  public chosenCommand: string;

  @Output() selectionChange: EventEmitter< MatSelectChange >

  ngOnInit(): void {
    this.chosenCommand = '';
  }

  selectCommand(command){
    this.chosenCommand = command;
  }
}
