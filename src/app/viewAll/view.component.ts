import { GridOptions } from "ag-grid/main";
import {AllClientService} from '../allclient.service';
import { Component, HostListener, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
export class client{
    // address1:string;
    // address2:string;
    // beneficiaryDescription:string;
    birthDay:string;
    // cell:string;
    // city:string;
    // country:string;
    email:string;
    firstName:string;
    // ipName:string;
    // irUpper:string;
    // irLower:string;
    // itName:string;
    lastName: string;
    // pfpInvestment:string;
    phone:string;
    // placeOfBirth: string;
    // riskPreference:string;
    SSN:string;
    // stateProvince:string;
    // zipPostal:string;
    
  }
@Component({
    selector:'app-view',
    templateUrl:'./view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   
   public gridOptions: GridOptions;
   public rowData: client[];
   public columnDefs: any[];
    constructor(private cs: AllClientService){

        this.gridOptions = <GridOptions>{};
       // this.cs.getClients();
        this.columnDefs = this.createColumnDefs();
        this.rowData = this.createRowData();
        this.gridOptions={
            rowData: this.rowData,
            columnDefs: this.columnDefs,
            animateRows: true,
            rowSelection: 'single',
            //enableFilter:true,
            enableColResize: true,
            floatingFilter: true,
            context: { componentParent: this },
             onGridReady: function(params) {
                 console.log("grid is started");  
                 //this.api.setRowData();
             },
            overlayLoadingTemplate : "Loading..",
            overlayNoRowsTemplate : "No Records found"
        }
    }
    
    ngOnInit(){
        console.log("I before calling the service");
        
        
        console.log("I am inside the ngOnInit and loading the client");
        this.loadClients();
        
    }
    public loadClients():void{
        console.log("loading startedddd");
        //this.cs.getClients();
        
        //this.gridOptions.api.showLoadingOverlay();
        this.gridOptions.api.setRowData(this.createRowData());
        this.gridOptions.api.hideOverlay();
       }
    createRowData() {
        var rowData: client[]=[];
        //if(this.cs.client){
         ///   this.cs.client.forEach(client => {
                rowData.push({
                    // address1:client.address1,
                    // address2:client.address2,
                    // beneficiaryDescription:client.beneficiaryDescription,
                    firstName:"Akash",
                    lastName:"Kapil",
                    email:"ash1990su@gmail.com",
                    SSN:"123-345-4567",
                    phone:"8302271549",
                    birthDay:"21-07-1994"
                    // cell:client.cell,
                    // city:client.city,
                    // country:client.country,
                    // ipName:client.ipName,
                    // irUpper:client.irUpper,
                    // irLower:client.irLower,
                    // itName:client.itName,
                    // pfpInvestment:client.pfpInvestment,
                    // placeOfBirth:client.placeOfBirth,
                    // riskPreference:client.riskPreference,
                    // stateProvince:client.stateProvince,
                    // zipPostal:client.zipPostal
                });
            //});
        //}  

        return rowData;
    }

    createColumnDefs() {
        return [
            // {
            //     headerName: '', width: 60, cellRendererFramework: EditButtonComponent, suppressFilter: true
            // },
            {
                headerName: 'FirstName', width: 120, field: "firstName",  suppressFilter: true
            },
            {
                headerName: 'LastName', width: 120, field: "lastName", 
            },
            {
                headerName: 'Email', width: 57, field: "email",  suppressFilter: true
            },
            {
                headerName: 'SSN', width: 60, field: "SSN", suppressFilter: true
            },
            {
                headerName: 'phone', width: 100, field: "phone"
            },
            {
                headerName: 'birthday', width: 180, field: "birthDay"
            }
        ];
    }

}