import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-detail-data',
  templateUrl: './show-detail-data.component.html',
  styleUrls: ['./show-detail-data.component.css']
})
export class ShowDetailDataComponent implements OnInit {

  constructor() { }

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

}
