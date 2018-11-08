import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/nav/Models/NavItem';

@Component({
  selector: 'larsen-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: Array<NavItem> = [];

  constructor() { }

  ngOnInit() {
    this.items.push(new NavItem("Home", null));
    this.items.push(new NavItem("Blog", null));
    this.items.push(new NavItem("Pictures", null));    
  }

}