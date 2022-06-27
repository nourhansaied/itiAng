import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe'
})
export class CustomePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} USD`;
  }

}
