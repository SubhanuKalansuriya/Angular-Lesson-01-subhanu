import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter = 0;

  buttonClick() {
    this.counter++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
