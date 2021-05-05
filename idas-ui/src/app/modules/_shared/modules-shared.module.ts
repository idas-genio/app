import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from 'app/shared/shared.module';

import { BaseComponent } from './components/base-component/base.component';
import { BaseDataViewComponent } from './components/data-view/base-data-view/base-data-view.component';
import { BaseDialogComponent } from './components/dialogs/base-dialog/base-dialog.component';
import { DialogCreateEditDataComponent } from './components/dialogs/dialog-create-edit-data/dialog-create-edit-data.component';
import { PageComponent } from './components/page/page.component';
import { DataViewTableSimpleComponent } from './components/data-view/data-view-table-simple/data-view-table-simple.component';

export { ModulesSharedConfiguration } from './modules-shared-configuration';

export { PageComponent } from './components/page/page.component';
export { DataViewTableSimpleComponent } from './components/data-view/data-view-table-simple/data-view-table-simple.component';
export { DialogCreateEditDataComponent } from './components/dialogs/dialog-create-edit-data/dialog-create-edit-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  declarations: [
    BaseComponent,
    BaseDataViewComponent,
    DataViewTableSimpleComponent,
    BaseDialogComponent,
    DialogCreateEditDataComponent,
    PageComponent
  ],
  entryComponents: [
    DialogCreateEditDataComponent
  ],
  exports: [
    DataViewTableSimpleComponent,
    DialogCreateEditDataComponent,
    PageComponent
  ]
})
export class ModulesSharedModule { }
