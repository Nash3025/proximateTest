import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/Interfaces/Menu';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  @Input()
  menuList: Menu[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
