import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { of } from 'rxjs';
import {  MatSnackBarModule } from '@angular/material/snack-bar';

import { CrearReservaComponent } from './crear-reserva.component';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let reservaService: ReservaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
      ],
      providers: [
        ReservaService, HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'agregar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('deberia crear componente crear reserva', () => {
    expect(component).toBeTruthy();
  });

  it('formulario para reservación es invalido cuando esta vacio', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Realizando una reserva', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls.nombre.setValue('camila');
    component.form.controls.identificacion.setValue('5446543');
    component.form.controls.direccion.setValue('cra. 20');
    component.form.controls.telefono.setValue('5676543');
    component.form.controls.combo.setValue('1');
    component.form.controls.fecha.setValue(new Date());
    expect(component.form.valid).toBeTruthy();

    component.agregarReserva();
    reservaService.agregar(component.form.value).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });  
  });



});
