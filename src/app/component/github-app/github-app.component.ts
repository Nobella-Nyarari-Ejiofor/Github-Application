import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
 
  username = "";
  
  storedUsers:any ={} ;

  constructor(private GithubService: GithubService) { }

  ngOnInit(): void {
    // this.getAccount()
  }


  // getAccount(){
  
  // }
  displayUserName(){
    this.GithubService.getUsers().subscribe((data) => {
      
      this.storedUsers = data
       console.log(this.storedUsers)
       
    })
  }
 
  // On click of the search button
  onClick(){

    this.GithubService.getUserName(this.username)
     this.displayUserName()
    //  console.log(this.storedUsers)
  }

};
