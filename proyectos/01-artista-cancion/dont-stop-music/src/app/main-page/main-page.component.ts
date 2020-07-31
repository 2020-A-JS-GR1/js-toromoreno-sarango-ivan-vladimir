import { Component, OnInit } from '@angular/core';
import { Artist } from '../interfaces/artist';
import { Song } from '../interfaces/song';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  title = 'Don\'t stop the music';
  artists: Artist[];
  songs: Song[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get(environment.serverAddress).subscribe(
      response => {
        this.artists = response as Artist[];
        this.getSongs();
      }
    );
  }

  getSongs() {
    this.artists.forEach(
      artist => {
        this.songs = this.songs.concat(artist.songs);
      }
    );
  }

  exploreSongs() {
    this.router.navigate(['/songs-list']);
  }

  exploreArtists() {
    this.router.navigate(['/artists-list']);
  }

  detailArtist(artist: Artist) {
    this.router.navigate([`/artist/${artist}`]);
  }

  detailSong(song: Song) {
    this.router.navigate([`/song/${song.name}`]);
  }

}
