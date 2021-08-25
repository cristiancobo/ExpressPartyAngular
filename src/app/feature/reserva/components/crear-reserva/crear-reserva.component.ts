import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';

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
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  selected = '1';
  fechaPorDefecto = new Date();
  form: FormGroup;
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
  constructor(private fb: FormBuilder, protected reservaService: ReservaService,  private snackBar: MatSnackBar){
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        identificacion: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        combo: ['', Validators.required],
        fecha: ['', Validators.required]

      }
    );
  }

  ngOnInit(): void {
  }

  agregarReserva(){
    const reserva: Reserva = {
      nombrePersonaReserva: this.form.value.nombre,
      id: 0,
      direccionPersonaReserva: this.form.value.direccion,
      fechaCreacionReserva: '2021-01-01 01:01:01',
      fechaExpiracion: '2021-01-01 01:01:01',
      fechaReservacion: formatDate(this.form.value.fecha, 'yyyy-MM-dd HH:mm:ss', 'en-GB'),
      idCombo: this.form.value.combo,
      idPersonaReserva: this.form.value.identificacion,
      precioFinalReserva: 0,
      telefonoPersonReserva: this.form.value.telefono,
    };
    this.reservaService.agregar(reserva).subscribe((response) => {
            console.log(response);
            this.openSnackBar('La reserva se ha creado con exito!', 'cerra');
        }, err => {
          if (err.error.nombreExcepcion && err.error.mensaje){
            this.openSnackBar(err.error.mensaje, 'cerrar');
          }
        });
      }

 openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action);
}



}
