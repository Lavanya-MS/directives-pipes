import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parametrizedCustom'
})
export class ParametrizedCustomPipe implements PipeTransform {

  transform(value: number,multiplier:number = 1): number {
    return value*multiplier;
  }

}
