export class Reserva {
    id: number;
    direccionPersonaReserva: string;
    fechaCreacionReserva: string;
    fechaExpiracion: string;
    fechaReservacion: string;
    idCombo: number;
    idPersonaReserva: string;
    nombrePersonaReserva: string;
    precioFinalReserva: number;
    telefonoPersonReserva: string;
    constructor(
    id: number,
    direccionPersonaReserva: string,
    fechaCreacionReserva: string,
    fechaExpiracion: string,
    fechaReservacion: string ,
    idCombo: number,
    idPersonaReserva: string,
    nombrePersonaReserva: string,
    precioFinalReserva: number,
    telefonoPersonReserva: string,
          ) {
              this.id = id;
              this.direccionPersonaReserva = direccionPersonaReserva;
              this.fechaCreacionReserva = fechaCreacionReserva;
              this.fechaExpiracion = fechaExpiracion;
              this.fechaReservacion = fechaReservacion;
              this.idCombo = idCombo;
              this.idPersonaReserva = idPersonaReserva;
              this.nombrePersonaReserva = nombrePersonaReserva;
              this.precioFinalReserva = precioFinalReserva;
              this.telefonoPersonReserva = telefonoPersonReserva;
      }
}
