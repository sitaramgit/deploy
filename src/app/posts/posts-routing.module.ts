import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
{path:'post',component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
