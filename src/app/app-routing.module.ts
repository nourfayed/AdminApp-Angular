import { NgModule } from '@angular/core';
import { Routes, RouterModule   } from '@angular/router';
import { UserDetailsComponent } from './componenets/user-details/user-details.component';
import { HomeComponent } from './componenets/home/home.component';
import { AddUserComponent } from './componenets/add-user/add-user.component';
import { NavBarComponent } from './componenets/nav-bar/nav-bar.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'home' , component: HomeComponent},
  { path:"userDetails/:username" , component: UserDetailsComponent},
  { path:"addUser" , component : AddUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[UserDetailsComponent,HomeComponent,AddUserComponent,NavBarComponent]
