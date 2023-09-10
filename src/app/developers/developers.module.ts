import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperCenterComponent } from './developer-center/developer-center.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';
import { DevelopersdevelopersRoutingModule } from '../developersdevelopers-routing.module';



@NgModule({
  declarations: [
    DeveloperCenterComponent,
    DeveloperListComponent,
    DeveloperDetailsComponent
  ],
  imports: [
    CommonModule,
    DevelopersdevelopersRoutingModule
  ]
})
export class DevelopersModule { }
