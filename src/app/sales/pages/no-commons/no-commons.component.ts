import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.sass']
})
export class NoCommonsComponent{
  // i18nSelect
  nombre: string = 'Karla';
  gener: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i12nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Karla', 'Victoria'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  changeGener(name: string){
    if(name=='Karla'){
      this.nombre='Carlos';
      this.gener='masculino';
    }
    if(name=='Carlos'){
      this.nombre = 'Karla';
      this.gener = 'femenino';
    }
  }
  changeNumber(){
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona= {
    nombre: 'Carlos',
    edad: '25',
    direccion: 'Cumpas, Sonora'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    },
  ];

  // Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    },3500);
  });

}
