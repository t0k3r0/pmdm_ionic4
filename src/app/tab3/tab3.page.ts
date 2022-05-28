import { Component } from '@angular/core';
class ClaseElemento3 {

  private nombre3: string;
  private icono: string;
  private enlace: string;
  constructor(nombre3: string, icono: string, enlace: string) {
    this.nombre3 = nombre3;
    this.icono = icono;
    this.enlace = enlace;
  }


  public getEnlace(): string {
    return this.enlace;
  }
  public setEnlace(value: string) {
    this.enlace = value;
  }
  public getIcono(): string {
    return this.icono;
  }
  public setIcono(value: string) {
    this.icono = value;
  }
  public getNombre3(): string {
    return this.nombre3;
  }
  public setNombre3(value: string) {
    this.nombre3 = value;
  }


}

// interface IElemento3{
//   nombre3: string;
//   icono: string;
//   enlace: string;

// }
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // valoresLista3: IElemento3[] = [
  //   { nombre3: 'nombre1', icono: 'alarm-outline', enlace: '/tab1' },
  //   { nombre3: 'nombre2', icono: 'alarm-outline', enlace: '/tab2' },
  //   { nombre3: 'nombre3', icono: 'alarm-outline', enlace: '/tab3' }
  // ];


  listaObjetos3: ClaseElemento3[] = [
    new ClaseElemento3('nombre1', 'alarm-outline', '/tabs/tab1'),
    new ClaseElemento3('nombre2', 'alarm-outline', '/tabs/tab2'),
    new ClaseElemento3('nombre3', 'alarm-outline', '/tabs/tab3')

  ];
  constructor() { }

}
