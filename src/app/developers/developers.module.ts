import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperCenterComponent } from './developer-center/developer-center.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeveloperCenterComponent,
    DeveloperListComponent,
    DeveloperDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DeveloperCenterComponent,
    DeveloperDetailsComponent,
    DeveloperListComponent
  ]
})
export class DevelopersModule { }
