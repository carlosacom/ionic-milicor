import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonArray'
})
export class JsonArrayPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any[] {
    const response = [];
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const element = value[key];
        response.push({ index: key, value: element });
      }
    }
    return response;
  }

}
