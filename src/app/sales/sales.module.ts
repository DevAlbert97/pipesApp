import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Componentes de terceros
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
// Componentes Creados
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrderComponent } from './pages/order/order.component';
// Pipes Personalizados
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VolarPipe } from './pipes/volar.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    OrderComponent,
    MayusculasPipe,
    VolarPipe,
    OrdenarPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
