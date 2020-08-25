import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModuleModule } from './modules/material-module.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListOfMeasurmentsComponent } from './list-of-measurments/list-of-measurments.component';
import { DialogDataExampleDialog } from './dialogBox/dialog-data-example-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';



@NgModule({
  declarations: [AppComponent, FormComponent, ListOfMeasurmentsComponent, DialogDataExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModuleModule,
  ],
  providers: [HttpService,ListOfMeasurmentsComponent],
  bootstrap: [AppComponent],
  entryComponents:[DialogDataExampleDialog]
})
export class AppModule {}
