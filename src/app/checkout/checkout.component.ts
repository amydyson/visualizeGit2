import { Component, OnInit } from '@angular/core';
import { storeCleanupWithContext } from '@angular/core/src/render3/instructions';
import { fade, fade2, myTrigger, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger, myTrigger2, fade2, ani3 ]
})
export class CheckoutComponent implements OnInit {
  public branches: Array<string>;
  public hideMessage: boolean;
  public hideMessage2: boolean;
  public hideMessage3: boolean;
  public disableOption: boolean;
  public chosenCommand: string;
  public commands = [
    {name: 'checkout an existing branch'},
    {name: 'create and checkout a new branch'},
  ];

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.hideMessage2 = true;
    this.hideMessage3 = true;
    this.disableOption = false;
  }

  selectCommand(command){
    this.chosenCommand = command;
  }

  visualizeCheckout(){
    this.hideMessage2 = false;
    this.hideMessage = false;
    this.disableOption = true;
    setTimeout(() => {
      this.hideMessage = false;
    }, 1000);
  }

  visualizeCheckoutNew(){
    this.hideMessage3 = false;
    this.hideMessage = false;
    this.disableOption = true;
    setTimeout(() => {
      this.hideMessage = false;
    }, 2000);
  }

  public reset(){
    window.location.reload();
  }

}
