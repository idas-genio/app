import { TestUsers } from '@test-data/@test-users/test-users';
import { environment } from 'environments/environment';
import { User } from '../domain-models/user/user';
import { GeneralUtils } from './general-utils';
export class AuthenticationUtils {
  public static hasUserSessionToken(user: User) {
    // tslint:disable-next-line:max-line-length
    return (
      user &&
      !(
        user.SessionToken === null ||
        user.SessionToken === undefined ||
        user.SessionToken.trim().length === 0
      )
    );
  }
  public static getTestUser() {
    switch (GeneralUtils.toLocalLowerCaseWithTrim(environment.testAs || 'root')) {
      case 'root':
        return TestUsers.Root();
      case 'admin':
        return TestUsers.Admin();
      case 'employee-manager':
        return TestUsers.EmployeeManager();
      case 'employee-inactive':
        return TestUsers.EmployeeInActive();
      case 'employee-active':
        return TestUsers.EmployeeActive();
      case 'client':
        return TestUsers.ClientUser();
      case 'supplier':
        return TestUsers.Supplier();
      case 'general':
      default:
        return TestUsers.General();
    }
  }

}
