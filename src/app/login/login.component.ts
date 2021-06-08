import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner";

  
  
loginForm = this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  
  constructor(private router:Router,private dataService:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
    login(){
   
   if(this.loginForm.valid){
    var acno =  this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    
    this.dataService.login(acno,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        localStorage.setItem("name",result.name);
        localStorage.setItem("acno",result.acno);
        this.router.navigateByUrl("dashboard");
       }
    },
    (result)=>{
      alert(result.error.message)
    })

   }
   else{
     alert("Invalid Form")
   }
  }


  register(){
    this.router.navigateByUrl("register");
  }
}
