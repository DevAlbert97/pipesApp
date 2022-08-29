import { Color, Heroe } from './../../interfaces/sales';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass'],
})
export class OrderComponent {
  mayus: boolean = false;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.negro,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.verde,
    },
    {
      name: 'Flash',
      fly: false,
      color: Color.rojo,
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.verde
    }
  ];

  cambiarMayus() {
    this.mayus = !this.mayus;
  }

  cambiarOrden(value: string){
    this.orderBy = value;
  }
}
