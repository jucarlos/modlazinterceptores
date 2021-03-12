import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { LoginComponent } from './componets/login/login.component';
import { RegistroComponent } from './componets/registro/registro.component';
import { PerfilComponent } from './componets/perfil/perfil.component';


@NgModule({
  declarations: [LoginComponent, RegistroComponent, PerfilComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
