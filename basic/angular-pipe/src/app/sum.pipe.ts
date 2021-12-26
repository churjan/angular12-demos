import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
})
export class SumPipe implements PipeTransform {
  transform(value: number, a: number, b: number): number {
    return value + a + b;
  }
}
