import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
@Injectable()
export class AllClientService implements OnInit {
    public client;
    public showform;
     constructor (private http: HttpClient){
        
     }

     getClients(){
        this.showform=true;
        console.log("show form ki value: "+ this.showform);
         this.http.get('http://localhost:8080/CMSProject/jaxrs/clients/retrieve').subscribe(data=>{this.client = data["client"];
         this.showform=false;
         console.log("show form ki value: "+ this.showform);
         console.log('Home:',this.client);
        
     });
     
    }
    ngOnInit(){
        //this.getClients();
    }
};

