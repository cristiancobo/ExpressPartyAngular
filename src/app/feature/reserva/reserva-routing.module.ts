import { ActualizarReservaComponent } from './components/actualizar-reserva/actualizar-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
  children: [
      {
        path: 'listar',
        component: ListarReservaComponent
      },
      {
        path: 'crear',
        component: CrearReservaComponent
      },
      {
        path: 'actualizar',
        component: ActualizarReservaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
