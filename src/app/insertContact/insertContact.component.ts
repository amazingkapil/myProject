import { Component,OnInit} from '@angular/core';

import 'rxjs/add/operator/map';
import {Http  } from "@angular/http";

@Component({
    selector: 'contact-root',
    templateUrl: './insertContact.component.html',
    
  })

  export class InsertContactComponent {
    
    users={
        clientId:"",
        contactType:"",
        contactDate:"",
        contactDescription:"",
        firstName:"",  
    };

    searchName:"";

    constructor(private http: Http){}
    insertContact(ngForm){
      console.log(ngForm);
      console.log(this.users);
      
      this.http.post('http://localhost:8080/CMSProject/jaxrs/clients/insertcontact', this.users).map(response => response.json())
      .subscribe(result => {  console.log('hey'+result);
      });    
  } 
  
  }