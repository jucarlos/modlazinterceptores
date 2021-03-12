import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { AlmaceComponent } from './pages/almace/almace.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';


@NgModule({
  declarations: [AlmaceComponent, ComprasComponent, PedidosComponent],
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }
