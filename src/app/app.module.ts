import {BrowserModule} from '@angular/platform-browser';
import {

    NgModule
} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './shared/header/header.component';
import {SideMenuComponent} from './shared/side-menu/side-menu.component';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {
    TranslateLoader,
    TranslateModule
} from '@ngx-translate/core';
import {
    HttpClient,
    HttpClientModule
} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
              declarations: [
                  AppComponent,
                  AddEmployeeComponent,
                  DashboardComponent,
                  HeaderComponent,
                  SideMenuComponent,

              ],
              imports     : [
                  BrowserModule,
                  HttpClientModule,
                  AppRoutingModule,
                  FormsModule,
                  ReactiveFormsModule,
                  TranslateModule.forRoot({
                                              defaultLanguage: 'en',
                                              loader         : {
                                                  provide   : TranslateLoader,
                                                  useFactory : createTranslateLoader,
                                                  deps      : [HttpClient]
                                              }
                                          })
              ],
              providers   : [],
              bootstrap   : [AppComponent]
          })
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http,
                                   '../assets/i18n/',
                                   '.json');
}
