import {
    Component,
    OnInit
} from '@angular/core';
import {EmployeesService} from '../employees.service';
import {Employee} from '../employee.model';

@Component({
               selector   : 'app-add-employee',
               templateUrl: './add-employee.component.html',
               styleUrls  : ['./add-employee.component.scss']
           })
export class AddEmployeeComponent implements OnInit {

    constructor(private employee: EmployeesService) { }

    // tslint:disable-next-line:triple-equals
    // @ts-ignore
    last = this.employee.employees.length === 0 ? 0 : this.employee.employees[this.employee.employees.length - 1].code;

    ngOnInit(): void {
        console.log(this.last);
    }

    add = (form) => {
        this.employee.addEmployee(new Employee(form.name,
                                               form.dept,
                                               this.last,
                                               form.birth,
                                               form.gender));
        this.last++;
    }
}
