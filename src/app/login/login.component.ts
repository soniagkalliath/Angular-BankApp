import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner";

  accno="Account Number Please";

  pswd="";

   accountDetails:any= {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
}
  constructor() { }

  ngOnInit(): void {
  }


  accnoChange(event:any){
    this.accno=event.target.value;
    console.log( this.accno);
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log( this.pswd);
  }

  login(){
   
    var acno =  this.accno;
    var pswd = this.pswd;
    let users = this.accountDetails;
    
    if (acno in users) {
        if (pswd == users[acno]["password"]) {
          alert("Login Successful");
        }
        else {
          alert("Incorrect Password");
        }
    }
    else {
      alert("Invalid Account");
    }
  }
}
