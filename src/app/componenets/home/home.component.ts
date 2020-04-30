import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usersList=[];
  constructor(private _userService : UserService, private router :Router) { }

  ngOnInit(): void {
    // this._userService.getUsers().subscribe(data => {this.usersList = data} );
    this.usersList=this._userService.getUsers();
   
  }

  onSelect(user){
    this.router.navigate([ 'userDetails', user.name])
  }
}
