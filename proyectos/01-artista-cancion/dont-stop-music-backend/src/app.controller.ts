import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import * as path from 'path';
import { Artist } from './interfaces/artist';

@Controller('dsmbcknd')
export class AppController {

  dbPath = path.resolve(__dirname, './db/db.json');

  constructor(private readonly appService: AppService) { }

  @Get()
  getArtists(): string {
    return fs.readFileSync(this.dbPath.toString()).toString();
  }

  @Post()
  createArtist(@Body() artist: Artist): Artist {
    const prevCont = fs.readFileSync(this.dbPath.toString()).toString();
    const artists: Artist[] = JSON.parse(prevCont);
    artists.push(artist);
    fs.writeFileSync(this.dbPath.toString(), JSON.stringify(artists));
    return artist;
  }

  @Put()
  updateArtist(@Body() artistToUpdate: Artist): Artist {
    const prevCont = fs.readFileSync(this.dbPath.toString()).toString();
    const artists: Artist[] = JSON.parse(prevCont);
    const artistToUpdateIndex = artists.findIndex(artist => artist.name === artistToUpdate.name);
    artists[artistToUpdateIndex] = artistToUpdate;
    fs.writeFileSync(this.dbPath.toString(), JSON.stringify(artists));
    return artistToUpdate;
  }

  @Delete(':name')
  deleteArtist(@Param() params): boolean {
    const prevCont = fs.readFileSync(this.dbPath.toString()).toString();
    const artists: Artist[] = JSON.parse(prevCont);
    const artistToDeleteIndex = artists.findIndex(artist => artist.name === params.name);
    artists.splice(artistToDeleteIndex, 1);
    fs.writeFileSync(this.dbPath.toString(), JSON.stringify(artists));
    return true;
  }
}
