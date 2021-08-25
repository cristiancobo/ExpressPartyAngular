  
import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import {Reserva} from '../page/reserva/reserva.po';

describe('Módulo Reservas', () => {
    let page: AppPage;
    let navbar: NavbarPage;
    let reservaPage: Reserva;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
       reservaPage = new Reserva()

    });

    it('Deberia ir a la pagina crear reserva', () => {
        page.navigateTo()
        navbar.clickBotonPaginaPrincipalReserva();

      });

     
      it('Deberia ir a la pagina de lista de reservas y listar 3',  async () => {
        page.navigateTo()
        navbar.clickBotonPaginaPrincipalReserva();
        reservaPage.clickBotonListarReservas();
        expect(reservaPage.contarReservas()).toBe(3)
        
      });


      it('Deberia ir a la pagina de crear reservas y crear una reserva',  async () => {
        page.navigateTo()
        navbar.clickBotonPaginaPrincipalReserva();
        reservaPage.clickBotonCrearReserva();
        reservaPage.ingresarNombrePersona('Cristian');
        reservaPage.ingresarIdPersona('12345678');
        reservaPage.ingresarTelefonoPersona('35543667');
        reservaPage.ingresarDireccionPersona('Cra. 20. # 50')
        reservaPage.ingresarCombo();
        reservaPage.ingresarOpcionCombo();
        reservaPage.clickBotonCrearNuevaReserva();
        reservaPage.clickBotonListarReservas();
        expect(reservaPage.contarReservas()).toBe(1)
        reservaPage.eliminarReserva();
        expect(reservaPage.obtenerCantidadLista()).toEqual('0');
        
      }); 
  

      it('Deberia actualizar una reserva',  async () => {
        page.navigateTo()
        navbar.clickBotonPaginaPrincipalReserva();
        reservaPage.clickBotonCrearReserva();
        reservaPage.ingresarNombrePersona('Cristian');
        reservaPage.ingresarIdPersona('12345678');
        reservaPage.ingresarTelefonoPersona('35543667');
        reservaPage.ingresarDireccionPersona('Cra. 20. # 50')
        reservaPage.ingresarCombo();
        reservaPage.ingresarOpcionCombo();
        reservaPage.clickBotonCrearNuevaReserva();
        reservaPage.clickBotonListarReservas();
        reservaPage.actualizarReserva();     
        reservaPage.cancelarActualizacionReserva();   
        reservaPage.eliminarReserva();
        expect(reservaPage.obtenerCantidadLista()).toEqual('3');
      });
 

      /**
      it('Deberia eliminar una reserva',  async () => {
        page.navigateTo()
        navbar.clickBotonPaginaPrincipalReserva();
        reservaPage.clickBotonCrearReserva();
        reservaPage.ingresarNombrePersona('Cristian');
        reservaPage.ingresarIdPersona('12345678');
        reservaPage.ingresarTelefonoPersona('35543667');
        reservaPage.ingresarDireccionPersona('Cra. 20. # 50')
        reservaPage.ingresarCombo();
        reservaPage.ingresarOpcionCombo();
        reservaPage.clickBotonCrearNuevaReserva();
        reservaPage.clickBotonListarReservas();
        reservaPage.actualizarReserva();     
        reservaPage.cancelarActualizacionReserva();   
        reservaPage.eliminarReserva();
        expect(reservaPage.obtenerCantidadLista()).toEqual('3');
      });
 */ 

});