import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Users } from './users';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsModule } from './posts/posts.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
