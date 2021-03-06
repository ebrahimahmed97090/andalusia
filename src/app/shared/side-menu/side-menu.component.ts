import {
    Component,
    OnInit
} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
               selector   : 'app-side-menu',
               templateUrl: './side-menu.component.html',
               styleUrls  : ['./side-menu.component.scss']
           })
export class SideMenuComponent implements OnInit {

    constructor(private translate: TranslateService) { }

    cur;

    ngOnInit(): void {
        this.translate.onLangChange.subscribe(lang => {this.cur = lang.lang; });


    }
}
