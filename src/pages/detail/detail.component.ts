import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService, Task } from 'src/services/backend.service';
import { DialogServiceProvider } from 'src/services/provider/dialog.service.provider';

@Component({
  selector: 'app-page-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailPageComponent implements OnInit {

  task;
  users = this.backendService.users();
  constructor(private backendService: BackendService, 
              private route: ActivatedRoute,
              private dialogService: DialogServiceProvider) {

    const id = +this.route.snapshot.paramMap.get('id');
    if(id == null) return;
    this.task = backendService.task(id);
  }

  ngOnInit() {
  }

  save(item: Task){
    this.backendService.update(item.id, item).subscribe(res => {
      this.dialogService.showToast(`updated ${item.id} successfully.`)
    }, () => this.dialogService.showToast(`updated ${item.id} failed.`));
  }

}