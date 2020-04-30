import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userWithDetails;
  public usersList=[];
  constructor(private _userService : UserService, private route : ActivatedRoute , private r :Router  ) { }

 
  ngOnInit(): void {
      let username = this.route.snapshot.paramMap.get('username');
    // this._userService.getUsers().subscribe(data=>{this.usersList=data;});
      this.usersList=this._userService.getUsers();
      this.userWithDetails={"id":-1,"age":0 ,"name":"not found","email":"not found"};
      for(let i=0;i< this.usersList.length ;i++){
        if(this.usersList[i].name == username ){
          this.userWithDetails= this.usersList[i];
          break; 
        }
      } 
  }
  DeleteUser(f){
    this._userService.deleteUser(f.value.email)
    this.r.navigate(['/home']);
  }
  EditUser(f){
    this.userWithDetails.name=f.value.username;
    this.userWithDetails.email=f.value.email;
    this.userWithDetails.age=f.value.age;
    this._userService.editUser(this.userWithDetails);  
    this.r.navigate(['/home']);
  }
  

}
