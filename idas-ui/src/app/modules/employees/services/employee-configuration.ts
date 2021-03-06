import { DataColumn } from 'app/shared/app-shared.module';

export class EmployeeConfiguration {
  public static identifier = 'employee';
  public static pageIcon = 'groups';
  public static pageRoute = 'employees';
  public static pageRouteTitle = 'My Employees';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Employees`;
  public static pageName = `Manage Employees`;
  public static tableHeading = 'Manage Employees';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'SalutationId', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'MiddleName', canShow: false, canSort: true, canGroup: false},
    {id: 5, name: 'Surname', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'EmployeeNumber', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'IdNumber', canShow: true, canSort: true, canGroup: false},
    {id: 8, name: 'BirthDate', canShow: false, canSort: true, canGroup: false},
    {id: 9, name: 'GenderId', canShow: true, canSort: true, canGroup: false},
    {id: 10, name: 'EmploymentTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 11, name: 'PositionId', canShow: true, canSort: true, canGroup: false},
    {id: 12, name: 'DepartmentId', canShow: true, canSort: true, canGroup: false},
    {id: 13, name: 'ManagerId', canShow: true, canSort: true, canGroup: false},
    {id: 14, name: 'DateHired', canShow: true, canSort: true, canGroup: false},
    {id: 15, name: 'IsTerminated', canShow: true, canSort: true, canGroup: false},
    {id: 16, name: 'DateTerminated', canShow: true, canSort: true, canGroup: false},
    {id: 17, name: 'IsActive', canShow: false, canSort: true, canGroup: false},
    /*
    {id: 18, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 19, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 20, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 21, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
