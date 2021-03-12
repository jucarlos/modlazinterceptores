import { PaisesComponent } from './components/paises/paises.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AlbaranesComponent } from './components/albaranes/albaranes.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    { 
        path: '',
        children: [

            { path: 'mantenimiento', component: MantenimientoComponent },
            { path: 'albaranes', component: AlbaranesComponent },
            { path: 'facturas', component: FacturasComponent  },
            { path: 'paises', component: PaisesComponent  },
            { path: '**', redirectTo: 'mantenimiento'}
        ]
        
    }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule {}