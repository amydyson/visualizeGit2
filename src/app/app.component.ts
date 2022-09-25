import { animate, trigger, state, style, transition, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
  public commands = [];
  public chosenCommand: string;
  public isMac: boolean;
  showBanner: boolean;

  constructor() { }

  ngOnInit(): void {
      this.commands = [
        {name: 'add'},
        {name: 'branch'},
        {name: 'checkout'},
        {name: 'clone'},
        {name: 'commit'},
        {name: 'fetch'},
        {name: 'init'},
        {name: 'log'},
        {name: 'merge'},
        {name: 'pull'},
        {name: 'push'},
        {name: 'reset'},
        {name: 'stash'},
        {name: 'status'}
      ];
 
    this.chosenCommand = '';
    
  }

  selectCommand(command){
    this.chosenCommand = command;
  }




}
