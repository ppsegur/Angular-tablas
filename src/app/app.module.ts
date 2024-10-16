import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,  
    MatTableModule,     
    BrowserAnimationsModule,
    TablaComponent,
    AppComponent,
  ],
  providers: [],

})
export class AppModule { }