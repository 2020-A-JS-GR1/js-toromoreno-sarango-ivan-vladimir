import { Component, OnInit } from '@angular/core';
import { Artist } from '../interfaces/artist';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Song } from '../interfaces/song';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

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
      }
    );
  }

  detailArtist(artist: Artist) {
    this.router.navigate([`/artist/${artist}`]);
  }

}
