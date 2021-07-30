import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {AuthGuard} from '@core/guard/auth.guard';
const routes: Routes = [
  {
    path: 'admin' ,  canActivateChild: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
