import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/shared-modules.module';
import {
  AlertifyService,
  AuthenticationService,
  FileAttachment,
  FileAttachmentService,
  LookupValue,
  LookupValueService,
  Project,
  ProjectAssignment,
  Task,
  User,
} from 'app/shared/shared.module';
import { ProjectsConfiguration } from '../../projects-configuration';
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
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public projectAssignmentsService: ProjectAssignmentsService,
    public fileAttachmentService: FileAttachmentService,
    private activatedRoute: ActivatedRoute
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.entityName = ProjectsConfiguration.identifier;
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.activatedRoute.params.subscribe((params) => {
      this.projectId = params.id;
    });
  }
  ngOnInit() {
    this.referenceValueService.usersService
      .getAll<User>()
      .toPromise()
      .then((users) => {
        this.lookupValueService
          .getAll<LookupValue>()
          .toPromise()
          .then((lookupValues) => {
            // Get (Set) - Current project
            this.referenceValueService.projectsService
              .getFirstById<Project>(this.projectId)
              .toPromise()
              .then((project) => {
                // Get (Set) - Assignee(s) for the current project
                this.projectAssignmentsService.getBy<ProjectAssignment>({ProjectId: project?._id}).toPromise().then(projectAssignees => {
                  projectAssignees.forEach(projectAssignee => {
                    this.setProjectAssignee(users, projectAssignee);
                    this.setProjectAssigneeLookups(lookupValues, projectAssignee);
                  });
                  project.ProjectAssignees = projectAssignees;
                });
                // Get (Set) - Parent Project for the current project
                this.referenceValueService.projectsService
                  .getFirstById<Project>(project?.ParentProjectId)
                  .toPromise()
                  .then((parentProject) => {
                    this.setProjectLookups(lookupValues, parentProject);
                    this.setCreatedModifiedUser(users, parentProject);
                    project.ParentProject = parentProject;
                  });
                // Get (Set) - Child / Linked Project(s) for the current project
                this.referenceValueService.projectsService
                  .getBy<Project>({ ParentProjectId: project?._id })
                  .toPromise()
                  .then((linkedProjects) => {
                    linkedProjects.forEach((linkedProject) => {
                      this.setProjectLookups(lookupValues, linkedProject);
                      this.setCreatedModifiedUser(users, linkedProject);
                    });
                    project.LinkedProjects = linkedProjects;
                  });
                // Get (Set) - Task(s) for the current project
                this.referenceValueService.tasksService
                  .getBy<Task>({ ProjectId: project?._id })
                  .toPromise()
                  .then((tasks) => {
                    tasks.forEach((task) => {
                      this.setTaskAssignee(users, task);
                      this.setTaskLookups(lookupValues, task);
                      this.setCreatedModifiedUser(users, task);
                    });
                    project.Tasks = tasks;
                  });
                // Get (Set) - FileAttachment(s) for the current project
                this.fileAttachmentService
                  .getBy<FileAttachment>({ ProjectId: project?._id })
                  .toPromise()
                  .then((files) => {
                    files.forEach((file) => {
                      this.setCreatedModifiedUser(users, file);
                    });
                    project.Files = files;
                  });
                this.setProjectLookups(lookupValues, project);
                this.setCreatedModifiedUser(users, project);
                this.project = project;
              });
            // Get (Set) Status / Priority dropdown value(s)
            this.statuses = lookupValues.filter(
              (value) => value.LookupCategory.Name === 'Status'
            );
            this.priorities = lookupValues.filter(
              (value) => value.LookupCategory.Name === 'Priority'
            );
          });
      });
  }
  setProjectAssignee(users: User[], projectAssignee: ProjectAssignment) {
    projectAssignee.Assignee = users.find((user) => user._id === projectAssignee?.AssigneeId);
    projectAssignee.PreviousAssignee = users.find((user) => user._id === projectAssignee?.PreviousAssigneeId);
  }
  setProjectAssigneeLookups(lookupValues: LookupValue[], projectAssignee: ProjectAssignment) {
    projectAssignee.Assignee.UserType = lookupValues.find(
      (lookupValue) => lookupValue._id === projectAssignee?.Assignee?.UserTypeId
    );
  }
  setCreatedModifiedUser(users: User[], value: any) {
    value.createdBy = users.find((user) => user._id === value?.CreatedBy);
    value.modifiedBy = users.find((user) => user._id === value?.ModifiedBy);
  }
  setProjectLookups(lookupValues: LookupValue[], project: Project) {
    project.ProjectType = lookupValues.find(
      (lookupValue) => lookupValue._id === project?.ProjectTypeId
    );
    project.Priority = lookupValues.find(
      (lookupValue) => lookupValue._id === project?.PriorityId
    );
    project.Status = lookupValues.find(
      (lookupValue) => lookupValue._id === project?.StatusId
    );
  }
  setTaskAssignee(users: User[], task: Task) {
    task.Assignee = users.find((user) => user._id === task?.AssigneeId);
  }
  setTaskLookups(lookupValues: LookupValue[], task: Task) {
    task.TaskType = lookupValues.find(
      (lookupValue) => lookupValue._id === task?.TaskTypeId
    );
    task.Priority = lookupValues.find(
      (lookupValue) => lookupValue._id === task?.PriorityId
    );
    task.Status = lookupValues.find(
      (lookupValue) => lookupValue._id === task?.StatusId
    );
  }
}