import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubAppComponent } from './component/github-app/github-app.component';
import { UsersComponent } from './component/users/users.component';


const routes: Routes = [
  // defaulty loads the home page
  {path :'', component: GithubAppComponent},
  {path: 'users', component: UsersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routesArray = [GithubAppComponent, UsersComponent ];
