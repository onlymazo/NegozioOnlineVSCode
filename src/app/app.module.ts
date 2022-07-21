import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticolilistComponent } from './components/articolilist/articolilist.component';
import { ArticoloformComponent } from './components/articoloform/articoloform.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';

const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: RegistrazioneComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ArticolilistComponent,
    ArticoloformComponent,
    RegistrazioneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
