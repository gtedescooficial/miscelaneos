import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <p class="muted">Não se trata de um projeto em sim, apenas de utilização de
  direvtivas, ngStyle, ngClass, ngSwitch, rotas filhas e pasar parametros a traves
  da url de rotas parent a rotas filhas. Alem de efeito de botao de carregamento de dados
  </p>
   <app-ng-style></app-ng-style>
   <app-ng-class></app-ng-class>
   <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
