import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/account/login/login.component';
import {SignupComponent} from './component/account/signup/signup.component';
const routes: Routes = [

{
  path:'',
  component:LoginComponent,
  data:{title:'Login'},
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  data:{title:'Login'},
  pathMatch:'full'
}
,
{
  path:'signup',
  component:SignupComponent,
  data:{title:'Login'},
  pathMatch:'full'
},
{
  path:'',
  loadChildren:()=>import('./component/component.module').then(m=>m.ComponentModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
