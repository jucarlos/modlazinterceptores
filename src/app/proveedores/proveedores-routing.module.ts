import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { AlbaranesComponent } from './../clientes/components/albaranes/albaranes.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'compras', component: ComprasComponent },
      { path: 'albaranes', component: AlbaranesComponent },
      { path: 'pedidos', component: PedidosComponent  },
      { path: '**', redirectTo: 'compras'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
