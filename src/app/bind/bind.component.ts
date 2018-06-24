import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  colspan:number = 2;
  size:number = 7;

  imgUrl:string = 'http://placehold.it/400x220';

  constructor() { }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }

}
