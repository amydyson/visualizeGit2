import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { fade, myTrigger2 } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ 
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.7)'
      })),
      transition('large <=> small', animate('500ms'))
    ]),
    fade,
    myTrigger2
   ]
})
export class AppComponent implements OnInit {
  state: string = 'small';
  public title = 'visualize-git';
  public commands = [
    {name: 'add'},
    {name: 'clone'},
    {name: 'commit'},
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
  // toggleState(){
  //   this.state = (this.state === 'small' ? 'large' : 'small');
  // }
}
