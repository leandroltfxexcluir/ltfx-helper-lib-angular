import { Injectable } from '@angular/core';

import { DateSeparator } from './shared/enums/date-separator.enum';
import { DirectionSort } from './shared/enums/direction-sort.enum';

@Injectable()
export class LtfxHelperService {

  constructor() { }

  private isSeparatorValid(separator: string): boolean {
    return Object.values(DateSeparator).includes(separator as DateSeparator);
  }

  private isDirectionValid(direction: string): boolean {
    return Object.values(DirectionSort).includes(direction as DirectionSort);
  }

  /**
   * Converte um objeto Date para o formato em string
   * @param date 
   * @param separator Separadores válidos: barra (/), hífen (-) ou ponto (.) 
   * @returns 
   */
  dateToString(date: Date, separator: string): string {

    if (this.isSeparatorValid(separator)) {
      const day: string = String(date.getDate());
      const month: string = String(date.getMonth() + 1);
      const year: string = String(date.getFullYear());
      return `${day}${separator}${month}${separator}${year}`;
    }

    throw new Error('Separator de data inválido');
  }

  /**
   * Converte uma data em string para o formato Date
   * @param date 
   * @returns 
   */
  stringToDate(date: string): Date {
    return new Date(date);
  }

  /**
   * Ordena uma lista de objetos a partir de algum dos campos
   * @param list 
   * @param criterion Campo do objeto que será utilizado como critério de ordenação. Deve ser um number ou string.
   * @param direction Direções válidas: 'crescent' e 'descending', se não informado será 'crescent'.
   * @returns 
   */ 
  sortListObjects(list: any[], criterion?: any, direction: string = 'crescent'): any[] {

    if (typeof list[0].criterion !== 'number' && typeof list[0].criterion !== 'string') {
      throw new Error('Tipo do campo critério inválido. Deve ser string ou number.');
    }

    if (this.isDirectionValid(direction)) {
      if (direction === DirectionSort.Crescente) {
        return list.sort((a, b) => typeof a[criterion] === 'string' ? a[criterion].localeCompare(b[criterion]) : a[criterion] - b[criterion]);
      }
      if (direction === DirectionSort.Decrescente) {
        return list.sort((a, b) => typeof b[criterion] === 'string' ? b[criterion].localeCompare(a[criterion]) : b[criterion] - a[criterion]);
      }
    }

    throw new Error('Direção de lista inválida.');
  }
}
