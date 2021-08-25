import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
interface Food {
  value: number;
  viewValue: string;
}




@Component({
  selector: 'app-actualizar-reserva',
  templateUrl: './actualizar-reserva.component.html',
  styleUrls: ['./actualizar-reserva.component.css']
})
export class ActualizarReservaComponent implements OnInit{
  idReserva: number;
  reservaInput: Reserva;
  form: FormGroup;
  selected = '1';
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  foods: Food[] = [
    {value: 1, viewValue: 'Combo 1'},
    {value: 2, viewValue: 'Combo 2'},
    {value: 3, viewValue: 'Combo 3'}
  ];
  constructor(private fb: FormBuilder, protected reservaService: ReservaService,
              private route: ActivatedRoute,  private snackBar: MatSnackBar){
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        identificacion: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        combo: ['', Validators.required],
        fecha: ['' , Validators.required]
      }
      );
      }


openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action);
}
  ngOnInit(): void {
  this.idReserva = this.route.snapshot.queryParams.id;
  this.obtenerReserva();
  }
  obtenerReserva(){
        this.reservaService.obtener(this.idReserva).subscribe((response) => {
        this.reservaInput = response;
        this.form.get('nombre').patchValue(this.reservaInput.nombrePersonaReserva);
        const fechaFormato = new Date(this.reservaInput.fechaReservacion);
        this.form.get('fecha').patchValue(fechaFormato);
        this.form.get('identificacion').patchValue(this.reservaInput.idPersonaReserva);
        this.form.get('combo').patchValue(this.reservaInput.idCombo);
        this.form.get('direccion').patchValue(this.reservaInput.direccionPersonaReserva);
        this.form.get('telefono').patchValue(this.reservaInput.telefonoPersonReserva);
      }
    );
  }


  actualizarReserva(){
    const reserva: Reserva = {
      nombrePersonaReserva: this.form.value.nombre,
      id: this.reservaInput.id,
      direccionPersonaReserva: this.form.value.direccion,
      fechaCreacionReserva: this.reservaInput.fechaCreacionReserva,
      fechaExpiracion: this.reservaInput.fechaExpiracion,
      fechaReservacion: formatDate(this.form.value.fecha, 'yyyy-MM-dd HH:mm:ss', 'en-GB'),
      idCombo: this.form.value.combo,
      idPersonaReserva: this.form.value.identificacion,
      precioFinalReserva: this.reservaInput.precioFinalReserva,
      telefonoPersonReserva: this.form.value.telefono,
      };
    this.reservaService.actualizar(reserva, this.idReserva).subscribe((response) => {
        console.log(response);
        this.openSnackBar('La reserva se ha actualizado correctamente', 'cerrar');
      }, err => {
        if (err.error.nombreExcepcion && err.error.mensaje){
          this.openSnackBar(err.error.mensaje, 'cerrar');
        }
      });
      }


}
