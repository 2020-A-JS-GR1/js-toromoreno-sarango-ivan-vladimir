import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../interfaces/artist';
import { environment } from 'src/environments/environment';
import { Song } from '../interfaces/song';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.css']
})
export class SongPageComponent implements OnInit {

  songName: string;
  artists: Artist[];
  songsArtists = [];
  songArtist;
  songData: Song;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitazer: DomSanitizer,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(r => {
        this.songName = r.get('name');
        this.http.get(environment.serverAddress).subscribe(
          response => {
            this.artists = response as Artist[];
            this.getSongs();
            this.songArtist = this.songsArtists.find(
              song => {
                return song.song.name === this.songName;
              }
            );
            this.songData = this.songArtist.song;
          }
        );
      });
  }

  getSongs() {
    this.artists.forEach(
      artist => {
        artist.songs.forEach(song => {
          const songArtistAux = {
            song,
            artist
          };
          this.songsArtists = this.songsArtists.concat(songArtistAux);
        });
      }
    );
  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this.sanitazer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

  delete() {
    const songArtist = this.songsArtists.find(sa => sa.song.name === this.songName);
    const songIndex = songArtist.artist.songs.findIndex(song => song.name === this.songName);
    this.songArtist.artist.songs.splice(songIndex, 1);
    this.http.put(environment.serverAddress, this.songArtist.artist).subscribe(
      response => {
        this.router.navigate(['/']);
      }
    )
  }


}
