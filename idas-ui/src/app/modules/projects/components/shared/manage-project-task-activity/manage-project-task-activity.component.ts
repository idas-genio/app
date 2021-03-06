import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/app-modules-shared.module';
import { BaseDataComponent } from 'app/modules/_shared/components/base-data-component/base-data.component';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';

@Component({
  selector: 'app-manage-project-task-activity',
  templateUrl: './manage-project-task-activity.component.html',
  styleUrls: ['./manage-project-task-activity.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
  ],
})
export class ManageProjectTaskActivityComponent
  extends BaseDataComponent
  implements OnInit
{
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
  }

  ngOnInit(): void {
    console.log(`this.entityName=${this.entityName}, this.entityId=${this.entityId}`);
    console.log(this.dataService);
    console.log(this.dataSourceColumns);
    console.log(this.selectedElement);
  }
}
