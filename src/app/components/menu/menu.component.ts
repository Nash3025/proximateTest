import { Component, Input, OnInit } from '@angular/core';
import {Menu} from '../../Interfaces/Menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()  
  menuList:Menu[] = [];
  constructor(private router: Router) { }

  closeSesion(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
