import { GestionSucesosService } from './../servicios/gestion-sucesos.service';
import { Component } from '@angular/core';
class ClaseElemento{

  private nombre: string;
  private icono: string;
  private enlace: string;
  constructor(nombre: string, icono: string, enlace: string) {
    this.nombre = nombre;
    this.icono = icono;
    this.enlace = enlace;
  }


  public getEnlace(): string{
    return this.enlace;
  }
  public setEnlace(value: string){
    this.enlace = value;
  }
  public getIcono(): string{
    return this.icono;
  }
  public setIcono(value: string) {
    this.icono = value;
  }
  public getNombre(): string{
    return this.nombre;
  }
  public setNombre(value: string) {
    this.nombre = value;
  }


}





// type TElemento = {
//   nombre: string;
//   icono: string;
//   enlace: string;


// };
// interface IElemento{
//   nombre: string;
//   icono: string;
//   enlace: string;

// }
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // valoresLista: IElemento[] = [
  //   { nombre: 'nombre1', icono: 'alarm-outline', enlace: '/tab1' },
  //   { nombre: 'nombre2', icono: 'alarm-outline', enlace: '/tab2' },
  //   { nombre: 'nombre3', icono: 'alarm-outline', enlace: '/tab3' }
  // ];
  // peso: number;
  // altura: number;
  // imc: number;
  listaObjetos: ClaseElemento[] = [
    new ClaseElemento('nombre1', 'alarm-outline', '/tabs/tab1'),
    new ClaseElemento('nombre2', 'alarm-outline', '/tabs/tab2'),
    new ClaseElemento('nombre3', 'alarm-outline', '/tabs/tab3')

  ];

  constructor(public gestionSucesos: GestionSucesosService) {



   }

//   onClick() {
//     this.imc = this.peso * this.altura;
//     console.log(this.imc);
// }
}
