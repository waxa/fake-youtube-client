import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PlayerComponent } from './player/player.component';
import { LibraryComponent } from './library/library.component';
import { LibraryTabsComponent } from './library-tabs/library-tabs.component';
import { AddComponent } from './add/add.component';

import { UsersService } from './users.service';
import { HeaderService } from './header.service';
import { LibraryService } from './library.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    HeaderComponent,
    PlayerComponent,
    LibraryComponent,
    LibraryTabsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: UsersService, useClass: UsersService },
    { provide: HeaderService, useClass: HeaderService },
    { provide: LibraryService, useClass: LibraryService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
