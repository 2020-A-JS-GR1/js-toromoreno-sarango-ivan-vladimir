import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../interfaces/artist';
import { environment } from 'src/environments/environment';
import { Song } from '../interfaces/song';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: [
    './song-form.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class SongFormComponent implements OnInit {

  song: Song;
  artist: Artist;
  editForm;
  songName;
  artistName;
  songForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.songForm = this.formBuilder.group({
      name: '',
      availableForDownload: true,
      videoUrl: '',
      rating: 5,
      releaseDate: new Date(),
      photoUrl: ''
    });
  }

  ngOnInit() {
    this.generateContext().then(
      response => {
        console.log('Context generated');
      }
    )
  }

  async generateContext() {
    this.route.paramMap.subscribe(
      params => {
        if (params.get('name')) {
          this.editForm = true;
          this.songName = params.get('name');
          this.searchSongData();
        } else {
          this.route.queryParamMap.subscribe(
            qParams => {
              this.artistName = qParams.get('artist');
              this.song = {
                name: '',
                availableForDownload: true,
                photoUrl: '',
                rating: 5,
                releaseDate: new Date(),
                videoUrl: ''
              }
              this.searchArtistData();
            }
          )
        }
      }
    )

  }

  searchSongData() {
    this.http.get(environment.serverAddress).subscribe(
      artistsR => {
        const artists = artistsR as Artist[];
        artists.forEach(
          artist => {
            const songF = artist.songs.find(song => song.name === this.songName);
            if (songF) {
              this.song = songF;
              this.songForm.patchValue({
                ...this.song,
                availableForDownload: this.song.availableForDownload ? 'true' : 'false'
              });
              this.artist = artist;
            }
          }
        );
      }
    )
  }

  searchArtistData() {
    this.http.get(environment.serverAddress).subscribe(
      artistsR => {
        const artists = artistsR as Artist[];
        this.artist = artists.find(artist => artist.name === this.artistName);
      }
    );
  }

  submit() {
    const values = this.songForm.value;
    values.availableForDownload = values.availableForDownload === 'true' ? true : false;
    if (this.editForm) {
      const songIndex = this.artist.songs.findIndex(song => song.name === values.name);
      this.artist.songs[songIndex] = values;
      console.log(this.artist);
    } else {
      if (!this.artist.songs) {
        this.artist.songs = [];
      }
      this.artist.songs.push(values);
    }
    this.http.put(environment.serverAddress, this.artist).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/']);
      }
    )
  }
}
