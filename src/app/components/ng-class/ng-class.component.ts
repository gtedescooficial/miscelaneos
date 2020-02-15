import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  template:`
          <div [ngClass]="alerta" class="alert" role="alert">
              This is a primary alert—check it out!
          </div>
          <button (click)="alerta = 'alert-info'" class="btn btn-info">Info</button>
          <button (click)="alerta = 'alert-warning'" class="btn btn-warning">Warning</button>
          <button (click)="alerta = 'alert-success'" class="btn btn-success"> Success</button>
          <h3 [ngClass]="{'text-info':json.resposta, 'text-danger':!json.resposta}">Conteudo da resposta</h3>
          <button (click)="json.resposta = !json.resposta" class="btn btn-secondary"> Toggle json.resposta true/false</button>
          <br>
          <br>
          <h3>Processo asincrono</h3>
          <button (click) = "executar()"
          class="btn btn-primary"
          [disabled] = "loading"
          name="salvar"><i [ngClass]="{'fa-save':!loading, 'fa-refresh fa-spin':loading}" class="fa "> </i>
           Guardar cambios
           </button>
  `,
  styles: []
})
export class NgClassComponent implements OnInit {

  alerta: string = 'alert-danger';
  json: Object = {
    resposta: false
  };
  loading: boolean = false;

  executar(){
    this.loading = true;

    setTimeout( () => this.loading = false,3000 )
  }

  constructor() { }

  ngOnInit() {
  }

}
