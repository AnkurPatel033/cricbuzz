import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import {PlayerComponent} from './player/player.component';
import { PlayerstatesticsComponent } from './playerstatestics/playerstatestics.component';
import { UplcommingmatchesComponent } from './uplcommingmatches/uplcommingmatches.component';
import { LoginComponent } from '../authorization/login/login.component';

const routes:Routes=[
  {path:'',
  component:HomeComponent,
   children:[
  {path:'player',
  component:PlayerComponent},
  {path:'matches',
  component:UplcommingmatchesComponent},
  { path:'playerStat',
    component:PlayerstatesticsComponent
  }]}  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule { }
