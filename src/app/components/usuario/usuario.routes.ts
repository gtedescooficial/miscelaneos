import { Routes } from '@angular/router';
import { UsuarioNovoComponent } from "../../components/usuario/usuario-novo.component";
import { UsuarioEditarComponent } from "../../components/usuario/usuario-editar.component";
import { UsuarioDetalheComponent } from "../../components/usuario/usuario-detalhe.component";

export const USUARIO_ROUTES: Routes = [
  { path: 'novo', component: UsuarioNovoComponent},
  { path: 'editar', component: UsuarioEditarComponent},
  { path: 'detalhe', component: UsuarioDetalheComponent},
  { path: '**', pathMatch:'full', redirectTo: 'editar' }
];

