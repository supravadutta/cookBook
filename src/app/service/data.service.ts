import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apikey:string='d9c2e05db28c4f25baa480f2ce078f4e'

  constructor(
    private http:HttpClient

  ) { }
  getData(type:string){
   return this.http.get<any>(`https://api.spoonacular.com/recipes/search?apiKey=${this.apikey}&query=${type}`)
  }
  getDetails(id:string){
    return this.http.get<any>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6ddcd3080b124092a8401340ddf8cb20&includeNutrition=false`)
  }

  
}
