import { Component, OnInit } from '@angular/core';

import {SharedService} from 'src/app/shared.service';
import { ToastserviceService } from 'src/app/toastservice.service'

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})

export class ShowDataComponent implements OnInit {

  constructor(private service:SharedService, private toastService : ToastserviceService) { }

  DataList: any = [];

  ModalTitle:string;
  ActivatedAddEditDataComp:boolean=false;
  ActivatedShowDataComp:boolean=false;
  data:any;

  ngOnInit(): void {
    this.refreshDataList();
  }

  addClick(){
    this.data={
      id:0,
      title:"",
      username:"",
      password:"",
      webpage:"",
      note:""
    }
    this.ModalTitle="Přidat nový záznam";
    this.ActivatedAddEditDataComp=true;
  }

  deleteClick(item){
    if(confirm("Chcete smazat tuto položku?")){
      this.service.deleteData(item.id).subscribe(data=>{
        alert(data.toString());
      });
      this.refreshDataList();
    }
  }

  closeClick(){
    this.ActivatedAddEditDataComp=false;
    this.refreshDataList();
  }

  editClick(item){
    this.data=item;
    this.ModalTitle="Upravit záznam";
    this.ActivatedAddEditDataComp=true;
  }

  showClick(item){
    this.data=item;
    this.ModalTitle="Záznam";
    this.ActivatedShowDataComp=true;
    //this.toastService.showInfo("Uživ.jméno: " + item.username , "Heslo: " + item.password);
  }

  refreshDataList(){
    this.service.getDataList().subscribe(data=>{
      this.DataList = data; 
    });
  }
}
