import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails:any= {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
}
  constructor() { }

  register(uname:any,acno:any,pswd:any){

    let user = this.accountDetails;

    if(acno in user){
      return false;
    }
    else{
      user[acno]={
        acno,
        username:uname,
        password:pswd,
        balance:0
      }
      return true;
     }

  }

  login(acno:any,pswd:any){
    let users = this.accountDetails;

    if (acno in users) {
        if (pswd == users[acno]["password"]) {
          return true;
         
        }
        else {
          alert("Incorrect Password");
          return false;
        }
    }
    else {
      alert("Invalid Account");
      return false;
    }
  }


}
