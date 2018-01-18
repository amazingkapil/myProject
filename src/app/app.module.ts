import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {UpdateService} from './update.service';
import {UpdateComponent} from './updateClient/update.component';
import {Routes} from './router';
import {SearchTabPrefComponent} from './searchTab/SearchTabPref.component';

import {AllClientService} from './allclient.service';

import {SearchTabNameComponent} from './searchTab/SearchTabName.component';
import {SearchTabSSNComponent} from './searchTab/SearchTabSSN.component';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './viewAll/view.component';
import {InsertComponent} from './insertClient/insert.component';
import { FormsModule }   from '@angular/forms';
import {deleteComponent} from './deleteClient/deleteClient.component';
import {InsertContactComponent} from './insertContact/insertContact.component';
import {ContactTabIDComponent} from './contactTab/ContactTabID.component';
import {ContactTabNameComponent} from './contactTab/ContactTabName.component';
// import { routing }        from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {AgGridModule} from "ag-grid-angular";
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import {AccordionModule} from 'primeng/components/accordion/accordion';
import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations';
import {TabModule} from 'angular-tabs-component';
@NgModule({
  declarations: [
   AppComponent,
   HomeComponent,
   SearchTabSSNComponent,
   SearchTabNameComponent,
   InsertComponent,
   ContactTabIDComponent,
   ContactTabNameComponent,
   InsertContactComponent,
   deleteComponent,
    UpdateComponent,
    SearchTabPrefComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ViewComponent
    

],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    TabModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  RouterModule.forRoot(Routes),//<-- routes
  AgGridModule.withComponents([
          ViewComponent
        ])
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    AllClientService,
    UpdateService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
],

  bootstrap: [AppComponent]
})
export class AppModule { }

