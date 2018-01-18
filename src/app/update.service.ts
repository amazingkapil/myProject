import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http,Response  } from "@angular/http";

@Injectable()
export class UpdateService {
    url="";
     constructor (private http: Http){
     }

     updateService(searchName:string):Promise <any>{
         console.log("chupaa");
        this.url = 'http://localhost:8080/CMSProject/jaxrs/clients/update/'+searchName; 
        console.log(this.url); 
        return this.http.get(this.url).toPromise().then((response) => response.json());
    }
   
    
    
}


