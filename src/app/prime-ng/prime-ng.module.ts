import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
