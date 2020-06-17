import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfsComponent } from './profs/profs.component';
import { SugsComponent } from './sugs/sugs.component';
import { CursoCardComponent } from './home/curso-card/curso-card.component';
import { CursoFormComponent } from './home/curso-form/curso-form.component';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'professores', component: ProfsComponent},
  {path: 'sugestoes', component: SugsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfsComponent,
    SugsComponent,
    CursoCardComponent,
    CursoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
