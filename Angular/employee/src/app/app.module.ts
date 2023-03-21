import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,    //List of employee component
    CreateEmployeeComponent,  //Creation of employee component
    UpdateEmployeeComponent,  //Updating the employee component
    EmployeeDetailsComponent  //View the employee component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // it is use to create a connection b/w angular and spring boot.
    FormsModule         // this module is used when the data got to be update.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
