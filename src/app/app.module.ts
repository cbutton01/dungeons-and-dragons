import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { routing } from './app-routing';
import { CharacterFormComponent } from './character-form/character-form.component';
import { SpellListComponent } from './spell-list/spell-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    CharacterFormComponent,
    SpellListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
