import { UsersComponent } from './users/users.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'blogs',
    component: BlogsComponent,
    data: {
      title: 'Blogs',
    },
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
