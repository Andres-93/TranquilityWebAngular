import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MiembrosComponent } from './components/miembros/miembros.component';

import {RaidersServiceService} from './services/raiders-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiembrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RaidersServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
