import { Component,OnInit} from '@angular/core';
import {Http  } from "@angular/http";
//import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

//@Injectable()

@Component({
    selector: 'app-contactID',
    templateUrl: './ContactTabID.component.html',
 
  })

  export class ContactTabIDComponent {
    public contactHistory;   
    searchID:"";

    constructor(private http: HttpClient){}
    searchContact(ngForm){
      console.log(ngForm);
      console.log(this.searchID);
      this.http.get('http://localhost:8080/CMSProject/jaxrs/clients/contactid/'+this.searchID).subscribe(data=>{this.contactHistory = data["contactHistory"];
      
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