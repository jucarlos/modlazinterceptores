import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbaranesComponent } from './components/albaranes/albaranes.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { ClientesRoutingModule } from './cliente.routing';
import { PaisesComponent } from './components/paises/paises.component';



@NgModule({
  declarations: [
    AlbaranesComponent,
    FacturasComponent,
    MantenimientoComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
