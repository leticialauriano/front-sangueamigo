import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    
    VexModule,
    CustomLayoutModule,

  
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
