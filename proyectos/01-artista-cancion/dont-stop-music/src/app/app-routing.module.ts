import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsListComponent } from './songs-list/songs-list.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { SongPageComponent } from './song-page/song-page.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { SongFormComponent } from './song-form/song-form.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'songs-list', component: SongsListComponent },
  { path: 'artists-list', component: ArtistsListComponent },
  { path: 'artist/:name', component: ArtistPageComponent },
  { path: 'song/:name', component: SongPageComponent },
  { path: 'song-edit', component: SongFormComponent },
  { path: 'song-edit/:name', component: SongFormComponent },
  { path: 'artist-edit/:name', component: ArtistFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
