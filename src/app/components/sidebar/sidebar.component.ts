import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
sideBarItem='About US'
  constructor() { }

  ngOnInit(): void {
  }
  onItemClick(){
    alert('hai')
  }
}
