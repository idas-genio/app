import { DataColumn } from 'app/shared/app-shared.module';

export class UserInboxConfiguration {
  public static identifier = 'inbox-message';
  public static pageIcon = 'mail_outline';
  public static pageRoute = 'inbox';
  public static pageRouteTitle = 'My Inbox';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Inbox`;
  public static pageName = `Manage Inbox`;
  public static tableHeading = 'Manage Inbox';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
