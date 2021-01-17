import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-passworddata',
  templateUrl: './passworddata.component.html',
  styleUrls: ['./passworddata.component.css']
})
export class PassworddataComponent implements OnInit {

  @Input() data:string;

  Username:string;


  public browserRefresh: boolean;
  constructor(private router:Router) { this.Username = this.data; }

  ngOnInit(): void {
    this.browserRefresh = browserRefresh;
    if(this.browserRefresh == true){
      this.router.navigateByUrl("/login");
    }
  
  }

}
