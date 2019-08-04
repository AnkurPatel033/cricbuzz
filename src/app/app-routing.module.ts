import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './service/authguard.service';

const routes: Routes = [
  { path:'author',loadChildren:'./authorization/authorization.module#AuthorizationModule'},
  
  { path:'',loadChildren:'./authorization/authorization.module#AuthorizationModule'},
  { path:'home',loadChildren:'./home/home.module#HomeModule'
  //canActivate:[AuthguardService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
