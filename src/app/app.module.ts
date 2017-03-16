import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NewComponent} from './new.component';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { New2Component } from './new2/new2.component';
import {AccordionModule} from 'ng2-accordion';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdIconRegistry} from '@angular2-material/icon';



@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    FilterPipe,
    New2Component,
    Screen1Component,
    Screen2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
