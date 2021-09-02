import { Client } from 'app/shared/domain-models/client/client';
import { Employee } from 'app/shared/domain-models/employee/employee';
import { Supplier } from 'app/shared/domain-models/supplier/supplier';
import { ContactDetail } from 'app/shared/domain-models/user/contact-detail';
import { User } from 'app/shared/domain-models/user/user';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
export class TestUsers {
  public static Root() {
    return {
      _id: 3,
      EmailAddress: 'root@genio.idas.co.za',
      UserTypeId: 741,
      IsAdmin: true,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-16.png',
      IsActive: true,
      CreatedBy: 1,
      DateCreated: '2021-07-27T16:53:59.067',
      ModifiedBy: 1,
      DateModified: '2021-07-27T16:54:00.107',
      SessionToken: GeneralUtils.generateRandomString(320),
      MenuItems: this.getMenuItems('Root'),
    } as unknown as User;
  }
  public static Admin() {
    return {
      _id: 1,
      EmailAddress: 'admin@genio.idas.co.za',
      UserTypeId: 737,
      IsAdmin: true,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-27.png',
      IsActive: true,
      CreatedBy: 1,
      DateCreated: '2021-07-27T16:53:59.067',
      ModifiedBy: 1,
      DateModified: '2021-07-27T16:54:00.107',
      SessionToken: GeneralUtils.generateRandomString(320),
      MenuItems: this.getMenuItems('Admin'),
    } as unknown as User;
  }
  public static General() {
    return {
      _id: 2,
      EmailAddress: 'general@genio.idas.co.za',
      UserTypeId: 740,
      IsAdmin: false,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-7.png',
      IsActive: true,
      CreatedBy: 1,
      DateCreated: '2021-07-27T16:53:59.067',
      ModifiedBy: 1,
      DateModified: '2021-07-27T16:54:00.107',
      SessionToken: GeneralUtils.generateRandomString(320),
      MenuItems: this.getMenuItems('General'),
    } as unknown as User;
  }
  public static ClientUser() {
    return {
      _id: 3,
      ClientId: 1,
      EmailAddress: 'info@closecorporation.co.za',
      UserTypeId: 737,
      IsAdmin: false,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-14.png',
      DisplayName: 'Close Corporation',
      IsActive: true,
      CreatedBy: 1,
      DateCreated: '2021-07-22T09:22:39.270',
      SessionToken: GeneralUtils.generateRandomString(320),
      Client: {
        _id: 1,
        SalutationId: 626,
        Name: 'Close',
        Surname: 'Corporation',
        CompanyName: 'Close Corporation',
        IndustryTypeId: 324,
        IdNumber: 7707288001087,
        RegistrationNumber: '2009/222222/23',
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.187',
      } as unknown as Client,
      ContactDetail: {
        _id: 2,
        ClientId: 1,
        RecipientsName: 'Close Corporation',
        EmailAddress: 'info@closecorporation.co.za',
        HomeTelephoneNumber: 27311234572,
        OfficeTelephoneNumber: 27311234572,
        Website: 'www.closecorporation.co.za',
        PreferredLanguageId: 501,
        UseEmailAddress: true,
        UseHomeTelephoneNumber: false,
        UseOfficeTelephoneNumber: false,
        UseMobileTelephoneNumber: false,
        UsePostalAddress: false,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.240',
      } as unknown as ContactDetail,
      MenuItems: this.getMenuItems('Client'),
    } as unknown as User;
  }
  public static EmployeeManager() {
    return {
      _id: 7,
      EmployeeId: 1,
      EmailAddress: 'Jane.Doe@genio.idas.co.za',
      UserTypeId: 738,
      IsAdmin: false,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-20.png',
      DisplayName: 'Jane Doe',
      IsActive: true,
      CreatedBy: 1,
      DateCreated: '2021-07-22T09:22:39.270',
      SessionToken: GeneralUtils.generateRandomString(320),
      Employee: {
        _id: 1,
        SalutationId: 631,
        Name: 'Jane',
        Surname: 'Doe',
        IdNumber: 9202204720082,
        BirthDate: '1992-02-20',
        GenderId: 262,
        EmploymentTypeId: 259,
        PositionId: 487,
        DepartmentId: 237,
        ManagerId: 5,
        DateHired: '2016-01-01T00:00:00',
        EmployeeNumber: 'C62302',
        IsTerminated: false,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.150',
      } as unknown as Employee,
      ContactDetail: {
        _id: 6,
        EmployeeId: 1,
        RecipientsName: 'Jane Doe',
        EmailAddress: 'Jane.Doe@genio.idas.co.za',
        HomeTelephoneNumber: 27311234567,
        OfficeTelephoneNumber: 27311234567,
        Website: 'www.genio.idas.co.za',
        PreferredLanguageId: 498,
        UseEmailAddress: true,
        UseHomeTelephoneNumber: false,
        UseOfficeTelephoneNumber: false,
        UseMobileTelephoneNumber: false,
        UsePostalAddress: false,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.240',
      } as unknown as ContactDetail,
      MenuItems: this.getMenuItems('Employee-Manager'),
    } as unknown as User;
  }
  public static EmployeeActive() {
    return {
      _id: 6,
      EmployeeId: 2,
      EmailAddress: 'Good.Job@genio.idas.co.za',
      UserTypeId: 738,
      IsAdmin: false,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-22.png',
      DisplayName: 'Good Job',
      IsActive: true,
      CreatedBy: 1,
      DateCreated: '2021-07-22T09:22:39.270',
      SessionToken: GeneralUtils.generateRandomString(320),
      Employee: {
        _id: 2,
        SalutationId: 626,
        Name: 'Good',
        Surname: 'Job',
        IdNumber: 9102127508084,
        BirthDate: '1991-02-12',
        GenderId: 263,
        EmploymentTypeId: 259,
        PositionId: 490,
        DepartmentId: 240,
        ManagerId: 3,
        DateHired: '2016-01-01T00:00:00',
        EmployeeNumber: 'E37518',
        IsTerminated: false,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.150',
      } as unknown as Employee,
      ContactDetail: {
        _id: 5,
        EmployeeId: 2,
        RecipientsName: 'Good Job',
        EmailAddress: 'Good.Job@genio.idas.co.za',
        HomeTelephoneNumber: 27311234569,
        OfficeTelephoneNumber: 27311234567,
        Website: 'www.genio.idas.co.za',
        PreferredLanguageId: 502,
        UseEmailAddress: true,
        UseHomeTelephoneNumber: false,
        UseOfficeTelephoneNumber: false,
        UseMobileTelephoneNumber: false,
        UsePostalAddress: false,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.240',
      } as unknown as ContactDetail,
      MenuItems: this.getMenuItems('Employee-Active'),
    } as unknown as User;
  }
  public static EmployeeInActive() {
    return {
      _id: 5,
      EmployeeId: 4,
      EmailAddress: 'Bad.Job@genio.idas.co.za',
      UserTypeId: 738,
      IsAdmin: false,
      IsLocked: true,
      Avatar: './assets/img/avatars/avatar-19.png',
      DisplayName: 'Bad Job',
      IsActive: false,
      CreatedBy: 1,
      DateCreated: '2021-07-22T09:22:39.270',
      SessionToken: GeneralUtils.generateRandomString(320),
      Employee: {
        _id: 4,
        SalutationId: 626,
        Name: 'Bad',
        Surname: 'Job',
        IdNumber: 9610136334084,
        BirthDate: '1996-10-13',
        GenderId: 263,
        EmploymentTypeId: 259,
        PositionId: 490,
        DepartmentId: 240,
        ManagerId: 5,
        DateHired: '2016-07-23T00:00:00',
        EmployeeNumber: 'E95590',
        IsTerminated: true,
        DateTerminated: '2018-02-15T00:00:00',
        IsActive: false,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.150',
      } as unknown as Employee,
      ContactDetail: {
        _id: 4,
        EmployeeId: 4,
        RecipientsName: 'Bad Job',
        EmailAddress: 'Bad.Job@genio.idas.co.za',
        HomeTelephoneNumber: 27311234570,
        OfficeTelephoneNumber: 27311234567,
        Website: 'www.genio.idas.co.za',
        PreferredLanguageId: 502,
        UseEmailAddress: true,
        UseHomeTelephoneNumber: false,
        UseOfficeTelephoneNumber: false,
        UseMobileTelephoneNumber: false,
        UsePostalAddress: false,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.240',
      } as unknown as ContactDetail,
      MenuItems: this.getMenuItems('Employee-Inactive'),
    } as unknown as User;
  }
  public static Supplier() {
    return {
      _id: 10,
      SupplierId: 1,
      EmailAddress: 'info@thandindabaattorneys.co.za',
      UserTypeId: 741,
      IsAdmin: false,
      IsLocked: false,
      Avatar: './assets/img/avatars/avatar-8.png',
      DisplayName: 'Thandi Ndaba',
      IsActive: true,
      CreatedBy: 1,
      DateCreated: '2021-07-22T09:22:39.270',
      Supplier: {
        _id: 1,
        SalutationId: 631,
        Name: 'Thandi',
        Surname: 'Ndaba',
        CompanyName: 'Thandi Ndaba Attorneys',
        IndustryTypeId: 284,
        RegistrationNumber: '2008/222222/23',
        VATNumber: 4820082222,
        BankId: 1,
        AccountNumber: 1234567890123,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.203',
      } as unknown as Supplier,
      ContactDetail: {
        _id: 1,
        SupplierId: 1,
        RecipientsName: 'Thandi Ndaba Attorneys',
        EmailAddress: 'info@thandindabaattorneys.co.za',
        HomeTelephoneNumber: 27311234573,
        OfficeTelephoneNumber: 27311234573,
        Website: 'www.thandindabaattorneys.co.za',
        PreferredLanguageId: 498,
        UseEmailAddress: true,
        UseHomeTelephoneNumber: true,
        UseOfficeTelephoneNumber: false,
        UseMobileTelephoneNumber: false,
        UsePostalAddress: false,
        IsActive: true,
        CreatedBy: 1,
        DateCreated: '2021-07-22T09:22:39.240',
      } as unknown as ContactDetail,
      MenuItems: this.getMenuItems('Supplier'),
    } as unknown as User;
  }
  public static getMenuItems(userType) {
    const menuItems = [
      {
        _id: 1,
        Title: 'Dashboard',
        Path: '/dashboard',
        Icon: 'dashboard',
        Component: 'DashboardComponent',
        Configuration: 'DashboardConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 2,
        Title: 'My Profile',
        Path: '/profile',
        Icon: 'account_circle',
        Component: 'UserProfileComponent',
        Configuration: 'UserProfileConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 3,
        Title: 'My Inbox',
        Path: '/inbox',
        Icon: 'contact_mail',
        Component: 'UserInboxComponent',
        Configuration: 'UserInboxConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 4,
        Title: 'My Schedule',
        Path: '/schedule',
        Icon: 'event',
        Component: 'UserMeetingCalendarComponent',
        Configuration: 'CalendarEventConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 5,
        Title: 'My Projects',
        Path: '/projects',
        Icon: 'auto_awesome_motion',
        Component: 'ProjectsComponent',
        Configuration: 'ProjectsConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 6,
        Title: 'My Tasks',
        Path: '/tasks',
        Icon: 'tune',
        Component: 'TasksComponent',
        Configuration: 'TasksConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 7,
        Title: 'My Employees',
        Path: '/employees',
        Icon: 'groups',
        Component: 'EmployeesComponent',
        Configuration: 'EmployeesConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 8,
        Title: 'Clients',
        Path: '/clients',
        Icon: 'stream',
        Component: 'ClientsComponent',
        Configuration: 'ClientsConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 9,
        Title: 'Suppliers',
        Path: '/suppliers',
        Icon: 'reduce_capacity',
        Component: 'SuppliersComponent',
        Configuration: 'SuppliersConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
      {
        _id: 10,
        Title: 'Users',
        Path: '/users',
        Icon: 'manage_accounts',
        Component: 'UsersComponent',
        Configuration: 'UsersConfiguration',
        IsActive: true,
        CreatedBy: 3,
        DateCreated: '2021-07-27T16:54:00.130',
      },
    ];
    switch (GeneralUtils.toLocalLowerCaseWithTrim(userType || ``)) {
      case 'client':
      case 'employee-active':
      case 'supplier':
        return menuItems.filter((menuItem) =>
          [
            'Dashboard',
            'My Profile',
            'My Inbox',
            'My Schedule',
            'My Projects',
            'My Tasks',
          ].includes(menuItem.Title)
        );
      case 'admin':
      case 'employee-manager':
      case 'root':
        return menuItems;
      default:
        return menuItems.filter((menuItem) =>
          ['Dashboard', 'My Profile'].includes(menuItem.Title)
        );
    }
  }
}