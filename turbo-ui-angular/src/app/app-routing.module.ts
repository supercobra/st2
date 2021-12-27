import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkspaceListComponent} from "./workspace-list/workspace-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'workspaces', pathMatch: 'full'},
  {path: 'workspaces', component: WorkspaceListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
