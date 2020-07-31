import { Component, OnInit } from '@angular/core';
import { Song } from '../interfaces/song';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../interfaces/artist';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

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

  detailSong(song: Artist) {
    this.router.navigate([`/song/${song}`]);
  }

}
