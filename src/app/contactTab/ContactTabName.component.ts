import { Component,OnInit} from '@angular/core';
import {Http  } from "@angular/http";
//import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

//@Injectable()

@Component({
    selector: 'app-contactName',
    templateUrl: './ContactTabName.component.html',
 
  })

  export class ContactTabNameComponent {
    public contactHistory;   
    searchName:"";

    constructor(private http: HttpClient){}
    showForm=false;
    searchContact(ngForm){
      console.log(ngForm);
      console.log(this.searchName);
      this.http.get('http://localhost:8080/CMSProject/jaxrs/clients/contactname/'+this.searchName).subscribe(data=>{this.contactHistory = data["contactHistory"];this.showForm=true;
      
               console.log('Home:',this.contactHistory);
        
       });    
  } 
  }

  
export class ContactHistory {
    clientId:string;
    contactType:string;
    contactDate:string;
    contactDescription:string;
    firstName:string;

}