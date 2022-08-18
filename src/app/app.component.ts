import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // title = 'pipesApp';
  name  : string = 'Carlos Hurtado';
  value : number = 1000;
  obj = {
    nombre: 'Carlos'
  }

  showName() {
    console.log(this.name); 
    console.log(this.value); 
    console.log(this.obj); 
  }
}
