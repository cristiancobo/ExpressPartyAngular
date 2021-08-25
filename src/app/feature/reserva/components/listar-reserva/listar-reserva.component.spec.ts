import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { ListarReservaComponent } from './listar-reserva.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Reserva } from '@reserva/shared/model/reserva';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ListarReservaComponent', () => {
  let component: ListarReservaComponent;
  let fixture: ComponentFixture<ListarReservaComponent>;
  let reservaService: ReservaService;
  const listaReservas = [
    new Reserva(1, 'cra. 20', '2021-06-01', '2021-08-08' , '2021-08-01' , 1 , '123456789', 'camila', 1000000, '3202332'),
    new Reserva(2, 'cra. 20', '2021-06-01', '2021-08-08', '2021-08-01', 1 , '123456789', 'antonio', 1000000, '3202332'),
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [ReservaService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'consultar').and.returnValue(
    of(listaReservas)
    );
    fixture.detectChanges();
  });

  it('deberia crear componente listar reservas ', () => {
    expect(component).toBeTruthy();
    component.listarReservas();
    expect(2).toBe(component.listaReservas.length);

  });
});
