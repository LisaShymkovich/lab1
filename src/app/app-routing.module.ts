import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperCenterComponent } from './developers/developer-center/developer-center.component';
import { DeveloperListComponent } from './developers/developer-list/developer-list.component';
import { DeveloperDetailsComponent } from './developers/developer-details/developer-details.component';

const routes: Routes = [
  { path:"developers", component: DeveloperCenterComponent, children: [
    {
      path:"details/:id", component: DeveloperDetailsComponent
    },
    {
      path:"list", component: DeveloperListComponent
    },
    {
      path:"", redirectTo:"list", pathMatch: 'full'
    }
  ]},
  { path:"", redirectTo:"developers", pathMatch: 'full'},
  { path:"**", redirectTo: "developers", pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }