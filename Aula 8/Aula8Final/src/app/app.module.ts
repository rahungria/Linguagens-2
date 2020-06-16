import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfsComponent } from './profs/profs.component';
import { SugsComponent } from './sugs/sugs.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'professores', component: ProfsComponent},
  {path: 'sugestoes', component: SugsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfsComponent,
    SugsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
