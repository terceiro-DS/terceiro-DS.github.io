import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  img: any;

  @Input()
  name = "n/a"

  @Input()
  quote = "Nada..."

  @Input()
  nickname = "Apelido aqui!";

  @Input()
  descricao: string = "Nada aqui!";

  @Input()
  github: string = "github.com";

  @Input()
  instagram: string = "instagram.com";

  @Input()
  linkedin: string = "linkedin.com";

  @Input()
  tccId?: number;

  @Input()
  customClass: any;

  maxLength = 32;

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  getMaxCharactersOfWithDots(str: string): string {
    return str.substring(0, this.maxLength - 3) + '...'
  }

  getMaxCharactersOf(str: string, n?: number | any): any {
    if (!str) {
      return;
    }
    if (n && n > 10) {
      return str;
    }
    if (str.length >= this.maxLength) {
      let splitSpaces = str.split(" ")
      const length = splitSpaces.length;
      function getLastestSplit(index: number): any {
        if (splitSpaces[index]) {
          if (splitSpaces[index].length > 2) {
            return index;
          }
          return getLastestSplit(index - 1);
        }
        return index;
      }
      let initialIndex = getLastestSplit(length - 1)
      splitSpaces[initialIndex] = splitSpaces[initialIndex].substring(0, 1) + "."
      str = splitSpaces.join(' ');
      n = n || 0;
      return this.getMaxCharactersOf(str, n + 1);
    }
    return str;
  }
}
