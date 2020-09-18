import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
greet='HI WELCOME TO ANGULAR TRAINING';
menuItem="TESTING"
  constructor() { }

  ngOnInit(): void {
  }

}
