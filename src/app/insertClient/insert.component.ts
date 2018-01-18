import { Component,OnInit} from '@angular/core';
import { Http ,Headers} from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-root',
    templateUrl: './insert.component.html',
    
  })

  export class InsertComponent {
    
    users={
      address1:"H no.28",
      address2:" DakotaCity",
      beneficiaryDescription:"Parents",
      birthDay:"2",
      cell:"(999) 999 9999",
      city:"DakotaCity",
      country:"India",
      email:"xyz@gmail.com",
      firstName:"",
      ipName:"",
      irUpper:"400000",
      irLower:"100000",
      itName:"",
      lastName: "Kohli",
      pfpInvestment:"",
      phone:"(999) 999 9999",
      placeOfBirth: "Delhi",
      riskPreference:"",
      SSN:"",
      stateProvince:"",
      zipPostal:"600028"
      
    };
   
    headers = new Headers({ 'Content-Type': 'application/json' });
    searchName:"";
    constructor(private http: Http){}
    insertClient(ngForm){
      console.log(ngForm);
      console.log(this.users+"chuppppppphojaa");
      const options = {
        headers: new Headers({ 'Content-Type': 'application/json' })
      };
     
      this.http.post('http://localhost:8080/CMSProject/jaxrs/clients/insert',this.users,options).map(response => response.json())
      .subscribe(result => {  console.log('hey'+result);
      alert("Client Successfully Added.");
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