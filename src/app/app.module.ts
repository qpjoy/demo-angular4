import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { Product1Component } from './product1/product1.component';
import {ProductService} from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import {LoggerService} from './shared/logger.service';
import {AnotherProductService} from './shared/product2.service';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{
      provide: ProductService,
      useFactory: (logger: LoggerService, appConfig) => {
          // const logger = new LoggerService();
          // const dev = Math.random() > 0.5;
          if (appConfig.isDev) {
              return new ProductService(logger);
          }else {
              return new AnotherProductService(logger);
          }
      },
      deps: [LoggerService, 'APP_CONFIG']
  },
      // ProductService
      LoggerService, {
        // provide: 'ID_DEV_ENV', useValue: false
        provide: 'APP_CONFIG', useValue: { isDev: false }
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
