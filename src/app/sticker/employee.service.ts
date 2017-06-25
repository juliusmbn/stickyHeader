import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { Employees } from './mock-employee';

@Injectable()
export class EmployeeService {
    getEmployees(): Employee[] {
        return Employees;
    }
}