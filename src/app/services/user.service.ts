import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Iuser } from '../userInterface'
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url:string = "/assets/data/users.json";
  //constructor(private http : HttpClient) { }

  public usersList=[
    {"id":0, "age":23 ,"name":"Nour","email":"nour@gmail.com"},
    {"id":1,"age":24 ,"name":"Lamis","email":"lamis@gmail.com"},
    {"id":2,"age":16 ,"name":"Alhassan","email":"alhassan@gmail.com"},
    {"id":3,"age":21 ,"name":"Nada","email":"nada@gmail.com"},
    {"id":4,"age":23 ,"name":"Hend","email":"hend@gmail.com"}
];
  // getUsers(): Observable<Iuser[]> {
  //   return this.http.get<Iuser[]>(this._url);
  // }
  getUsers(){
    return this.usersList;
  }

  appendUser( newAge ,newName , newEmail){
      var tmp={"id":-1,"age":0 ,"name":"none","email":"none"};
      tmp["id"]=this.usersList[this.usersList.length-1].id+1;
      tmp["age"]=newAge;
      tmp["name"]=newName;
      tmp["email"]=newEmail;
      this.usersList.push(tmp);      
  }
  deleteUser(email){
    for( var i = 0; i < this.usersList.length; i++){ 
      if ( this.usersList[i].email == email) {
         this.usersList.splice(i, 1);
         }
    }
  }
  editUser(user){
    for( var i = 0; i < this.usersList.length; i++){ 
      if ( this.usersList[i].id == user.id) {
         this.usersList[i].name=user.name;
         this.usersList[i].email=user.email;
         this.usersList[i].age=user.age;
         break;
         }
    }
    
  }
}
