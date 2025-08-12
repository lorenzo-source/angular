import { Component, Input } from '@angular/core';

import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;
 
  private taskService: TasksService;

  constructor(tasksService: TasksService) { 
    this.taskService = tasksService;
  }
  

  get selectedUserTasks() {
  return this.taskService.getUserTasks(this.userId);
}


onStartAddTask(){
  this.isAddingTask = true;
}

onCloseAddTask(){
  this.isAddingTask = false;
}

}
