import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-stash',
  templateUrl: './stash.component.html',
  styleUrls: ['../app.component.css']
})
export class StashComponent implements OnInit {
  public hideMessage: boolean;
  public completed: boolean;
  public optionSelected: boolean;
  public enableReload: boolean;
  
  public commands = [
    {name: 'no option'},
    {name: 'include-untracked'},
    {name: 'keep-index'}
  ];

  public chosenCommand: string;
  public chosenCommit: string;

  ngOnInit() {
    this.hideMessage = true;
    this.chosenCommand = '';
    this.completed = false;
    this.optionSelected = false;
    this.enableReload = false;
  }

  reload(){
    let group;
    this.ngOnInit();
    group = document.getElementsByClassName('move-left-from-working');
    for (let i = 0; i < group.length; i++){
      group[i].classList.remove('move-left-from-working');
    }
    group = document.getElementsByClassName('untracked');
    for (let i = 0; i < group.length; i++){
      group[i].classList.remove('move-left-from-working');
    }
    group = document.getElementsByClassName('move-left-from-index');
    for (let i = 0; i < group.length; i++){
      group[i].classList.remove('move-left-from-index');
    }
    group = document.getElementsByClassName('move-left-from-index-2');
    for (let i = 0; i < group.length; i++){
      group[i].classList.remove('move-left-from-index-2');
    }
  }

  copyHead(){
    if (!this.hideMessage &&
        this.headPointer() === 'head' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  copyHead1(){
    if (!this.hideMessage &&
        this.headPointer() === 'head1' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  copyHead2(){
    if (!this.hideMessage &&
        this.headPointer() === 'head2' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  copyHead3(){
    if (!this.hideMessage &&
        this.headPointer() === 'head3' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  headPointer(){
    switch(this.chosenCommit) {
      case ('HEAD' || 'no parameter' || ''):
        console.log('head')
        return 'head';
        break;
      case 'HEAD~1':
        console.log('head1')
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

  hardOverwrite(){
    if (!this.hideMessage && this.overwriteType()=== 'hard'){
      return true;
    } else {
      return false;
    }
  }

  visualizeStash(){
    let group;
    switch(this.chosenCommand) {
      case (''):
        group = document.getElementsByClassName('tracked');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-working');
        }
        group = document.getElementsByClassName('index');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-index');
        }
        break;
      case ('no option'):
        group = document.getElementsByClassName('tracked');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-working');
        }
        group = document.getElementsByClassName('index');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-index');
        }
        break;
      case 'include-untracked':
        group = document.getElementsByClassName('tracked');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-working');
        }
        group = document.getElementsByClassName('untracked');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-working');
        }
        group = document.getElementsByClassName('index');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-index-2');
        }
        break;
      case 'keep-index':
        group = document.getElementsByClassName('tracked');
        for (let i = 0; i < group.length; i++){
          group[i].classList.add('move-left-from-working');
        }
        break;
      default:
    }
    setTimeout(() => {
      this.enableReload = true;
    }, 2000)
    this.hideMessage = false;
    this.completed = true;
  }

  selectCommand(command){
    this.chosenCommand = command;
  }

}

