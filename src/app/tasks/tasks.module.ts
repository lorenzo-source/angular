import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent ],
    exports: [TaskComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule {}