import {Component, OnInit} from '@angular/core';
import {CocktailService} from "../../services/cocktail-service.service";
import {Cocktail} from "../../model/cocktail.entity";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  title = 'Cocktails';

  displayedColumns: string []=['name','instruction','date','glass'];
  cocktails: Array<Cocktail>=[];

  constructor(private cocktailApi: CocktailService) {
  }

  searchCocktails(){
    console.log('Cocktails data is');
    this.cocktailApi.getCocktails().subscribe((data: any) => {
      this.cocktails = data['drinks'];
      console.log(this.cocktails);
    })

  }

  ngOnInit(): void {
    this.searchCocktails();
  }
}
