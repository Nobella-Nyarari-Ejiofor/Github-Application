import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';
import { User } from 'src/app/model/user';
import { Repositories } from 'src/app/model/repositories';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
 
  username = "";
  repos!: Repositories[];
  
  storedUsers:any ={} ;

  constructor(private GithubService: GithubService) { }

  ngOnInit(): void {
    this.initialProfile()
  }


  // getAccount(){
  
  // }
  initialProfile(){
    this.username = "Nobella-Nyarari-Ejiofor";
    this.displayUserName();
  
  }

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
    this.reposGotten()
  }
 //Function tho get a users repository details
  reposGotten(){
    this.GithubService.getRepos().subscribe((data) => {
        this.repos = data ;
        console.log(this.repos)
    })
  }


};
