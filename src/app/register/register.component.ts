import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
registerForm = this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private dataService:DataService,private router:Router, private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  register(){
    
   if(this.registerForm.valid){

      var uname = this.registerForm.value.uname;
      var acno =this.registerForm.value.acno;
      var pswd = this.registerForm.value.pswd;
  
    
  
     const result = this.dataService.register(uname,acno,pswd)
  
     if(result){
      alert("Successfully Registered...... ");
      this.router.navigateByUrl("");
     }
     else{
      alert("User Exists... Please Login")
     }

    }

    else{

      alert("Invalid Form")
    
    }
   
    
  }



}
