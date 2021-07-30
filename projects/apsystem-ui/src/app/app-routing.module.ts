import { EmailConfirmComponent } from './component/account/signup/email-Confirm/email-confirm/email-confirm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/account/login/login.component';
import {SignupComponent} from './component/account/signup/signup.component';
import { HomeComponent } from './component/Home/Home.component';
const routes: Routes = [

{
  path: '',
  component: HomeComponent,
  data: {title: 'Home'},
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent,
  data: {title: 'Home'},
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
  data: {title: 'Login'},
  pathMatch: 'full'
}
,
{
  path: 'signup',
  component: SignupComponent,
  data: {title: 'signup'},
  pathMatch: 'full'
},
{
  path: 'activate',
  component: EmailConfirmComponent,
  data: {title: 'EmailConfirm'},
  pathMatch: 'full'
},
{
  path: '',
  loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
