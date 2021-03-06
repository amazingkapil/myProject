import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//  import {bootstrap} from '@angular/platform/browser';
//  import {FormComponent} from './general.component';


// bootstrap(FormComponent); 

import 'rxjs/add/operator/toPromise';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
