import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template:`
  <p [style.fontSize.px]="tamano">
  Hola mundo esta
  </p>

  <button class="btn btn-primary" (click)="tamano = tamano + 5"><i class="fa fa=2x fa-plus "></i></button>
  <button class="btn btn-danger" (click)="tamano = tamano - 5"><i class="fa fa=2x fa-minus "></i></button>
  `,
  styles: [`p{ color: red }`]
})
export class NgStyleComponent implements OnInit {

  tamano:number = 30;
  constructor() { }

  ngOnInit() {
  }

}
