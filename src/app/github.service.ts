import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username = "";

  constructor(private http:HttpClient) { }

  public getUsers():Observable<any>{
   
    return this.http.get<any>("https://api.github.com/users/"+this.username)
    
  }

  getUserName(username:string){
  //  this.username = "Nobella-Nyarari-Ejiofor"
   this.username = username ;
  }


  public getRepos(): Observable<any>{
    
    return this.http.get<any[]>(`https://api.github.com/users/${this.username}/repos`)

  }


}
