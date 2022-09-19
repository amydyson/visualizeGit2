import { Component, OnInit } from '@angular/core';
import { fade, fade2, myTrigger, myTrigger2, ani3 } from '../animations';
import { SharedService } from '../shared.service';

@Component({
  selector: 'visualize-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../app.component.css', 'checkout.component.css'],
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

  constructor(private sharedService: SharedService) { }

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
    let bugDiv = document.getElementById('bug');
    let arrowDiv = document.getElementById('arrow');

    this.hideMessage2 = false;
    this.hideMessage = false;
    this.disableOption = true;
    setTimeout(() => {
      this.hideMessage = false;
    }, 1000);
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 3300);
  }

  visualizeCheckoutNew(){
    this.hideMessage3 = false;
    this.hideMessage = false;
    this.disableOption = true;
    setTimeout(() => {
      this.hideMessage = false;
    }, 2000);
    setTimeout(() => {
      this.sharedService.showSnackbar();
    }, 6500);
  }

}
