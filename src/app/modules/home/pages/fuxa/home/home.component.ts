import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      this.isLoading = false
    }, 2000)
  }

}
