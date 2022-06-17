import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'visualize-git';
  commands = [
    {name: 'add'},
    {name: 'clone'},
    {name: 'init'}
  ]

  ngOnInit(): void {
    
  }
}
