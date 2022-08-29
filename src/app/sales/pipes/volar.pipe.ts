import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volar'
})
export class VolarPipe implements PipeTransform {

  transform(value: boolean): string {
    return value?'Vuela':'No Vuela';
  }

}
