import { Component, ElementRef, OnInit, } from '@angular/core';

import { interval, timer } from 'rxjs';
import { from, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /* implements OnInit */ {
  clock: any;


  /*  startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    

    this.clock = h + ":" + m + ":" + s;

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.startTime()
  } */
}
