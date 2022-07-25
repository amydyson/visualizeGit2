import { Component, OnInit } from '@angular/core';
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
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.hideMessage2 = true;
    this.hideMessage3 = true;
    this.showReset = false;
  }

  visualizeCheckout(){
    this.hideMessage2 = false;
    this.hideMessage = false;
    setTimeout(() => {
      this.hideMessage = false;
    }, 1000);
    setTimeout(() => {
      this.showReset = true;
    }, 2500)
  }

  visualizeCheckoutNew(){
    this.hideMessage3 = false;
    this.hideMessage = false;
    setTimeout(() => {
      this.hideMessage = false;
    }, 2000);
    setTimeout(() => {
      this.showReset = true;
    }, 2900)
  }

  public reset(){
    window.location.reload();
  }

}
