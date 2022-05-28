// import { ISucesos } from './gestion-sucesos.service';
/* eslint-disable space-before-function-paren */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { GestionStorageService } from './gestion-storage.service';
/* eslint-disable prefer-const */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { IpcNetConnectOpts } from 'net';

export interface ISucesos {
  id: string;
  source: string;
  town: string;

}

@Injectable({
  providedIn: 'root'
})
export class GestionSucesosService {
  // id: string;
  // source: string;
  // town: string;
  private sucesos: ISucesos[] = [];

  constructor(private leerFichero: HttpClient, private gestionAlmacen: GestionStorageService) {
    console.log('2.1');
    this.getSucesosFichero();
    let datosPromesa: Promise<ISucesos[]> = gestionAlmacen.getObject('personas');


    datosPromesa.then(datos => {
      this.sucesos.push(...datos);

    });

  }


  getSucesosFichero() {
    let datosFichero: Observable<ISucesos[]>;
    datosFichero = this.leerFichero.get<ISucesos[]>('/assets/datos/sucesos.json');
    datosFichero.subscribe(datos => (this.sucesos.push(...datos)));
    this.gestionAlmacen.setObject('sucesos', this.sucesos);
    console.log('2.2');

  }

  getSucesos() {
    console.log('2.3');
    return this.sucesos;
  }

  modificarSuceso(id: string, source: string, town: string) {

    let sucesoEncontrado: ISucesos = this.sucesos.find(function (cadaSuceso) { return cadaSuceso.id == id });
    let indice: number = this.sucesos.indexOf(sucesoEncontrado);
    this.sucesos[indice].source = source;
    this.sucesos[indice].town = town;
    this.gestionAlmacen.setObject('sucesos', this.sucesos);
    console.log('2.2');
  }
  // insertarSuceso(id: string, source: string, town: string) {

  // eslint-disable-next-line prefer-const
  //   let nuevoSuceso: ISucesos = {
  //     id: this.id,
  //     source: this.source,
  //     town: this.town

  //   };
  //   this.sucesos.push(nuevoSuceso);
  //   this.sucesos = [...this.sucesos, nuevoSuceso];
  //   console.log(this.sucesos);
  //   console.log('hola');
  // }


  borrarSuceso(id: string) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // eslint-disable-next-line space-before-function-paren
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // eslint-disable-next-line prefer-const
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // let sucesoEncontrado: ISucesos = (function (sucesos) { return sucesos.id === id});
    // let indice: number = this.sucesos.indexOf(sucesoEncontrado);

  }
}
