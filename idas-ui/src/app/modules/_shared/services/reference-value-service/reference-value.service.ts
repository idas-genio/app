import { Injectable } from '@angular/core';
import { ClientsService } from 'app/modules/clients/services/clients.service';
import { EmployeesService } from 'app/modules/employees/services/employees.service';
import { ProjectAssignmentsService } from 'app/modules/projects/components/dialog-project-assignment/services/project-assignments.service';
import { TaskAssignmentsService } from 'app/modules/projects/components/tasks/components/dialog-task-assignment/services/task-assignments.service';
import { TasksService } from 'app/modules/projects/components/tasks/services/tasks.service';
import { ProjectsService } from 'app/modules/projects/services/projects.service';
import { SuppliersService } from 'app/modules/suppliers/services/suppliers.service';
import { UsersService } from 'app/modules/user/services/users.service';
import {
  Client,
  DataColumn,
  Employee,
  GeneralUtils,
  Project,
  Supplier,
  Task,
  User,
} from 'app/shared/shared.module';
import { SharedModulesModuleConfiguration } from '../../shared-modules-configuration';

@Injectable({
  providedIn: 'root',
})
export class ReferenceValueService {
  constructor(
    public clientsService: ClientsService,
    public employeesService: EmployeesService,
    public projectsService: ProjectsService,
    public projectAssignmentsService: ProjectAssignmentsService,
    public tasksService: TasksService,
    public taskAssignmentsService: TaskAssignmentsService,
    public suppliersService: SuppliersService,
    public usersService: UsersService
  ) {}
  setFieldLookupValues(fieldName: string, field: DataColumn) {
    switch (fieldName) {
      case `Assignee`:
      case `PreviousAssignee`:
      case `User`:
        this.usersService.getAll<User>().subscribe((users) => {
          this.addFieldLookupValues(
            field,
            users.map((user) => this.mapValuesUser(user))
          );
        });
        break;
      case `Client`:
        this.clientsService.getAll<Client>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesClient(value))
          );
        });
        break;
      case `Employee`:
      case `Manager`:
        this.employeesService.getAll<Employee>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesEmployee(value))
          );
        });
        break;
      case `Project`:
        this.projectsService.getAll<Project>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesProject(value))
          );
        });
        break;
      case `Supplier`:
        this.suppliersService.getAll<Supplier>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesSupplier(value))
          );
        });
        break;
      case `Task`:
        this.tasksService.getAll<Task>().subscribe((values) => {
          this.addFieldLookupValues(
            field,
            values.map((value) => this.mapValuesTask(value))
          );
        });
        break;
      case `StartDateTime`:
      case `EndDateTime`:
        this.addFieldLookupValues(
          field,
          SharedModulesModuleConfiguration.scheduleTimes.map((time, index) => ({
            id: index,
            displayValue: time,
          }))
        );
        break;
    }
  }
  mapValuesClient(value: Client): any {
    const name = `${GeneralUtils.EmptyStringIfNull(
      value?.Name
    )} ${GeneralUtils.EmptyStringIfNull(
      value?.Surname || value?.CompanyName
    )}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: 'usertype',
      cssClass: 'client',
      // icon: 'reduce_capacity'
    };
  }
  mapValuesEmployee(value: Employee): any {
    const name = `${GeneralUtils.EmptyStringIfNull(
      value?.Name
    )} ${GeneralUtils.EmptyStringIfNull(value?.Surname)}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: 'usertype',
      cssClass: 'employee',
      // icon: 'groups'
    };
  }
  mapValuesProject(value: Project): any {
    const name = `${GeneralUtils.EmptyStringIfNull(value?.Name)}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: value?.ProjectType?.CssClassCategory,
      cssClass: value?.ProjectType?.CssClass,
      icon: value?.ProjectType?.Icon,
    };
  }
  mapValuesSupplier(value: Supplier): any {
    const name = `${GeneralUtils.EmptyStringIfNull(
      value?.Name
    )} ${GeneralUtils.EmptyStringIfNull(
      value?.Surname || value?.CompanyName
    )}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: 'usertype',
      cssClass: 'supplier',
      // icon: 'connect_without_contact'
    };
  }
  mapValuesTask(value: Task): any {
    const name = `${GeneralUtils.EmptyStringIfNull(value?.Name)}`.trim();
    return {
      id: value?._id,
      displayValue: name,
      title: name,
      cssClassCategory: value?.TaskType?.CssClassCategory,
      cssClass: value?.TaskType?.CssClass,
      icon: value?.TaskType?.Icon,
    };
  }
  mapValuesUser(user: User): any {
    return {
      id: user?._id,
      displayValue: user?.DisplayName,
      title:
        user?.UserType?.Value ||
        user?.UserType?.Value2 ||
        user?.UserType?.Value3 ||
        ``,
      cssClassCategory: user?.UserType?.CssClassCategory,
      cssClass: user?.UserType?.CssClass,
      icon: user?.UserType?.Icon,
      image: user?.Avatar || './assets/img/avatars/avatar-0.png',
    };
  }
  addFieldLookupValues(field: DataColumn, values: any[] = []) {
    field.lookupValues = [];
    values.forEach((value) => {
      field.lookupValues.push(value);
    });
  }
}