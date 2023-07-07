import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [MatIconModule, MatBadgeModule, MatCardModule],
})
export class MaterialModule {}
