import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../interfaces/artist';
import { environment } from 'src/environments/environment';
import { Song } from '../interfaces/song';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: [
    './song-form.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class SongFormComponent implements OnInit {

  songName: string;
  artists: Artist[];
  songsArtists = [];
  songArtist;
  songData: Song;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(r => {
        this.songName = r.get('name');
        if (this.songName) {
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
              this.songData.releaseDate = new Date(this.songData.releaseDate);
            }
          );
        } else {
          this.songData = {
            availableForDownload: true,
            name: '',
            photoUrl: '',
            rating: 0,
            releaseDate: new Date(),
            videoUrl: '',
          }
        }
      });
  }

  getSongs() {
    this.artists.forEach(
      artist => {
        artist.songs.forEach(song => {
          const songArtistAux = {
            song,
            artist: artist.name
          };
          this.songsArtists = this.songsArtists.concat(songArtistAux);
        });
      }
    );
  }

}
