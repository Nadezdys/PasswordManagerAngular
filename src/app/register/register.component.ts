import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() data:any;
  id:string
  username:string;
  email:string;
  password:string;

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ,private router: Router, private service:SharedService) { this.showModal = true;}

  show()
  {
    this.showModal = true;
  }
  hide()
  {
    this.showModal = false;
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    this.username = this.registerForm.controls.username.value;
    this.email = this.registerForm.controls.email.value;
    this.password = this.registerForm.controls.password.value;

    if (this.registerForm.invalid) {
      alert("Chyba");
        return;
    }
    if(this.submitted)
    {
      var val = {id:this.id,username:this.username,email:this.email,password:this.password}
      this.service.addLoginData(val).subscribe(res=>{
        alert(res.toString());
      });
      this.showModal = false;
      this.router.navigateByUrl('/');
    }
   
}

}
