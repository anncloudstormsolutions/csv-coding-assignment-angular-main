import { Component, OnInit } from '@angular/core';
import { BackendService, Task } from 'src/services/backend.service';
import { DialogServiceProvider } from 'src/services/provider/dialog.service.provider';

@Component({
  selector: 'app-page-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewPageComponent implements OnInit {

  users = this.backend.users();
  tasks = this.backend.tasks();
  constructor(private backend: BackendService, private dialogService: DialogServiceProvider) {
  }

  ngOnInit() {

  }

  updateAssignee(taskId, assigneeId){
    this.backend.update(taskId, {assigneeId}).subscribe(() => {
      this.dialogService.showToast(`changed assignee for ${taskId} successfully.`)
    }, () => this.dialogService.showToast(`changed assignee for ${taskId} failed.`));
  }

}