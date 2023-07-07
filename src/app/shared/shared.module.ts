import { SidebarComponent } from './theme/sidebar/sidebar.component';
import { HeaderComponent } from './theme/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, HttpClientModule],
  declarations: [HeaderComponent, SidebarComponent, PageHeaderComponent],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MaterialModule,
    PageHeaderComponent,
  ],
})
export class SharedModule {}
