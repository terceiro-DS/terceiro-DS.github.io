import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isdev'
})
export class IsdevPipe implements PipeTransform {

  devs: any = {
    "Luqueta": true,
    "Pepe": true,
    "Bini (o barba)": true,
    "Raul": true,
  }

  transform(value: string): boolean {
    return this.devs[value] != null;
  }

}
