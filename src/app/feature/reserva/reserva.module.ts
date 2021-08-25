import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '@shared/shared.module';
import { ActualizarReservaComponent } from './components/actualizar-reserva/actualizar-reserva.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ReservaService } from './shared/service/reserva.service';
@NgModule({
  declarations: [
    ReservaComponent,
    ListarReservaComponent,
    CrearReservaComponent,
    ActualizarReservaComponent,
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    MaterialModule ,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [ReservaService]
})
export class ReservaModule { }
