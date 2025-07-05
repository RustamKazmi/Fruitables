import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitItems {
  fruitItems$ : BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([])
  url = "http://localhost:3000/fruitItems"

  constructor(private http:HttpClient) { }

getFruitItems(): Observable<any[]> {
  return this.http.get<any[]>(`${this.url}`);
}
  getSingleProduct(id:any){
     return this.http.get(`${this.url}/${id}`)
  }
  

  
}
