import { Component,OnInit} from '@angular/core';

import 'rxjs/add/operator/map';
import {Http,Headers  } from "@angular/http";
import {UpdateService  } from "../update.service";


export class client{
  address1:string;
  address2:string;
  beneficiaryDescription:string;
  birthDay:string;
  cell:string;
  city:string;
  country:string;
  email:string;
  firstName:string;
  ipName:string;
  irUpper:string;
  irLower:string;
  itName:string;
  lastName: string;
  pfpInvestment:string;
  phone:string;
  placeOfBirth: string;
  riskPreference:string;
  SSN:string;
  stateProvince:string;
  zipPostal:string;
  
}
@Component({
    selector: 'form-root',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
  })

  export class UpdateComponent {
    searchName="";

    url="";
    clientuser={
      address1:"",
      address2:"",
      beneficiaryDescription:"",
      birthDay:"",
      cell:"(999) 999 999",
      city:"",
      country:"",
      email:"abc@gmail.com",
      firstName:"",
      ipName:"",
      irUpper:"10000",
      irLower:"0",
      itName:"Mutual Funds",
      lastName: "",
      pfpInvestment:"1",
      phone:"(999) 999 9999",
      placeOfBirth: "",
      riskPreference:"0",
      SSN:"",
      stateProvince:"",
      zipPostal:""
    };
    constructor(private http: Http,private updateService:UpdateService){}
    showForm=false;
    showLoading=false;
    updateClient(ngForm){
      console.log(ngForm);
      this.showLoading=true;
      
      console.log(this.searchName); 
      console.log("chupaafyu");
      this.updateService.updateService(this.searchName).then(clientuser => { this.showForm=true;this.showLoading=false; this.clientuser = clientuser;});
      console.log("chupaa1");
      console.log( this.clientuser.firstName);                                                  
  }
  
 
  updaterealClient(ngForm){
    console.log(ngForm);
    console.log(this.clientuser.firstName);
    const options = {
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    this.http.post('http://localhost:8080/CMSProject/jaxrs/clients/updatereal', this.clientuser,options).map(response => response.json())
    .subscribe(result => {  console.log('hey'+result);alert("Client Successfully Updated.");
    });    
 }
    
 
  }