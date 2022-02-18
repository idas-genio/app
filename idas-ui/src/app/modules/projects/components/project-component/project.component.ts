import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import {
  AlertifyService,
  AuthenticationService,
  FileAttachmentService,
  LookupValue,
  LookupValueService,
  Project,
  ProjectAssignment,
  Task,
} from 'app/shared/app-shared.module';
import { ProjectAssignService } from '../../services/project-assign-service/project-assign.service';
import { ProjectCloneCopyService } from '../../services/project-clone-copy-service/project-clone-copy.service';
import { ProjectCommentService } from '../../services/project-comment-service/project-comment.service';
import { ProjectCreateSubService } from '../../services/project-create-sub-service/project-create-sub.service';
import { ProjectReviewService } from '../../services/project-review-service/project-review.service';
import { ProjectConfiguration } from '../../services/project-service/project-configuration';
import { ProjectService } from '../../services/project-service/project.service';
import { ProjectWorkLogService } from '../../services/project-worklog-service/project-worklog.service';
import { ProjectAssignmentsService } from '../dialog-project-assignment/services/project-assignments.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    ProjectService,
    ProjectAssignmentsService,
    FileAttachmentService,
  ],
})
export class ProjectComponent extends PageComponent implements OnInit {
  projectId?: number;
  project: Project;
  projectAssignees: any[] = [];
  lookupValues: LookupValue[] = [];
  statuses: LookupValue[] = [];
  priorities: LookupValue[] = [];
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public projectService: ProjectService,
    public projectCommentService: ProjectCommentService,
    public projectWorkLogService: ProjectWorkLogService,
    public projectAssignService: ProjectAssignService,
    public projectCreateSubService: ProjectCreateSubService,
    public projectCloneCopyService: ProjectCloneCopyService,
    public projectReviewService: ProjectReviewService,
    public fileAttachmentService: FileAttachmentService,
    private activatedRoute: ActivatedRoute
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.entityName = ProjectConfiguration.identifier;
    this.dataSourceColumns = ProjectConfiguration.dataColumns;
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.activatedRoute.params.subscribe((params) => {
      this.projectId = params.id;
    });
  }
  ngOnInit() {
    this.referenceValueService.projectService
      .getAll<Project>()
      .toPromise()
      .then((projects) => {
        // 1. Get this.project
        this.project = projects?.find((p) => p?._id === this.projectId);
        // 2. Get this.project?.ProjectAssignees
        this.projectAssignService.getAll<ProjectAssignment>().toPromise().then((projectAssignees) => {
          this.project.ProjectAssignees = projectAssignees.filter((pa) => pa?.ProjectId === this.project?._id);
        });
        // 3. Get this.project
        this.project.LinkedProjects = projects?.filter((p) => p?.ParentProjectId === this.projectId);
        // 4. Get this.project?.Tasks
        this.referenceValueService.taskService
          .getAll<Task>()
          .toPromise()
          .then((tasks) => {
            this.project.Tasks = tasks?.filter(
              (t) => t?.ProjectId === this.projectId
            );
          });
      });
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        // Get (Set) Status / Priority dropdown value(s)
        this.statuses = lookupValues.filter(
          (value) => value.LookupCategory.Name === 'Status'
        );
        this.priorities = lookupValues.filter(
          (value) => value.LookupCategory.Name === 'Priority'
        );
      });
  }
}
