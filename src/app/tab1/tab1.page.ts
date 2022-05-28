import { GestionSucesosService } from './../servicios/gestion-sucesos.service';
import { Component } from '@angular/core';
class ClaseElemento{

  private id: string;
  private source: string;
  private town: string;
  constructor(id: string, source: string, town: string) {
    this.id = id;
    this.source = source;
    this.town = town;
  }


  public getTown(): string{
    return this.town;
  }
  public setTown(value: string){
    this.town = value;
  }
  public getSource(): string{
    return this.source;
  }
  public setSource(value: string) {
    this.source = value;
  }
  public getId(): string{
    return this.id;
  }
  public setId(value: string) {
    this.id = value;
  }


}





// type TElemento = {
//   id: string;
//   source: string;
//   town: string;


// };
// interface IElemento{
//   id: string;
//   source: string;
//   town: string;

// }
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // valoresLista: IElemento[] = [
  //   { id: 'nombre1', source: 'alarm-outline', town: '/tab1' },
  //   { id: 'nombre2', source: 'alarm-outline', town: '/tab2' },
  //   { id: 'nombre3', source: 'alarm-outline', town: '/tab3' }
  // ];
  // peso: number;
  // altura: number;
  // imc: number;
  // listaObjetos: ClaseElemento[] = [
  //   new ClaseElemento('nombre1', 'alarm-outline', '/tabs/tab1'),
  //   new ClaseElemento('nombre2', 'alarm-outline', '/tabs/tab2'),
  //   new ClaseElemento('nombre3', 'alarm-outline', '/tabs/tab3')

  // ];

  constructor(public gestionSucesos: GestionSucesosService) {



   }

//   onClick() {
//     this.imc = this.peso * this.altura;
//     console.log(this.imc);
// }
}
