import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routesArray } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TimepipePipe } from './timepipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    routesArray,
    TimepipePipe 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
