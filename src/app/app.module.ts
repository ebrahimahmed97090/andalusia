import {BrowserModule} from '@angular/platform-browser';
import {
    LOCALE_ID,
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
                  AppRoutingModule,
                  FormsModule,
                  ReactiveFormsModule
              ],
              providers   : [
                  {
                      provide : LOCALE_ID,
                      useValue: 'under-c-ar'
                  }
              ],
              bootstrap   : [AppComponent]
          })
export class AppModule {}
