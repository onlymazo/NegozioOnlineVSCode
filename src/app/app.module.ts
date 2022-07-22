import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticolilistComponent } from './components/articolilist/articolilist.component';
import { ArticoloformComponent } from './components/articoloform/articoloform.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { UtenteService } from './services/utente.service';
import { ArticoloService } from './services/articolo.service';


const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: RegistrazioneComponent},
  {path:'articoli', component: ArticolilistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ArticolilistComponent,
    ArticoloformComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [
    {provide:APP_BASE_HREF, useValue:'/'},
    UtenteService,
    ArticoloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
