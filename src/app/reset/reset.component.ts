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

  headPointer(){
    switch(this.chosenCommit) {
      case ('HEAD' || 'no parameter' || ''):
        return 'head';
        break;
      case 'HEAD~1':
        return 'head1';
        break;
      case 'HEAD~2':
        return 'head2';
          break;
      case 'HEAD~3':
        return 'head3';
        break;
      default:
        return 'head';
    }
  }

  overwriteType(){
    switch(this.chosenCommand) {
      case ('mixed' || 'no parameter' || ''):
        return 'mixed';
        break;
      case 'soft':
        return 'soft';
        break;
      case 'hard':
        return 'hard';
          break;
      default:
        return 'mixed';
    }
  }

  visualizeReset(){
    switch(this.chosenCommit) {
      case ('HEAD' || 'no parameter'):
        const groupH = document.getElementsByClassName('toMove--arrow');
        for (let i = 0; i < groupH.length; i++){
          groupH[i].classList.add('move-in-place');
        }
        break;
      case 'HEAD~1':
        const groupH1 = document.getElementsByClassName('toMove');
        for (let i = 0; i < groupH1.length; i++){
          groupH1[i].classList.add('move-down-one');
        }
        break;
      case 'HEAD~2':
        const groupH2 = document.getElementsByClassName('toMove');
        for (let i = 0; i < groupH2.length; i++){
          groupH2[i].classList.add('move-down-two');
        }
          break;
      case 'HEAD~3':
        const groupH3 = document.getElementsByClassName('toMove');
        for (let i = 0; i < groupH3.length; i++){
          groupH3[i].classList.add('move-down-three');
        }
        break;
      default:
        const groupBlank = document.getElementsByClassName('toMove');
        for (let i = 0; i < groupBlank.length; i++){
          groupBlank[i].classList.add('move-in-place');
        }
    }
    switch(this.chosenCommand) {
      case 'soft':
        const groupH = document.getElementsByClassName('head');
        for (let i = 0; i < groupH.length; i++){
          // groupH[i].classList.add('move-left');
        }
        break;
      case 'mixed':
        alert('mixed')
        break;
      case 'hard':
        alert('hard');
          break;
      default:
        const groupDefault = document.getElementsByClassName('head');
        for (let i = 0; i < groupDefault.length; i++){
          // groupDefault[i].classList.add('move-left');
        }
    }
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
