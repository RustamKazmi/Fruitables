import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private http : HttpClient) {

   }
   
   user$ : BehaviorSubject<{}>= new BehaviorSubject<Object>({})

   url= "http://localhost:3000/User"
  
   getUserByUsername(username:string){
     return this.http.get(`${this.url}?username=${username}`)
  }
  
  
  getUserByCredentials(username: string, password: string) {
  return this.http.get(`${this.url}?username=${username}&password=${password}`);
}

   getUserByEmail(email:string){
     return this.http.get(`${this.url}?email=${email}`)
   }
   
   getUserByPassword(password:string){
     return this.http.get(`${this.url}?password=${password}`)
   }

   saveUser(data:any){
    return this.http.post(this.url , data)
   }
  updateUserCart(userId: string, updatedData: any) {
    return this.http.patch(`${this.url}/${userId}`, {cart:updatedData} );
  }

   

      
}
