import {
    Component,
    OnInit
} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
               selector   : 'app-header',
               templateUrl: './header.component.html',
               styleUrls  : ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {

    constructor(public translate: TranslateService) {
        this.currentLang = localStorage.getItem('currentLang') || 'en';
        this.translate.use(this.currentLang);
        document.querySelector('html')
                .setAttribute('lang',
                              this.currentLang);
    }

    currentLang: string;

    ngOnInit(): void {
    }

    changeCurrentLang(lang: string) {
        this.translate.use(lang);
        localStorage.setItem('currentLang',
                             lang);
        document.querySelector('html')
                .setAttribute('lang',
                              localStorage.getItem('currentLang'));
        this.currentLang = lang;
    }
}
