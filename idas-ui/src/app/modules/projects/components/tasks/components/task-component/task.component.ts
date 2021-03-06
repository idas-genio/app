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
  DateUtils,
  LookupValue,
  LookupValueService,
  Task,
  TaskComment,
} from 'app/shared/app-shared.module';
import { TaskAssignService } from '../../services/task-assign-service/task-assign-service';
import { TaskCloneCopyService } from '../../services/task-clone-copy-service/task-clone-copy.service';
import { TaskCommentService } from '../../services/task-comment-service/task-comment.service';
import { TaskCreateSubService } from '../../services/task-create-sub-service/task-create-sub.service';
import { TaskReviewService } from '../../services/task-review-service/task-review.service';
import { TaskConfiguration } from '../../services/task-service/task-configuration';
import { TaskService } from '../../services/task-service/task.service';
import { TaskWorklogService } from '../../services/task-work-log-service/task-worklog-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    TaskService,
    TaskCommentService,
    TaskWorklogService,
    TaskAssignService,
    TaskCreateSubService,
    TaskCloneCopyService,
    TaskReviewService,
  ],
})
export class TaskComponent extends PageComponent implements OnInit {
  taskId?: number;
  task: Task;
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
    public taskService: TaskService,
    public taskCommentService: TaskCommentService,
    public taskWorklogService: TaskWorklogService,
    public taskAssignService: TaskAssignService,
    public taskCreateSubService: TaskCreateSubService,
    public taskCloneCopyService: TaskCloneCopyService,
    public taskReviewService: TaskReviewService,
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
    this.entityName = TaskConfiguration.identifier;
    this.dataSourceColumns = TaskConfiguration.dataColumns;
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.activatedRoute.params.subscribe((params) => {
      this.taskId = params.id;
    });
  }
  ngOnInit() {
    this.referenceValueService.taskService
      .getAll<Task>()
      .toPromise()
      .then((tasks) => {
        // 1. Get this.task
        this.task = tasks.find((t) => t?._id === this.taskId);
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
  timeElapsedComment(comment: TaskComment) {
    return DateUtils.timeAgo(DateUtils.add(new Date(comment?.DateCreated), `hour`, -2));
  }
}
