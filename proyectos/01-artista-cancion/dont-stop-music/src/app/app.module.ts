import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { SongPageComponent } from './song-page/song-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SongFormComponent } from './song-form/song-form.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ArtistPageComponent,
    SongPageComponent,
    ArtistsListComponent,
    SongsListComponent,
    MainPageComponent,
    SongFormComponent,
    ArtistFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
