import {
    Component,
    OnInit
} from '@angular/core';
import {EmployeesService} from '../employees.service';
import {Employee} from '../employee.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
               selector   : 'app-add-employee',
               templateUrl: './add-employee.component.html',
               styleUrls  : ['./add-employee.component.scss']
           })
export class AddEmployeeComponent implements OnInit {

    constructor(
        private employee: EmployeesService,
        public translate: TranslateService
    ) { }

    // tslint:disable-next-line:triple-equals
    // @ts-ignore
    last = this.employee.employees.length === 0 ? 0 : this.employee.employees[this.employee.employees.length - 1].code;
    error;
    cur;

    ngOnInit(): void {
        this.translate.onLangChange.subscribe(lang => {this.cur = lang.lang; });
        console.log(this.last);
    }

    add = (frm) => {

        const form = frm.value;
        this.last++;
        if (!frm.valid) {
            this.error = 'form is invalid';
            return;
        }
        this.employee.addEmployee(new Employee(form.name,
                                               form.dept,
                                               this.last,
                                               form.birth,
                                               form.gender));
        this.error = null;
    }
}
