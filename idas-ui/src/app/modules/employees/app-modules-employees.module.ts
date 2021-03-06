import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModulesSharedModule } from '../_shared/app-modules-shared.module';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { EmployeeConfiguration } from './services/employee-configuration';
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './services/employees.service';
import { EmployeeComponent } from './components/employee/employee.component';

export { EmployeeConfiguration } from './services/employee-configuration';
export { EmployeesComponent } from './employees.component';
export { EmployeeComponent } from './components/employee/employee.component';

export { EmployeesService } from './services/employees.service';

@NgModule({
  imports: [
    CommonModule,
    AppModulesSharedModule,
    AppSharedModule
  ],
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  exports: [
    EmployeesComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class AppModulesEmployeesModule { }
