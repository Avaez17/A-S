import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number
  employees!: Employee;

  constructor(private route: ActivatedRoute,
    public employeeservice: EmployeeService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employees = new Employee();
    this.employeeservice.getEmployeeById(this.id).subscribe(data=>{
      this.employees = data;
    })
  }

}
