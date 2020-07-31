import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../interfaces/artist';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {

  artistName: string;
  artists: Artist[];
  artist: Artist;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(r => {
        this.artistName = r.get('name');
        this.http.get(environment.serverAddress).subscribe(
          response => {
            this.artists = response as Artist[];
            this.artist = this.artists.find(
              artist => {
                return artist.name === this.artistName;
              }
            );
          }
        );
      });
  }

}
