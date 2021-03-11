import {
    Component,
    OnInit
} from '@angular/core';
import {EmployeesService} from '../employees.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
               selector   : 'app-dashboard',
               templateUrl: './dashboard.component.html',
               styleUrls  : ['./dashboard.component.scss']
           })
export class DashboardComponent implements OnInit {

    constructor(
        private translate: TranslateService,
        private emp: EmployeesService
    ) { }

    origin;
    em;
    error;
    cur;

    ngOnInit(): void {
        this.translate.onLangChange.subscribe(lang => {this.cur = lang.lang; });
        this.em = this.emp.employees;

    }

    filterData = (
        frm
    ) => {
        if (!frm.valid) {
            this.error = 'form invalid';
            return;
        }
        const form = frm.value;
        this.em = this.emp.employees;
        this.em = this.em.filter((obj) => {
            return obj.department === form.dept &&
                   obj.name.search(form.name) > -1
                /*if you want search by full name uncomment next
                 comment and comment prev statement until &&*
                 /*obj.name === form.name*/;
        });
    }

}
