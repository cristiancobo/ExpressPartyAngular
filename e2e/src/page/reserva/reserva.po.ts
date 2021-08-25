import { by, element } from 'protractor';

export class Reserva{
    private linkCrearReserva = element(by.xpath('//*[@id="linkCrearReserva"]'));
    private linkListarReservas = element(by.xpath('//*[@id="linkListarReserva"]'));
    private listaReservasInicial = element.all(by.css('.mat-row.cdk-row.ng-star-inserted'));
    private linkPaginacionReservas = element(by.css('.mat-select-value.ng-tns-c132-3'));
    private nombrePersonaInput = element(by.id('mat-input-0'));
    private idPersonaInput = element(by.id('mat-input-1'));
    private telefonoPersonaInput = element(by.id('mat-input-2'));
    private direccionPersonaInput = element(by.id('mat-input-3'));
    private comboInput = element(by.css('.mat-select-placeholder.mat-select-min-line.ng-tns-c132-5.ng-star-inserted'));
    private comboOptionInput = element(by.id('mat-option-0'));
    private botonCrearReserva = element(by.xpath('/html/body/app-root/app-reserva/div[2]/app-crear-reserva/div/div[2]/mat-card/form/mat-grid-list/div/mat-grid-tile[8]/figure/button')); 
    private labelPaginacion = element(by.css('.mat-paginator-range-label'))
    private botonEliminar = element(by.xpath('/html/body/app-root/app-reserva/div[2]/app-listar-reserva/div/div[2]/mat-table/mat-row/mat-cell[10]/button[2]/span[1]/mat-icon'));
    private botonActualizar = element(by.xpath('/html/body/app-root/app-reserva/div[2]/app-listar-reserva/div/div[2]/mat-table/mat-row/mat-cell[10]/button[1]'));
    private botonCancelarActualizar = element(by.css('/html/body/app-root/app-reserva/div[2]/app-crear-reserva/div/div[2]/mat-card/form/mat-grid-list/div/mat-grid-tile[9]/figure/button'));
    async clickBotonCrearReserva() {
        await this.linkCrearReserva.click();
    }

    async clickBotonListarReservas() {
        await this.linkListarReservas.click();
    }

    async clickPaginacionReservas(){
        await this.linkPaginacionReservas.click();
    }

  

    async contarReservas() {
        return this.listaReservasInicial.count();
      }

      async ingresarNombrePersona(nombrePersona) {
        await this.nombrePersonaInput.sendKeys(nombrePersona);
      }

    async ingresarIdPersona(iDPersona) {
        await this.idPersonaInput.sendKeys(iDPersona);
      }

      async ingresarTelefonoPersona(telefonoPersona) {
        await this.telefonoPersonaInput.sendKeys(telefonoPersona);
      }

      async ingresarDireccionPersona(direccionPersona) {
        await this.direccionPersonaInput.sendKeys(direccionPersona);
      }

      async ingresarCombo() {
        await this.comboInput.click();
      }
      async ingresarOpcionCombo() {
        await this.comboOptionInput.click();
      }
    
      async clickBotonCrearNuevaReserva() {
        await this.botonCrearReserva.click();
    }
    
     async obtenerCantidadLista() {
       return (await this.labelPaginacion.getText()).slice(-1);
     }

     async eliminarReserva() {
        return this.botonEliminar.click()
      }

      async actualizarReserva() {
        return this.botonActualizar.click()
      }
      async cancelarActualizacionReserva() {
        return this.botonCancelarActualizar.click();
      }

}