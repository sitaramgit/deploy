import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostViewComponent } from './post-view/post-view.component'

@NgModule({
  declarations: [PostsComponent, PostViewComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
