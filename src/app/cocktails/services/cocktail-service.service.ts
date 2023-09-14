import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  baseUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?f=a'
  constructor(private http: HttpClient) { }

  getCocktails(){
    return this.http.get(`${this.baseUrl}`);
  }
}
