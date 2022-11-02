import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';


const routes: Routes = [
 
  { path: '', redirectTo: '/task', pathMatch: 'full' },

  { path: 'task', component: TaskDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
    TaskDetailsComponent
];
