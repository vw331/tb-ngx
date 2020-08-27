import { Component, OnInit, EventEmitter, Output } from '@angular/core';


type Theme = 'light' | 'dark';

@Component({
  selector: 'tb-theme-menu',
  templateUrl: './theme-menu.component.html',
  styles: [
  ]
})
export class ThemeMenuComponent implements OnInit {

  constructor() { }

  @Output() change = new EventEmitter<Theme>();

  ngOnInit(): void {
  }

  changeTheme(theme: Theme) {
    this.change.emit(theme);
  }

}
