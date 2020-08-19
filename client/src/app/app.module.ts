import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModuleModule} from './modules/material-module.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, BrowserAnimationsModule,FormsModule,  HttpClientModule, MaterialModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
