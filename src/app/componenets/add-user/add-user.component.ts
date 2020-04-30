import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _userService : UserService , private router :Router) { }

  ngOnInit(): void {}

  onSubmit(f:NgForm){
    this._userService.appendUser(f.value.age,f.value.username,f.value.email);  
    this.router.navigate(['/home']);
  }
  

}
