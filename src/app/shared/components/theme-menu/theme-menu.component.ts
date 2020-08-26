import { Component, OnInit } from '@angular/core';

type Theme = 'light' | 'dark';

@Component({
  selector: 'tb-theme-menu',
  templateUrl: './theme-menu.component.html',
  styles: [
  ]
})
export class ThemeMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: Theme) {
    alert(theme)
  }

}
