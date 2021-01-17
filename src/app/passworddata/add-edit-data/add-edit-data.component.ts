import { Component, OnInit, Input } from '@angular/core';

import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.component.html',
  styleUrls: ['./add-edit-data.component.css']
})
export class AddEditDataComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() data:any;
  id:string;
  title:string;
  username:string;
  password:string;
  webpage:string;
  note:string;

  ngOnInit(): void {
    this.id = this.data.id;
    this.title = this.data.title;
    this.username = this.data.username;
    this.password = this.data.password;
    this.webpage = this.data.webpage;
    this.note = this.data.note;
  }

  addData(){
    if(this.title== "" || this.username == "" || this.password == "" || this.webpage == "" || this.note == ""){
      alert("Vyplňte prosím všechna pole.");
    }else{
      var val = {id:this.id,title:this.title,username:this.username,password:this.password,webpage:this.webpage,note:this.note}
      this.service.addData(val).subscribe(res=>{
        alert(res.toString());
      });
    }
    
  }

  updateData(){
    if(this.id == "" || this.title== "" || this.username == "" || this.password == "" || this.webpage == "" || this.note == ""){
      alert("Vyplňte prosím všechna pole.");
    }else{
      var val = {id:this.id,title:this.title,username:this.username,password:this.password,webpage:this.webpage,note:this.note}
      this.service.updateData(val).subscribe(res=>{
      alert(res.toString());
    });
    }
  }

}
