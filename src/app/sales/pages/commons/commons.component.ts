import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.sass']
})
export class CommonsComponent{

  nameLower: string = "carlos";
  nameUpper: string = "CARLOS";
  fullName: string = "CarLos AlBerto HurTAdo DOMingUez";
  date: Date = new Date();

}
