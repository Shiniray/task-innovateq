import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { UsersComponent } from './users/users.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [CommonModule, PageRoutingModule, SharedModule, DataTablesModule],
  declarations: [UsersComponent],
})
export class PagesModule {}
