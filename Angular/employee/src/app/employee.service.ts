import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseUrl ="http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }

  getEmployeelist(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`http://localhost:8080/api`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post<Object>(`http://localhost:8080/api`,employee);
  }

  getEmployeeById(id: number):Observable<Employee>{
    return this.httpClient.get<Employee>(`http://localhost:8080/api/${id}`);
  }

  updateEmployee(id:number, employee:Employee):Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/api/${id}`, employee);
  }

  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/api/${id}`);
  }
}
