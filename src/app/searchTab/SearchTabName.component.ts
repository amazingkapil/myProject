import { Component,OnInit} from '@angular/core';
import {Http  } from "@angular/http";
//import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

//@Injectable()

@Component({
    selector: 'app-searchName',
    templateUrl: './SearchTabName.component.html',
 
  })

  export class SearchTabNameComponent {
    public client;   
    searchName:"";

    constructor(private http: HttpClient){}
    searchClient(ngForm){
      console.log(ngForm);
      console.log(this.searchName);
      this.http.get('http://localhost:8080/CMSProject/jaxrs/clients/name/'+this.searchName).subscribe(data=>{this.client = data["client"];
      
               console.log('Home:',this.client);
        
    //   this.http.get('http://localhost:8080/CMSProject/jaxrs/clients/'+this.searchName).map(response => response.json())
    //   .subscribe(result => {  console.log('heybaby');
       });    
  } 
  //   updateClient(ngForm){
  //     console.log(ngForm);
  //     console.log(this.users);
      
  //     this.http.post('http://localhost:8080/CMSProject/jaxrs/clients/update', this.searchName).map(response => response.json())
  //     .subscribe(result => {  console.log('hey'+result);
  //     });    
  // }
  
    
  
    // onSelect(client: Client): void {
    //   this.selectedClient = client;
    // }
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