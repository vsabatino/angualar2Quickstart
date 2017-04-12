import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }  from './app.component';
import { RubricaComponent }  from './rubrica.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, RubricaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
