import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TitleCasePipe } from '@angular/common';
import {MyUppercasePipe}  from './form/myuppercase.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MyUppercasePipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
