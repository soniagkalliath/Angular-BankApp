import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

user:any;
acno:any;
lDate : Date = new Date()

  constructor(private dataService:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }

  deposit(){
    var accno=this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;

    if(this.depositForm.valid){
     
      this.dataService.deposit(accno,pswd,amount)
        .subscribe((result:any)=>{
        if(result){
          alert(result.message)
         
         }},      
      (result:any)=>{
        alert(result.error.message)
      })
     
    }
    else{
      alert("Invalid Form")
    }
  }

  withdraw(){

    var accno=this.withdrawForm.value.acno;
    var pswd = this.withdrawForm.value.pswd;
    var amount = this.withdrawForm.value.amount;
 
    if(this.withdrawForm.valid){
     
      this.dataService.withdraw(accno,pswd,amount)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result:any)=>{
        alert(result.error.message)
      } )
   
      
    }
    else{
      alert("Invalid Form")
    }
   

 }

 onDelete(event:any){
this.dataService.deleteAccDetails(event)
.subscribe((result:any)=>{
  if(result){
    alert(result.message)
    this.router.navigateByUrl("")
  }
},
(result:any)=>{
  alert(result.error.message)
} )
 }


 onCancel(){
this.acno=""
 }

 deleteAcc(){
  this.acno=localStorage.getItem("acno")
 }

}
