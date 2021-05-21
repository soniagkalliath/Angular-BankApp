import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

withdrawForm=this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

user = this.dataService.currentUser;

  constructor(private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){

    if(this.depositForm.valid){
      var accno=this.depositForm.value.acno;
      var pswd = this.depositForm.value.pswd;
      var amount = this.depositForm.value.amount;
  
      const result = this.dataService.deposit(accno,pswd,amount)
  
      if(result){
        alert ("The given amount "+amount+" credited... and New balance is: "+result);
      }
    }
    else{
      alert("Invalid Form")
    }
  }

  withdraw(){

    if(this.withdrawForm.valid){
      var accno=this.withdrawForm.value.acno;
      var pswd = this.withdrawForm.value.pswd;
      var amount = this.withdrawForm.value.amount;
   
      const result = this.dataService.withdraw(accno,pswd,amount)
   
      if(result){
        alert ("The given amount "+amount+" debited... and New balance is: "+result);
      }
    }
    else{
      alert("Invalid Form")
    }
   

 }

}
