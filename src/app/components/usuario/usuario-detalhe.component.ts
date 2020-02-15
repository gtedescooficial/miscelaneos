import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styles: []
})
export class UsuarioDetalheComponent implements OnInit {

  idUser: number;

  constructor(private ar: ActivatedRoute) {
    this.ar.parent.params.subscribe( params => {

      if( params['id']){

        this.idUser =  params['id'];
        console.log(this.idUser);
      }
    })
   }

  ngOnInit() {
  }

}
