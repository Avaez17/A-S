import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},            //Navigation to the home page
  {path:'create-employee', component: CreateEmployeeComponent},     //Navigation to the create page
  {path:'update-employee/:id', component:UpdateEmployeeComponent},  //Navigation to the update page
  {path:'view-employee/:id', component:EmployeeDetailsComponent},   //Navigation to the view page
  {path:'', redirectTo:'employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
