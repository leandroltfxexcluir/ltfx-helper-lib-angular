import { Injectable } from '@angular/core';

import { DateSeparator } from './shared/enums/date-separator.enum';

@Injectable()
export class LtfxHelperService {

  constructor() { }

  private isSeparatorValid(separator: string): boolean {
    return Object.values(DateSeparator).includes(separator as DateSeparator);
  }

  /**
   * 
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

  stringToDate(date: string): Date {
    return new Date(date);
  }
}
