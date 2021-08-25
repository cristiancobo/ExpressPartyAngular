import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ReservaService } from './reserva.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
describe('ReservaService', () => {

  let httpMock: HttpTestingController;
  let service: ReservaService;

  const apiEndpointReservas = `${environment.endpoint}/reservas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [HttpService, ReservaService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('deberia crear servicio', () => {
    const reservaServicio: ReservaService = TestBed.inject(ReservaService);
    expect(reservaServicio).toBeTruthy();
  });

  it('deberia listar reservas', () => {
    const dummyReservas = [
      new Reserva(1, 'cra. 20', '2021-06-01', '2021-08-08', '2021-08-01', 1, '123456789', 'camila', 1000000, '3202332'),
      new Reserva(2, 'cra. 20', '2021-06-01', '2021-08-08', '2021-08-01', 1, '123456789', 'antonio', 1000000, '3202332'),
    ];
    service.consultar().subscribe(reservas => {
      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(dummyReservas);
    });
    const req = httpMock.expectOne(apiEndpointReservas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('deberia crear una reserva', () => {
    const dummyReserva = new Reserva(1, 'cra. 20', '2021-06-01', '2021-08-08', '2021-08-01', 1, '123456789', 'camila', 1000000, '3202332');
    service.agregar(dummyReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointReservas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia eliminar una reserva', () => {
    const idReserva = 1;
    service.eliminar(idReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpointReservas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<null>({body: null}));
  });

  it('deberia actualizar una reserva', () => {
    const dummyReserva = new Reserva(1, 'cra. 20', '2021-06-01', '2021-08-08', '2021-08-01', 1, '123456789', 'camila', 1000000, '3202332');
    service.actualizar(dummyReserva, 1).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(`${apiEndpointReservas}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<number>({body: 1}));
  });

  it('deberia obtener una reserva', () => {
    const dummyReserva = new Reserva(1, 'cra. 20', '2021-06-01', '2021-08-08', '2021-08-01', 1, '123456789', 'camila', 1000000, '3202332');

    service.obtener(1).subscribe(respuesta => {
      expect(respuesta).toEqual(dummyReserva);
    });
    const req = httpMock.expectOne(`${apiEndpointReservas}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReserva);
  });
});
