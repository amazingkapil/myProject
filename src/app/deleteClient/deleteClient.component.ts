import { Component,OnInit} from '@angular/core';
import {Http  } from "@angular/http";
//import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

//@Injectable()

@Component({
    selector: 'app-deleteClient',
    templateUrl: './deleteClient.component.html',
    styleUrls: ['./deleteClient.component.css']
  })

  export class deleteComponent {
    public client;   
    delete:"";
    showload=true;
    constructor(private http: HttpClient){}
    deleteClient(ngForm){
      console.log(ngForm);
      console.log(this.delete);
      this.http.get('http://localhost:8080/CMSProject/jaxrs/clients/SSN/'+this.delete)
      .subscribe(data=>{
        if(data){
          this.client = data["client"];
        }
        else{
          this.showload=false;
          alert("SSN not Found");
        }
        
       }, (err)=>{
         console.log(err);
       });    
  }
  deleteFinalClient(){
      //call del method and return sucessfully deleted or not successful    
    this.http.get('http://localhost:8080/CMSProject/jaxrs/clients/delete/'+this.delete).subscribe(data=>{this.client = data["client"];
    
             console.log('Home:',this.client);
             this.showload=false;
             alert("Client Deleted");
      
     });    
}

  

  }
  
export class Client {
    zip: string;
    state: string;
    ssn: string;
    placeOfBirth: string;
phone: string;
    lastName: string;
    firstName: string;
    email:string;
    country:string;
    city:string;
    cell:string;
    beneficiary:string;
    address2:string;
    address1:string;
    riskPreference:number;
    itName:number;
    irUpper:number;
    irLower:number;
    ipName:number;
    clientID:number;
    birthday:Date;
}