import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styles: []
})
export class UsuarioNovoComponent implements OnInit {
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
