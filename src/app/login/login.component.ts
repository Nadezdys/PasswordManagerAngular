import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() data:any;
  id:string
  username:string;
  email:string;
  password:string;

  DataList: any = [];

  showModal: boolean;
  loginForm: FormGroup;
  submitted = false;
  ActivatedLoginData: boolean;

  constructor(private formBuilder: FormBuilder ,private router: Router, private service:SharedService) { this.showModal = true;this.ActivatedLoginData=false; }

  show()
  {
    this.showModal = true;
  }
  hide()
  {
    this.showModal = false;
    this.router.navigateByUrl('/');
  }
  ngOnInit() {
    this.getLoginData();

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
}

get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.loginForm.controls.username.value);
  console.log(this.loginForm.controls.password.value);
  if(this.validatePassword()&&this.validateUsername()){
    if (this.loginForm.invalid) {
      alert("Chyba");
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
      this.router.navigateByUrl('/passworddata');
    }
  }else{
    alert("Nesprávné údaje");
  }   
}

getLoginData(){
  this.service.getLoginDataList().subscribe(data=>{
    console.log(data);
    this.DataList = data; 
  });
  console.log(this.DataList);
  this.DataList.forEach(e => {
    console.log(e.username);
    console.log(e.password);
  });
}
validateUsername():boolean{
  this.DataList.forEach(e => {
    if(e.username == this.loginForm.controls.username.value){
      //this.username = e.username;
      return true;
    }
  });
  return false;
}
validatePassword():boolean{
  this.DataList.forEach(e => {
    if(e.password == this.loginForm.controls.password.value){
      return true;
    }
  });
  return false;
}
}
