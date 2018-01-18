 

import {HomeComponent} from './home/home.component';
import {ViewComponent} from './viewAll/view.component';
import {SearchTabNameComponent} from './searchTab/SearchTabName.component';
import {SearchTabSSNComponent} from './searchTab/SearchTabSSN.component';
import {InsertComponent} from './insertClient/insert.component';
import {deleteComponent} from './deleteClient/deleteClient.component';
import {ContactTabNameComponent} from './contactTab/ContactTabName.component';
import {ContactTabIDComponent} from './contactTab/ContactTabID.component';
import {InsertContactComponent} from './insertContact/insertContact.component';
import {UpdateComponent} from './updateClient/update.component';
import {SearchTabPrefComponent} from './searchTab/SearchTabPref.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
export const Routes =[
    {
        path:'all',component: ViewComponent
    },
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'p', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
{
    path:'insert',component: InsertComponent
},
{
    path:'searchName',component: SearchTabNameComponent
},
{
    path:'searchSSN',component: SearchTabSSNComponent
},
{
    path:'contactName',component: ContactTabNameComponent
},
{
    path:'contactID',component: ContactTabIDComponent
},
{
    path:'insertContact',component: InsertContactComponent
},

{
    path:'delete',component: deleteComponent
},
{
    path:'update',component: UpdateComponent
},
{
    path:'searchPref',component: SearchTabPrefComponent
},


//  {
//         path:'**',component: HomeComponent
//     }


]
    /**{
        path:'**',component: HomeComponent
    }*/


