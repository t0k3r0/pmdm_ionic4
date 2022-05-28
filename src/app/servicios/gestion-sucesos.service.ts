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
  private sucesos: ISucesos[]=[];

  constructor(private leerFichero: HttpClient) {
    console.log('2.1');
    this.getSucesosFichero();
  }


  getSucesosFichero() {
    let datosFichero: Observable<ISucesos[]>;
    datosFichero = this.leerFichero.get<ISucesos[]>('/assets/datos/sucesos.json');
    datosFichero.subscribe(datos => (this.sucesos.push(...datos)));
    console.log('2.2');

  }

  getSucesos() {
    console.log('2.3');
    return this.sucesos;
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


  // borrarSuceso(id: string) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // eslint-disable-next-line space-before-function-paren
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // eslint-disable-next-line prefer-const
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // let sucesoEncontrado: ISucesos = (function (ISucesos) { return ISucesos.id === id});
    // let indice: number = this.sucesos.indexOf(sucesoEncontrado);

  // }
}
