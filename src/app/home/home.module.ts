import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../common/header/header.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { PlayerComponent } from './player/player.component';
import { PlayerstatesticsComponent } from './playerstatestics/playerstatestics.component';
import {MatSidenavModule,MatButtonModule,MatToolbarModule,MatInputModule,MatNativeDateModule,MatIconModule,MatFormFieldModule,MatListModule} from '@angular/material';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { UplcommingmatchesComponent } from './uplcommingmatches/uplcommingmatches.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker'


@NgModule({
  declarations: [HomeComponent,HeaderComponent,SidebarComponent, PlayerComponent, PlayerstatesticsComponent, UplcommingmatchesComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
