import { ReservaService } from '@reserva/shared/service/reserva.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit,  AfterViewInit {
  public listaReservas: Reserva[] = [];
  idActualizar: number;

  displayedColumns: string[] = [
    'id',
    'idPersonaReserva',
    'nombrePersonaReserva',
    'fechaReservacion',
    'direccionPersonaReserva',
    'telefonoPersonReserva',
    'fechaExpiracion',
    'precioFinalReserva',
    'idCombo',
    'acciones'

  ];
  dataSource = new MatTableDataSource<Reserva>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private reservaService: ReservaService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(){
    this.reservaService.consultar().subscribe((response) => {
      this.listaReservas = response;
      this.dataSource.data = this.listaReservas;
   });
  }

  eliminarReserva(id: number, element: any){
    this.reservaService.eliminar(id).subscribe(response => {
      console.log(response);
      this.openSnackBar('La reserva ha sido eliminada correctamente', 'cerrar');
      this.dataSource.data = this.dataSource.data.filter(i => i !== element);
    }, err => {
      if (err.error.nombreExcepcion && err.error.mensaje){
        this.openSnackBar(err.error.mensaje, 'cerrar');
      }
    });
 }

 openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action);
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
