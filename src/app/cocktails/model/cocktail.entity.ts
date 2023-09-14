export class Cocktail {
  strDrink: string;
  strInstructions: string;
  dateModified: Date;
  strGlass: string;

  constructor() {
    this.strDrink = '';
    this.strInstructions = '';
    this.dateModified = new Date();
    this.strGlass = '';
  }
}
