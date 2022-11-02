import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';


const routes: Routes = [
  // {path:'',component:DepartmentComponent},
  // or
  { path: '', redirectTo: '/task', pathMatch: 'full' },

  { path: 'task', component: TaskDetailsComponent },
//   { 
//     path: 'departments/:id',
//      component: DepartmentDetailsComponent,
//      children:[
//        {path:"overview",component:DepartmentOverviewComponent},
//        {path:"contact",component:DepartmentContactComponent}
//      ]
//      },
//   { path: 'employees', component: EmployeeComponent },
//   { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
    TaskDetailsComponent
];
