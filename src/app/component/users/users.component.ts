import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/github.service';
import { Repositories } from 'src/app/model/repositories';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  username = "";
  repos!: Repositories[];
  
  storedUsers:any ={} ;

  constructor(private GithubService: GithubService) { }

  ngOnInit(): void {
   
  }
    
  // A function to get the users data from the service using subscription to the services observable

  displayUserName(){
    
    this.GithubService. getUsers().subscribe((data) => {
      
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
  };

}
