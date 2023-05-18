import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isdev'
})
export class IsdevPipe implements PipeTransform {

  // Ajudou no desenvolvimento.
  devs: any = {
    "Luqueta": true,
    "Pepe": true,
    "Bini (o barba)": true,
    "Raul": true,
  };

  // Ajudou o projeto de alguma outra forma.
  contributors: any = {
    "Joik": true,
    "Carbelotti": true,
    "Arthur": true,
    "Richarlisson": true,
    "Vitão": true,
    "Arthas": true,
    "Mari": true,
    "Nico": true,
  }

  transform(value: string, key: string = 'dev'): boolean {
    if (key == 'dev') {
      return this.devs[value] != null;
    } else {
      return this.contributors[value] != null;
    }
  }

}
