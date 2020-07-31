import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../interfaces/artist';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: [
    './artist-form.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class ArtistFormComponent implements OnInit {

  artistName: string;
  artists: Artist[];
  artist: Artist;
  editForm = false;
  artistForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.artistForm = this.formBuilder.group({
      name: '',
      active: 'false',
      photoUrl: '',
      foundationDate: new Date()
    });
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(r => {
        this.artistName = r.get('name');
        if (this.artistName) {
          this.http.get(environment.serverAddress).subscribe(
            response => {
              this.artists = response as Artist[];
              this.artist = this.artists.find(
                artist => {
                  return artist.name === this.artistName;
                }
              );
              this.artist.foundationDate = new Date(this.artist.foundationDate);
              this.artistForm.patchValue({
                name: this.artist.name,
                active: this.artist.currentlyActive ? 'true' : 'false',
                photoUrl: this.artist.photoUrl,
                foundationDate: this.artist.foundationDate
              });
            }
          );
        } else {
          this.artist = {
            currentlyActive: true,
            foundationDate: new Date(),
            name: '',
            photoUrl: '',
            rating: 5
          };
          this.http.get(environment.serverAddress).subscribe(
            response => {
              this.artists = response as Artist[];
            })
        }
      });
  }

  submit() {
    const artistFormInfo = this.artistForm.value;
    this.artist = {
      ...this.artist,
      ...artistFormInfo,
    };
    if (!this.editForm) {
      this.artists.push(this.artist);
      this.http.post(environment.serverAddress, this.artist).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/']);
        }
      )
    } else {
      this.http.put(environment.serverAddress, this.artist).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/']);
        }
      )
    }
    console.log(this.artist);
  }

}
