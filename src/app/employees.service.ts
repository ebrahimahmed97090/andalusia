import {Injectable} from '@angular/core';
import {Employee} from './employee.model';

@Injectable({
                providedIn: 'root'
            })
export class EmployeesService {

    constructor() {
        if (JSON.parse(localStorage.getItem('employees')) != null) {
            this.employees = JSON.parse(localStorage.getItem('employees'));
        }
    }


    employees = [];
    addEmployee = (employee: Employee): string => {
        this.employees.push(employee);
        localStorage.setItem('employees',
                             JSON.stringify(this.employees));


        return 'success';
    }

}

