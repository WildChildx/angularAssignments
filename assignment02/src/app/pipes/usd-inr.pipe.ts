import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {
  //here value is the first argument that we pass and ...args contains second arguments
  transform(value: number, ...args: unknown[]): unknown {
    return value*70;
  }
}
