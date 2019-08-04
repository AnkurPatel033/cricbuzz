import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AuthguardService } from './service/authguard.service';
import { PlayerService } from './service/player.service';
import { AuthorService } from './service/author-service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [AuthguardService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
