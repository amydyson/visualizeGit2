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

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.hideMessage2 = true;
    this.hideMessage3 = true;
  }

  visualizeCheckout(){
    this.hideMessage2 = false;
    setTimeout(() => {
      this.hideMessage = false;
    }, 1000)
  }

  visualizeCheckoutNew(){
    this.hideMessage3 = false;
    setTimeout(() => {
      this.hideMessage = false;
    }, 2000)
  }

}
