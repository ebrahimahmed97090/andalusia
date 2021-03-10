import {
    Component,
    OnInit
} from '@angular/core';
import {EmployeesService} from '../employees.service';

@Component({
               selector   : 'app-dashboard',
               templateUrl: './dashboard.component.html',
               styleUrls  : ['./dashboard.component.scss']
           })
export class DashboardComponent implements OnInit {

    constructor(private emp: EmployeesService) { }

    origin;
    em;

    ngOnInit(): void {
        this.em = this.emp.employees;

    }

    filterData = (
        form
    ) => {
        this.em = this.emp.employees;
        this.em = this.em.filter((obj) => {
            return obj.department === form.dept &&
                   obj.name.search(form.name) > -1
                /*if you want search by full name uncomment next
                 comment and comment prev statement until &&*
                 /*obj.name === form.name*/;
        });
    };

}
